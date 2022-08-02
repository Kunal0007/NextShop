import React, { useRef, useState } from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'

const Navbar = ({ user, cart, saveCart, addtoCart, removefromCart, clearCart, logout }) => {

    const [dropdown, setDropdown] = useState(false);

    const navbarToggle = () => {
        if (ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('hidden');
            ref.current.classList.add('block');
        }
        else if (!ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('block');
            ref.current.classList.add('hidden');
        }
    }

    const cartToggle = () => {
        if (refcart.current.classList.contains('translate-x-full')) {
            refcart.current.classList.remove('translate-x-full');
            refcart.current.classList.add('translate-x-0');
        }
        else if (!refcart.current.classList.contains('translate-x-full')) {
            refcart.current.classList.remove('translate-x-0');
            refcart.current.classList.add('translate-x-full');
        }
    }

    const ref = useRef();
    const refcart = useRef();

    return (
        <div>
            <nav className="bg-white-800 shadow-md sticky z-10">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button onClick={navbarToggle} type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-black hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" id='navbutton' aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
                                Icon when menu is closed.

                                Heroicon name: outline/menu

                                Menu open: "hidden", Menu closed: "block" --> */}
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                {/* <!--
                                Icon when menu is open.

                                Heroicon name: outline/x

                                Menu open: "block", Menu closed: "hidden"
          --> */}
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:text-black hover:bg-slate-200" --> */}
                                    <Link href={'/'}>
                                        <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                                    </Link>
                                    <Link href={'/tshirts'}>
                                        <a href="#" className="text-black-300 hover:text-black hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium">T-Shirts</a>
                                    </Link>
                                    <Link href={'/causalwear'}>
                                        <a href="#" className="text-black-300 hover:text-black hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium">Causal wear</a>
                                    </Link>
                                    <Link href={'/footwear'}>
                                        <a href="#" className="text-black-300 hover:text-black hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium">Footer wear</a>
                                    </Link>
                                    <Link href={'/watchesAcs'}>
                                        <a href="#" className="text-black-300 hover:text-black hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium">Watches & Accessories</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" onClick={cartToggle} className="bg-white-800 p-1.5 rounded-full text-black-400 hover:text-black hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View Cart</span>
                                {/* <!-- Heroicon name: outline/bell --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>

                            {/* <!-- Login Page --> */}
                            <div className="ml-3 relative cursor-pointer">
                                <div>
                                    <a onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                        {user.value && <AiOutlineUser className="h-6 w-6" />}
                                    </a>                                    
                                    {!user.value && <Link href={'/login'}>
                                        <button type="button" className="flex p-1.5 text-md rounded-md font-semibold hover:text-black hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="login-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="sr-only">User login</span>
                                            Login
                                        </button>
                                    </Link>}
                                </div>
                                {dropdown && <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">                                    
                                    <Link href={'/account'}><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a></Link>
                                    <Link href={'/orders'}><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-1">Order</a></Link>
                                    <a onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div ref={ref} className="t hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:text-black hover:bg-slate-200" --> */}
                        <Link href={'/'}>
                            <a className="text-gray-300 hover:text-black hover:bg-slate-200 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
                        </Link>

                        <Link href={'/tshirts'}>
                            <a className="text-gray-300 hover:text-black hover:bg-slate-200 block px-3 py-2 rounded-md text-base font-medium">T-Shirts</a>
                        </Link>

                        <Link href={'/causalwear'}>
                            <a className="text-gray-300 hover:text-black hover:bg-slate-200 block px-3 py-2 rounded-md text-base font-medium">Causal wear</a>
                        </Link>

                        <Link href={'/footwear'}>
                            <a className="text-gray-300 hover:text-black hover:bg-slate-200 block px-3 py-2 rounded-md text-base font-medium">Footer wear</a>
                        </Link>

                        <Link href={'/watchesAcs'}>
                            <a className="text-gray-300 hover:text-black hover:bg-slate-200 block px-3 py-2 rounded-md text-base font-medium">Watches & Accessories</a>
                        </Link>
                    </div>
                </div>

                <div ref={refcart} className={`cart h-[100vh] pl-7 pr-7 py-10 bg-gray-200 absolute top-0 right-0 transform transition-transform translate-x-full`} >
                    <h2 className='text-2xl font-medium my-2'>Shopping Cart</h2>
                    <span onClick={cartToggle} className='absolute top-3 right-3 text-xl cursor-pointer'><AiFillCloseCircle /></span>
                    <div className='cart-items my-4'>
                        <ol className='font-semibold flex-col'>
                            {Object.keys(cart).length == 0 && <div className='text-center p-2 text-lg bg-gray-100 my-2 rounded-md'>No items in cart</div>}
                            {Object.keys(cart).map((item, index) => {
                                return (
                                    <li key={index} className='p-2 text-lg bg-gray-100 my-2 rounded-md flex flex-col'>
                                        <span className='border-b-2 pr-2 border-gray-300 text-center'>{cart[item].itemName}</span>
                                        <div className='flex'>
                                            <span className='mx-2 pr-2 w-1/2 text-center border-r-2 border-gray-300'>{cart[item].subTotal}</span>
                                            <div className='flex items-center justify-center w-1/2'>
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
                                            </div></div>

                                    </li>
                                )
                            })}

                        </ol>
                    </div>
                    <div className='flex'>
                        <Link href={'/checkout'}>
                            <button disabled={!Object.keys(cart).length} className="flex text-white bg-indigo-500 border-0 py-2 px-4 mr-2 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button>
                        </Link>
                        <button onClick={clearCart} className="flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">Clear Cart</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar