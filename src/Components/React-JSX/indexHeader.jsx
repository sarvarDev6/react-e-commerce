// Called React Libraries goes here
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MainContainer from './mainContainer';


// StyleSheet for this react file
import "../Stylesheets/indexHeader.scss";


// Called Local Image from Local-Images folder
import openShopLogo from "../Local-Images/open-shop-logo.png";
import IndexMainSlider from './indexMainSlider';

function IndexHeader() {

    const [sliderData, setSliderData] = useState([]);


    // Header Slider Data's API URL
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/slider')
            .then(res => setSliderData(res.data));
    }, []);




    return (
        <header>
            <div className='bg-slate-100'>
                <MainContainer>
                    <div className="topOption flex w-full h-16 justify-between items-center">
                        <h1>SALE OF ELECTRONICS AT <b>THE BEST PRICES</b></h1>
                        <div className="registration flex gap-6">
                            <h2 className='hover: cursor-pointer'>Telegram Bot</h2>
                            <div className="registerBtn flex gap-2">
                                <h2 className='hover: cursor-pointer'><i class="fa-regular fa-user"></i> Login</h2> /
                                <h2 className='hover: cursor-pointer'>Registration</h2>
                            </div>
                        </div>
                    </div>
                </MainContainer>
            </div>
            <MainContainer>
                <div className="secondOption h-32 flex items-center justify-between">
                    <img src={openShopLogo} className='w-64 h-14 hover: cursor-pointer' alt="OPENSHOP.ENG" />
                    <div className="contact flex items-center gap-7">
                        <div className="callUs flex gap-3 items-center">
                            <i class="fas fa-regular fa-phone text-3xl text-gray-700 hover: cursor-pointer"></i>
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
                                        <i class="fa-regular fa-heart text-3xl text-gray-700"></i>
                                        <span className='absolute ml-8'>0</span>
                                    </div>
                                    <h1>Wishlist</h1>
                                </div>
                            </div>
                            <div className="cart flex">
                                <div>
                                    <div className="flex">
                                        <i class="fa-solid fa-bag-shopping text-3xl text-gray-700"></i>
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
                                        <h1 className='font-semibold'><i class="fa-solid fa-list-ul text-gray-600 mr-2"></i> ALL CATEGORIES</h1>
                                        <i class="fa-solid fa-chevron-down text-gray-500 text-xs"></i>
                                    </div>
                                    <div className="dropDownContent w-72 bg-white absolute z-40">
                                        <ol className='leading-8 text-gray-600'>
                                            <div className='liDiv-1'>
                                                <li className='font-bold hover: cursor-pointer p-2'><span><i class="fa-solid fa-mobile text-gray-600"></i> Phone</span> <i class="fa-solid fa-chevron-right text-xs"></i></li>
                                                <div className="phoneMoreCategory bg-white p-5 absolute ml-72">
                                                    <h2 className='font-semibold text-xl relative'>Phones</h2>
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
                                            <li className='font-bold hover: cursor-pointer p-2'><span><i class="fa-solid fa-tablet text-gray-600"></i> Tablets</span> <i class="fa-solid fa-chevron-right text-xs"></i></li>
                                            <hr />
                                            <li className='font-bold hover: cursor-pointer p-2'><span><i class="fa-solid fa-laptop text-gray-600"></i> Laptops</span> <i class="fa-solid fa-chevron-right text-xs"></i></li>
                                            <hr />
                                            <li className='font-bold hover: cursor-pointer p-2'><span><i class="fa-regular fa-clock text-gray-600"></i> Watches</span> <i class="fa-solid fa-chevron-right text-xs"></i></li>
                                            <hr />
                                            <li className='font-bold hover: cursor-pointer p-2'><span><i class="fa-solid fa-headphones-simple text-gray-600"></i> Accessurs and gadgets</span> <i class="fa-solid fa-chevron-right text-xs"></i></li>
                                            <hr />
                                            <li className='font-bold hover: cursor-pointer p-2'><span><i class="fa-solid fa-screwdriver-wrench text-gray-600"></i> PC Equipment</span> <i class="fa-solid fa-chevron-right text-xs"></i></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <ul className='flex gap-7'>
                                <li className='active hover: cursor-pointer'>Home</li>
                                <li className='hover: cursor-pointer'>Site Map</li>
                                <li className='hover: cursor-pointer'>Installment</li>
                                <li className='hover: cursor-pointer'>Our locations</li>
                            </ul>
                        </div>
                        <h1 className='phonesCate text-2xl font-semibold hover: cursor-pointer'><i class="fa-solid fa-mobile text-2xl"></i> Phones</h1>
                    </div>
                </MainContainer>
            </nav>
            <MainContainer>
                <IndexMainSlider sliderData={sliderData} />
            </MainContainer>
        </header>
    )
}

export default IndexHeader