// Called React libraries
import React from 'react'
import MainContainer from './mainContainer'
import { Link } from 'react-router-dom';

// Called React icons for locally use
import { GoChevronRight } from "react-icons/go";
import { BiChevronRight } from "react-icons/bi";


// Stylesheet for this file 
import "../../Stylesheets/shopHeaderBanner.scss";


// Locally called images
import shopBannerPhones from "../../Local-Images/shopBannerPhones.png";
import shopBannerTablets from "../../Local-Images/shopBannerTablets.png";

function ShopHeaderBanner() {
    return (
        <header>
            <MainContainer>
                <ul className='flex items-center mt-5 gap-1'>
                    <li className='hover: cursor-pointer'>Home</li><GoChevronRight />
                    <li className='hover: cursor-pointer'>All Categories</li><GoChevronRight />
                    <li className='hover: cursor-pointer'>Phone and Tablets</li><GoChevronRight />
                    <li className='hover: cursor-pointer'>Phones</li><GoChevronRight />
                    <Link to={window.location.pathname == '/shop/xiaomi' ? '/shop/xiaomi' : "/shop/samsung"}><li className='hover: cursor-pointer'>{window.location.pathname == '/shop/xiaomi' ? 'Xiaomi' : 'Samsung'}</li></Link>
                </ul>
                <h1 className='text-center mt-10 font-bold text-2xl mb-5'>Phones and tablets</h1>
                <div className="banner flex items-center justify-between">
                    <div className="phones flex items-start justify-between p-5">
                        <div>
                            <Link to="/shop/phones"><h1 className='text-xl font-bold mb-5 hover: cursor-pointer'>Phones</h1></Link>
                            <ul>
                                <Link to="/shop/xiaomi"><li className='flex items-center text-gray-700'><BiChevronRight /> Xiaomi</li></Link>
                                <Link to="/shop/samsung"><li className='flex items-center text-gray-700'><BiChevronRight /> Samsung</li></Link>
                                <Link to="/shop/apple"><li className='flex items-center text-gray-700'><BiChevronRight /> Apple</li></Link>
                                <Link to="/shop/honor"><li className='flex items-center text-gray-700'><BiChevronRight /> Honor</li></Link>
                                <Link to="/shop/tecno"><li className='flex items-center text-gray-700'><BiChevronRight /> Tecno</li></Link>
                                <Link to="/shop/infinix"><li className='flex items-center text-gray-700'><BiChevronRight /> Infinix</li></Link>
                            </ul>
                        </div>
                        <img className='w-28' src={shopBannerPhones}></img>
                    </div>
                    <div className="tablets flex items-start justify-between p-5">
                        <div>
                            <Link to="/shop/tablets"><h1 className='text-xl font-bold mb-5 hover: cursor-pointer'>Tablets</h1></Link>
                            <ul>
                                <Link to="/shop/xiaomi-tablets"><li className='flex items-center text-gray-700'><BiChevronRight /> Xiaomi</li></Link>
                                <Link to="/shop/samsung-tablets"><li className='flex items-center text-gray-700'><BiChevronRight /> Samsung</li></Link>
                                <Link to="/shop/apple-tablets"><li className='flex items-center text-gray-700'><BiChevronRight /> Apple</li></Link>
                            </ul>
                        </div>
                        <img className='w-28' src={shopBannerTablets}></img>
                    </div>
                    <div className="radioPhones p-5">
                        <h1 className='text-xl font-bold mb-5 hover: cursor-pointer'>Radio Phones</h1>
                    </div>
                </div>
            </MainContainer>
        </header>
    )
}

export default ShopHeaderBanner