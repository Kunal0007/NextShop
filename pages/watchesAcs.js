import React from 'react'
import Link from 'next/Link'
import mongoose from 'mongoose'
import Product from '../models/product'

const WatchesAcs = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-7 sm:px-24 pb-7 mx-auto">
          <h1 className='text-center text-black font-bold text-3xl my-10'>Watches & Accessories</h1>
          <div className="flex flex-wrap -m-4 justify-evenly">
            {products.map((item) => {
              return (
                <Link key={item._id} href={`/product/${item.slug}`}>
                  <div className="lg:w-1/5 md:w-1/3 m-2 p-4 w-full shadow-md cursor-pointer">
                    <a className="block relative rounded overflow-hidden">
                      <img alt="ecommerce" className="object-cover object-center w-full shadow-md h-80 block" src={item.img} />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.catogory}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                      <p className="mt-1">₹{item.price}.00</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  const products = await Product.find({ category: 'Watches & Accessories' });

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}

export default WatchesAcs