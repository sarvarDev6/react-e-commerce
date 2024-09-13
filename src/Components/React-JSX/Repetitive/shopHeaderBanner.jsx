// Called React libraries
import React from 'react'
import MainContainer from './mainContainer'
import { Link } from 'react-router-dom';

// Called React icons for locally use
import { BiChevronRight } from "react-icons/bi";


// Stylesheet for this file 
import "../../Stylesheets/shopHeaderBanner.scss";


// Locally called images
import shopBannerPhones from "../../Local-Images/shopBannerPhones.png";
import shopBannerTablets from "../../Local-Images/shopBannerTablets.png";
import shopBannerLaptops from "../../Local-Images/shopBannerLaptops.png";

function ShopHeaderBanner() {
    return (
        <header>
            <MainContainer>
                <h1 className='text-center mt-10 font-bold text-2xl mb-5'>Phones, tablets and laptops</h1>
                <div className="banner flex items-center justify-between">
                    <div className="phones flex items-start justify-between p-5">
                        <div>
                            <Link to="/shop/phones"><h1 className='text-xl font-bold mb-5 hover: cursor-pointer'>Phones</h1></Link>
                            <ul>
                                <Link to="/shop/phones/xiaomi"><li className='flex items-center text-gray-700'><BiChevronRight /> Xiaomi</li></Link>
                                <Link to="/shop/phones/samsung"><li className='flex items-center text-gray-700'><BiChevronRight /> Samsung</li></Link>
                                <Link to="/shop/phones/apple"><li className='flex items-center text-gray-700'><BiChevronRight /> Apple</li></Link>
                                <Link to="/shop/phones/honor"><li className='flex items-center text-gray-700'><BiChevronRight /> Honor</li></Link>
                                <Link to="/shop/phones/tecno"><li className='flex items-center text-gray-700'><BiChevronRight /> Tecno</li></Link>
                                <Link to="/shop/phones/infinix"><li className='flex items-center text-gray-700'><BiChevronRight /> Infinix</li></Link>
                            </ul>
                        </div>
                        <img className='w-28' src={shopBannerPhones}></img>
                    </div>
                    <div className="tablets flex items-start justify-between p-5">
                        <div>
                            <Link to="/shop/tablets"><h1 className='text-xl font-bold mb-5 hover: cursor-pointer'>Tablets</h1></Link>
                            <ul>
                                <Link to="/shop/tablets/xiaomi"><li className='flex items-center text-gray-700'><BiChevronRight /> Xiaomi</li></Link>
                                <Link to="/shop/tablets/samsung"><li className='flex items-center text-gray-700'><BiChevronRight /> Samsung</li></Link>
                                <Link to="/shop/tablets/apple"><li className='flex items-center text-gray-700'><BiChevronRight /> Apple</li></Link>
                            </ul>
                        </div>
                        <img className='w-28' src={shopBannerTablets}></img>
                    </div>
                    <div className="laptops flex items-start justify-between p-5">
                        <div>
                            <Link to="/shop/laptops"><h1 className='text-xl font-bold mb-5 hover: cursor-pointer'>Laptops</h1></Link>
                            <ul>
                                <Link to="/shop/laptops/mac-book"><li className='flex items-center text-gray-700'><BiChevronRight /> MacBook</li></Link>
                                <Link to="/shop/samsung-tablets"><li className='flex items-center text-gray-700'><BiChevronRight /> MSI</li></Link>
                                <Link to="/shop/samsung-tablets"><li className='flex items-center text-gray-700'><BiChevronRight /> HP</li></Link>
                                <Link to="/shop/apple-tablets"><li className='flex items-center text-gray-700'><BiChevronRight /> Acer</li></Link>
                                <Link to="/shop/apple-tablets"><li className='flex items-center text-gray-700'><BiChevronRight /> Lenovo</li></Link>
                            </ul>
                        </div>
                        <img className='w-28' src={shopBannerLaptops}></img>
                    </div>
                </div>
            </MainContainer>
        </header>
    )
}

export default ShopHeaderBanner