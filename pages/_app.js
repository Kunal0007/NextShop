import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [user, setUser] = useState({value: null});
  const [key, setKey] = useState(0);
  const [progress, setProgress] = useState(0)
  const router = useRouter();

  useEffect(() => {
    console.log("useEffect");
    router.events.on('routeChangeStart', () => {
      setProgress(40);
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    })
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.events, router.query])

  const logout = () => {
    localStorage.removeItem('token');
    setUser({ value: null });
    setKey(Math.random());
  }

  const saveCart = (mycart) => {
    console.log("saving cart");
    localStorage.setItem('cart', JSON.stringify(mycart));

    let total = 0;
    let keys = Object.keys(mycart);
    for (let i = 0; i < keys.length; i++) {
      total += mycart[keys[i]].itemPrice * mycart[keys[i]].itemQty;
    }
    setCartTotal(total);
  }

  const addtoCart = (itemCode, itemName, itemPrice, itemQty) => {
    console.log("adding to cart");
    let newCart = cart;
    let subTotal = itemPrice;
    if (itemCode in newCart) {
      newCart[itemCode].itemQty += itemQty;
      newCart[itemCode].subTotal = newCart[itemCode].itemPrice * newCart[itemCode].itemQty;
    }
    else {
      newCart[itemCode] = {
        itemCode,
        itemName,
        itemPrice,
        itemQty,
        subTotal
      }
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const buyNow = (itemCode, itemName, itemPrice, itemQty) => {
    let subTotal = itemPrice;
    let newCart = {
      itemCode: {
        itemCode,
        itemName,
        itemPrice,
        itemQty,
        subTotal
      }
    };

    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  }

  const removefromCart = (itemCode, itemName, itemPrice, itemQty) => {
    let newCart = cart;
    if (itemCode in newCart) {
      newCart[itemCode].itemQty -= itemQty;
      newCart[itemCode].subTotal = newCart[itemCode].itemPrice * newCart[itemCode].itemQty;
    }
    if (newCart[itemCode].itemQty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }

  return (
    <>
      <LoadingBar
        color='#5856d6'
        progress={progress}
        waitingTime={500}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar key={key} user={user} cart={cart} saveCart={saveCart} addtoCart={addtoCart} removefromCart={removefromCart} clearCart={clearCart} logout={logout} />
      <Component {...pageProps} cart={cart} saveCart={saveCart} addtoCart={addtoCart} buyNow={buyNow}
        removefromCart={removefromCart} clearCart={clearCart} cartTotal={cartTotal} />
      <Footer />
    </>
  )
}

export default MyApp
