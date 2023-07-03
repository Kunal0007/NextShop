import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Product from '../../models/product'
import mongoose from 'mongoose'

const Post = ({ addtoCart, buyNow, product, variants }) => {

    // console.log(product, variants);
    // console.log(variants[Object.keys(variants)[0]]);

    const [color, setColor] = useState(product.color);
    const [size, setSize] = useState(product.size);

    const router = useRouter()
    const { slug } = router.query

    const [pincode, setPincode] = useState()
    const [service, setService] = useState();

    const checkServiceability = async () => {
        let pins = await fetch(`${process.env.NEXT_DOMAIN}/api/pincode`);
        let pinjson = await pins.json();
        if (pinjson.includes(parseInt(pincode))) {
            setService(true);
        }
        else {
            setService(false);
        }
    }

    const handleChange = (event) => {
        setPincode(event.target.value)
    }

    const handlebuyNow = () => {
        if(!localStorage.getItem('token')){
            router.push('/login');
        }
        else {
            buyNow(slug, `${product.title}(${product.color}/${product.size})`, product.price, 1)
        }        
    }

    const handleAddtoCart = () => {
        if(!localStorage.getItem('token')){
            router.push('/login');
        }
        else {
            addtoCart(slug, `${product.title}(${product.color}/${product.size})`, product.price, 1)
        }        
    }
       

    const refreshVariants = (newcolor, newsize) => {
        if(!Object.keys(variants[newcolor]).includes(newsize)){
            newsize = Object.keys(variants[newcolor])[0];
        }
        let url = `${process.env.NEXT_DOMAIN}/product/${variants[newcolor][newsize].slug}`
        window.location = url;
    }

    return (
        <>
            <p>Slug: {slug}</p>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-scale-down object-center rounded" src={product.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                            <h1 className="text-gray-900 text-3xl title-font pb-3 font-medium border-b-2 border-gray-100 mb-5">{product.title}</h1>                            
                            <p className="leading-relaxed">{product.desc}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    {Object.keys(variants).includes('Orange') &&
                                        <button onClick={() => {refreshVariants('Orange', size)}} className={`border-2 border-gray-300 bg-orange-600 rounded-full w-6 h-6 focus:outline-none ${color == 'Orange' ? 'border-black' : 'border-gray-300'} focus:border-black`}></button>}
                                    {Object.keys(variants).includes('Yellow') &&
                                        <button onClick={() => {refreshVariants('Yellow', size)}} className={`border-2 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none ${color == 'Yellow' ? 'border-black' : 'border-gray-300'} focus:border-black`}></button>}
                                    {Object.keys(variants).includes('Red') &&
                                        <button onClick={() => {refreshVariants('Red', size)}} className={`border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none ${color == 'Red' ? 'border-black' : 'border-gray-300'} focus:border-black`}></button>}
                                    {Object.keys(variants).includes('Black') &&
                                        <button onClick={() => {refreshVariants('Black', size)}} className={`border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color == 'Black' ? 'border-gray-700' : 'border-gray-300'} focus:border-gray-700`}></button>}
                                    {Object.keys(variants).includes('Purple') &&
                                        <button onClick={() => {refreshVariants('Purple', size)}} className={`border-2 border-gray-300 ml-1 bg-purple-600 rounded-full w-6 h-6 focus:outline-none ${color == 'Purple' ? 'border-black' : 'border-gray-300'} focus:border-black`}></button>}
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select value={size} onChange={(e) => {refreshVariants(color, e.target.value)}} className="rounded cursor-pointer border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            {Object.keys(variants[color]).includes('SM') && <option value={'SM'}>SM</option>}
                                            {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                                            {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                                            {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                                            {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>    }
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b-2 border-gray-100 mb-5 pb-5">
                                <span className="title-font font-medium text-2xl text-gray-900 basis-2/5">₹{product.price}.00</span>
                                <button onClick={handlebuyNow} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">BUY NOW </button>
                                <button onClick={handleAddtoCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className='flex my-4 '>
                                <input type="text" className='border-2 rounded mr-2 p-1 focus:outline-none' placeholder='Pincode' onChange={handleChange} />
                                <button onClick={checkServiceability} className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Check</button>
                            </div>
                            {(service && service != null)
                                && <div className='text-green-600'>Yay! Service is available at this pincode</div>
                            }
                            {(!service && service != null)
                                && <div className='text-red-600'>Sorry! Service is not available at this pincode yet</div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {

    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }

    let product = await Product.findOne({ slug: context.query.slug });
    let variants = await Product.find({ title: product.title, category: product.category });
    let colorSizeSlug = {};
    for (let item of variants) {
        if (Object.keys(colorSizeSlug).includes(item.color)) {
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        } else {
            colorSizeSlug[item.color] = {}
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        }
    }

    return {
        props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
    }
}

export default Post