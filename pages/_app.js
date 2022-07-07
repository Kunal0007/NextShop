import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    try {
      if (cart) {
        setCart(JSON.parse(cart));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [])

  const saveCart = (cart) => {
    console.log("saving cart");
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const addtoCart = (itemCode, itemName, itemPrice, itemQty) => {
    let newCart = cart;
    if (itemCode in newCart) {
      newCart[itemCode].itemQty += itemQty;
    }
    else {
      newCart[itemCode] = {
        itemCode,
        itemName,
        itemPrice,
        itemQty
      }
    }
    console.log(newCart);
    setCart(newCart);
    saveCart(newCart);
  }

  const removefromCart = (itemCode, itemName, itemPrice, itemQty) => {
    let newCart = cart;
    if (itemCode in newCart) {
      newCart[itemCode].itemQty -= itemQty;
    }
    if(newCart[itemCode].itemQty <= 0) {
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
      <Navbar cart={cart} saveCart={saveCart} addtoCart={addtoCart} removefromCart={removefromCart} clearCart={clearCart} />
      <Component {...pageProps} cart={cart} saveCart={saveCart} addtoCart={addtoCart} 
      removefromCart={removefromCart} clearCart={clearCart} />
      <Footer />
    </>
  )
}

export default MyApp
