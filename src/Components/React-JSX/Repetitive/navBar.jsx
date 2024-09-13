// Called React Libraries
import React from 'react'
import { Link } from 'react-router-dom';

// Stylesheet for this file
import "../../Stylesheets/navBar.scss"


// Called Components
import MainContainer from './mainContainer';


// Locally imported images
import openShopLogo from "../../Local-Images/open-shop-logo.png";


function NavBar({ userData }) {

    console.log(userData);


    return (
        <>
            <div className='bg-slate-100'>
                <MainContainer>
                    <div className="topOption flex w-full h-16 justify-between items-center">
                        <h1>SALE OF ELECTRONICS AT <b>THE BEST PRICES</b></h1>
                        <div className="registration flex gap-6">
                            <a href="https://t.me/openshopuz_bot" target='_blank'><h2 className='hover: cursor-pointer'>Telegram Bot</h2></a>
                            <div className="registerBtn flex gap-2">
                                <Link to="/user/login"><h2 className='hover: cursor-pointer'><i className="fa-regular fa-user"></i> Login</h2></Link> /
                                <Link to="/user/registration"><h2 className='hover: cursor-pointer'>Registration</h2></Link>
                            </div>
                        </div>
                    </div>
                </MainContainer>
            </div>
            <MainContainer>
                <div className="secondOption h-32 flex items-center justify-between">
                    <Link to="/"><img src={openShopLogo} className='w-64 h-14 hover: cursor-pointer' alt="OPENSHOP.ENG" /></Link>
                    <div className="contact flex items-center gap-7">
                        <div className="callUs flex gap-3 items-center">
                            <i className="fas fa-regular fa-phone text-3xl text-gray-700 hover: cursor-pointer"></i>
                            <div>
                                <h1 className='hover: cursor-pointer'>Call Now</h1>
                                <h2 className='font-semibold hover: cursor-pointer'>+998 71 203 66 60</h2>
                            </div>
                        </div>
                        <div className='bg-slate-300 h-12' style={{ width: "1px" }}></div>
                        <div className="wishAndCart flex items-center gap-7">
                            <div className="wish flex">
                                <div>
                                    <div className="flex justify-center">
                                        <i className="fa-regular fa-heart text-3xl text-gray-700"></i>
                                        <span className='absolute ml-8'>0</span>
                                    </div>
                                    <h1>Wishlist</h1>
                                </div>
                            </div>
                            <div className="cart flex">
                                <div>
                                    <div className="flex">
                                        <i className="fa-solid fa-bag-shopping text-3xl text-gray-700"></i>
                                        <span className='absolute ml-4'>0</span>
                                    </div>
                                    <h1>Cart</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainContainer>
            <nav className='flex items-center'>
                <MainContainer>
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-5'>
                            <div className="dropDownMenu">
                                <div className="allCate w-72 h-14 flex items-center justify-between bg-slate-100 hover: cursor-pointer">
                                    <div className="p-5 flex items-center justify-between w-72">
                                        <h1 className='font-semibold'><i className="fa-solid fa-list-ul text-gray-600 mr-2"></i> ALL CATEGORIES</h1>
                                        <i className="fa-solid fa-chevron-down text-gray-500 text-xs"></i>
                                    </div>
                                    <div className="dropDownContent w-72 bg-white absolute z-40">
                                        <ol className='leading-8 text-gray-600'>
                                            <div className='liDiv-1'>
                                                <Link to="/shop/phones"><li className='font-bold hover: cursor-pointer p-2'><span><i className="fa-solid fa-mobile text-gray-600"></i> Phone</span> <i className="fa-solid fa-chevron-right text-xs"></i></li></Link>
                                                <div className="phoneMoreCategory w-72 bg-white p-5 absolute ml-72">
                                                    <h2 className='font-semibold text-xl relative'>Phones</h2>
                                                    <ol>
                                                        <Link to="/shop/phones/xiaomi"><li>Xiaomi</li></Link>
                                                        <Link to="/shop/phones/samsung"><li>Samsung</li></Link>
                                                        <Link to="/shop/phones/apple"><li>Apple</li></Link>
                                                        <Link to="/shop/phones/honor"><li>Honor</li></Link>
                                                        <Link to="/shop/phones/tecno"><li>Tecno</li></Link>
                                                        <Link to="/shop/phones/infinix"><li>Infinix</li></Link>
                                                    </ol>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="liDiv-2">
                                                <Link to="/shop/tablets"><li className='font-bold hover: cursor-pointer p-2'><span><i className="fa-solid fa-tablet text-gray-600"></i> Tablets</span> <i className="fa-solid fa-chevron-right text-xs"></i></li></Link>
                                                <div className="tabletMoreCategory w-72 bg-white p-5 absolute ml-72">
                                                    <h2 className='font-semibold text-xl relative'>Tablets</h2>
                                                    <ol>
                                                        <Link to="/shop/tablets/xiaomi"><li>Xiaomi</li></Link>
                                                        <Link to="/shop/tablets/samsung"><li>Samsung</li></Link>
                                                        <Link to="/shop/tablets/apple"><li>Apple</li></Link>
                                                    </ol>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="liDiv-3">
                                                <Link to="/shop/laptops"><li className='font-bold hover: cursor-pointer p-2'><span><i className="fa-solid fa-laptop text-gray-600"></i> Laptops</span> <i className="fa-solid fa-chevron-right text-xs"></i></li></Link>
                                                <div className="laptopMoreCategory w-72 bg-white p-5 absolute ml-72">
                                                    <h2 className='font-semibold text-xl relative'>Laptops</h2>
                                                    <ol>
                                                        <Link to="/shop/laptops/mac-book"><li>MacBook</li></Link>
                                                        <li>MSI</li>
                                                        <li>HP</li>
                                                        <li>Acer</li>
                                                        <li>Lenovo</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="liDiv-4">
                                                <li className='font-bold hover: cursor-pointer p-2'><span><i className="fa-regular fa-clock text-gray-600"></i> Watches</span> <i className="fa-solid fa-chevron-right text-xs"></i></li>
                                                <div className="watchMoreCategory w-72 bg-white p-5 absolute ml-72">
                                                    <h2 className='font-semibold text-xl relative'>Watches</h2>
                                                    <ol>
                                                        <li>Xiaomi</li>
                                                        <li>Apple</li>
                                                        <li>Samsung</li>
                                                        <li>Honor</li>
                                                        <li>Tecno</li>
                                                        <li>Infinix</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="liDiv-5">
                                                <li className='font-bold hover: cursor-pointer p-2'><span><i className="fa-solid fa-headphones-simple text-gray-600"></i> Accessurs and gadgets</span> <i className="fa-solid fa-chevron-right text-xs"></i></li>
                                                <div className="accessuarMoreCategory w-72 bg-white p-5 absolute ml-72">
                                                    <h2 className='font-semibold text-xl relative'>Accessuars and gadgets</h2>
                                                    <ol>
                                                        <li>Xiaomi</li>
                                                        <li>Apple</li>
                                                        <li>Samsung</li>
                                                        <li>Honor</li>
                                                        <li>Tecno</li>
                                                        <li>Infinix</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="liDiv-6">
                                                <li className='font-bold hover: cursor-pointer p-2'><span><i className="fa-solid fa-screwdriver-wrench text-gray-600"></i> PC Equipment</span> <i className="fa-solid fa-chevron-right text-xs"></i></li>
                                                <div className="equipmentMoreCategory w-72 bg-white p-5 absolute ml-72">
                                                    <h2 className='font-semibold text-xl relative'>PC equipment</h2>
                                                    <ol>
                                                        <li>Xiaomi</li>
                                                        <li>Apple</li>
                                                        <li>Samsung</li>
                                                        <li>Honor</li>
                                                        <li>Tecno</li>
                                                        <li>Infinix</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <ul className='flex gap-7'>
                                <Link to="/"><li className={window.location.pathname == '/' ? `active hover: cursor-pointer` : 'hover: cursor-pointer'}>Home</li></Link>
                                <li className='hover: cursor-pointer'>Site Map</li>
                                <li className='hover: cursor-pointer'>Installment</li>
                                <li className='hover: cursor-pointer'>Our locations</li>
                            </ul>
                        </div>
                        <Link to="/shop/phones"><h1 className='phonesCate text-2xl font-semibold hover: cursor-pointer'><i className="fa-solid fa-mobile text-2xl"></i> Phones</h1></Link>
                    </div>
                </MainContainer>
            </nav>
        </>
    )
}

export default NavBar