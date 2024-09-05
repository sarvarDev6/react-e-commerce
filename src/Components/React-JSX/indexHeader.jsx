// Called React Libraries goes here
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MainContainer from './mainContainer';
import { Carousel } from "flowbite-react";
import openShopLogo from "../Local-Images/open-shop-logo.png";

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
                            <div className="allCate w-72 h-14 p-5 flex items-center justify-between bg-slate-100 hover: cursor-pointer">
                                <h1 className='font-semibold'><i class="fa-solid fa-list-ul text-gray-600 mr-2"></i> ALL CATEGORIES</h1>
                                <i class="fa-solid fa-chevron-down text-gray-500 text-xs"></i>
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
                <div className="flex gap-7">
                    <div className="dropDownMenu w-72">
                        <ul>
                            <li className='cateLis'><i class="fa-solid fa-mobile"></i> Phones</li>
                            <hr />
                            <li className='cateLis'><i class="fa-solid fa-tablet"></i> Tablets</li>
                            <hr />
                            <li className='cateLis'><i class="fa-solid fa-laptop"></i> Laptops</li>
                            <hr />
                            <li className='cateLis'><i class="fa-regular fa-clock"></i> Watches</li>
                            <hr />
                            <li className='cateLis'><i class="fa-solid fa-headphones-simple"></i> Accessuars</li>
                            <hr />
                            <li className='cateLis'><i class="fa-solid fa-screwdriver-wrench"></i> PC Equipments</li>
                            <hr />
                        </ul>
                    </div>
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                            <Carousel>
                                {
                                    sliderData.map((item) => {
                                        return (
                                            <img className='w-6/12 mt-5 rounded-lg' src={item.img}></img>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </header>
    )
}

export default IndexHeader