import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'


const checkout = ({cart, addtoCart, removefromCart, clearCart, cartTotal}) => {
    return (
        <div className='container px-7 sm:px-24 pb-14 mx-auto'>
            <h1 className='text-center font-bold text-3xl my-10'>Checkout</h1>
            <h2 className='font-semibold'>1.Delivery Details</h2>
            <div className="flex flex-col sm:flex-row">
                <div className="p-2 w-full sm:w-1/2">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="p-2 w-full">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="p-2 w-full sm:w-1/2">
                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                    <input type="text" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                    <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="p-2 w-full sm:w-1/2">
                    <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                    <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                    <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <h2 className='font-semibold'>2.Review Cart Items</h2>
            <div className='cart px-5 sm:px-7 py-10 bg-gray-200' >
                    <div className='cart-items my-4'>
                        <div className='p-2 text-lg border-b-2 border-gray-600 my-2 flex justify-around text-center'>
                            <h3 className='font-semibold basis-1/4'>Product</h3>
                            <h3 className='font-semibold hidden md:block'>Price</h3>
                            <h3 className='font-semibold'>Quantity</h3>
                            <h3 className='font-semibold'>Total</h3>
                        </div>
                        <ol className='font-semibold flex-col'>
                            {Object.keys(cart).length == 0 && <div className='text-center p-2 text-lg bg-gray-100 my-2 rounded-md'>No items in cart</div>}
                            {Object.keys(cart).map((item, index) => {
                                return (
                                    <li key={index} className='p-2 text-lg bg-gray-100 my-2 rounded-md flex justify-around text-center items-center'>
                                        <span className='basis-1/4'>{cart[item].itemName}</span>
                                        <span className='hidden md:block'>{cart[item].itemPrice}</span>                                        
                                        <div className='flex items-center'>
                                            <AiOutlineMinusCircle className='mr-2 cursor-pointer'
                                                onClick={() => {
                                                    removefromCart(item,
                                                        cart[item].itemName,
                                                        cart[item].itemPrice,
                                                        1)
                                                }}
                                            />
                                            <span>{cart[item].itemQty}</span>
                                            <AiOutlinePlusCircle className='ml-2 cursor-pointer'
                                                onClick={() => {
                                                    addtoCart(item,
                                                        cart[item].itemName,
                                                        cart[item].itemPrice,
                                                        1)
                                                }} />
                                        </div>
                                        <span className=''>{cart[item].subTotal}</span>
                                    </li>
                                )
                            })}

                        </ol>
                    </div>
                    <div className='text-end my-2'><h3 className='font-semibold text-xl'>Grand Total : ₹ {cartTotal}</h3></div>
                    <div className='flex justify-end'>
                        <button className="flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">Order Now</button>
                    </div>
                </div>
        </div>
    )
}

export default checkout