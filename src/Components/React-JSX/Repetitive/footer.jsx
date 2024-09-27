// Called React Libraries goes here
import React from 'react'
import MainContainer from './mainContainer';
import { Link } from 'react-router-dom';


// Stylesheet for this file
import "../../Stylesheets/footer.scss"


// Called Local Image from Local-Images folder
import openShopLogo from "../../Local-Images/open-shop-logo.png";
import visaLogo from "../../Local-Images/ft_visa.png";
import masterCardLogo from "../../Local-Images/ft_mastercard.png";
import unionPayLogo from "../../Local-Images/ft_unionpay.png";
import uzcardLogo from "../../Local-Images/ft_uzcard.png";
import humoLogo from "../../Local-Images/ft_humo.png";

function Footer() {
    return (
        <footer className='bg-gray-100'>
            <MainContainer>
                <div className="footerContainer flex justify-between mb-14">
                    <div className="mainFooterTable text-center">
                        <div>
                            <button><img src={openShopLogo} className='w-72' alt="OPENSHOP.ENG" /></button>
                            <h3 className='font-semibold mt-3 mb-6'>Working hours: every day from 9:00 to 22:00</h3>
                            <p className='text-gray-500 leading-7 mb-5'>OPENSHOP.UZ online store with a large selection of electronics in wholesale and retail</p>
                            <h2 className='font-bold text-gray-600 mb-2 hover: cursor-pointer'>+998 (71) 203 66 60</h2>
                            <h2 className='font-bold text-gray-600 mb-2 hover: cursor-pointer'>+998 (99) 200 66 60</h2>
                            <a href='mailto:info@openshop.uz' target='_blank' rel="noreferrer"><h2 className='font-bold text-gray-600 mb-5 hover: cursor-pointer'>info@openshop.uz</h2></a>
                            <div className="socialChannels flex justify-center gap-2">
                                <a href="https://www.facebook.com/openshop.uz" target='_blank' rel="noreferrer">
                                    <div className="facebook bg-blue-700 pt-1 pb-1 pl-2 pr-2 rounded-full text-white hover: cursor-pointer">
                                        <i className="fa-brands fa-facebook"></i>
                                    </div>
                                </a>
                                <a href="https://t.me/openshop_uz" target='_blank' rel="noreferrer">
                                    <div className="telegram bg-teal-400 pt-1 pb-1 pl-2 pr-2 rounded-full text-white hover: cursor-pointer">
                                        <i className="fa-brands fa-telegram"></i>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/openshop_uz/">
                                    <div className="instagram bg-red-600 pt-1 pb-1 pl-2 pr-2 rounded-full text-white hover: cursor-pointer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                </a>
                                <a href="https://www.youtube.com/channel/UCk85inH6V1-6Hq3E8cSR3tQ">
                                    <div className="youtube bg-slate-700 pt-1 pb-1 pl-2 pr-2 rounded-full text-white hover: cursor-pointer">
                                        <i className="fa-brands fa-youtube"></i>
                                    </div>
                                </a>
                                <a href="https://t.me/openshopuz_bot">
                                    <div className="telegramBot bg-teal-400 pt-1 pb-1 pl-2 pr-2 rounded-full text-white hover: cursor-pointe">
                                        <i className="fa-solid fa-robot"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="usefulLinks">
                        <h1 className='font-semibold mb-5'>USEFUL LINKS</h1>
                        <ul className='leading-9'>
                            <Link to="/our/locations"><li className='text-gray-700 hover: cursor-pointer'>Our addresses</li></Link>
                            <li className='text-gray-700 hover: cursor-pointer'>Site offer</li>
                            <li className='text-gray-700 hover: cursor-pointer'>Service centers</li>
                            <li className='text-gray-700 hover: cursor-pointer'>Terms of the affiliate system</li>
                            <li className='text-gray-700 hover: cursor-pointer'>Installment terms</li>
                            <li className='text-gray-700 hover: cursor-pointer'>Installment instructions</li>
                        </ul>
                    </div>
                    <div className="myAccount">
                        <h1 className='font-semibold mb-5'>MY ACCOUNT</h1>
                        <ul className='leading-9'>
                            <li className='text-gray-700 hover: cursor-pointer'>My Account</li>
                            <li className='text-gray-700 hover: cursor-pointer'>Order History</li>
                            <li className='text-gray-700 hover: cursor-pointer'>Support Policy</li>
                            <li className='text-gray-700 hover: cursor-pointer'>Partner System</li>
                            <Link to="/shop/categories"><li className='text-gray-700 hover: cursor-pointer'>Categories</li></Link>
                            <li className='text-gray-700 hover: cursor-pointer'>Brands</li>
                            <li className='text-gray-700 hover: cursor-pointer'>Blog</li>
                        </ul>
                    </div>
                    <div className="map">
                        <iframe title='open-shop-address' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2995.4909714430437!2d69.35799207654125!3d41.34168099882829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzMwLjAiTiA2OcKwMjEnMzguMCJF!5e0!3m2!1sen!2s!4v1725558366671!5m2!1sen!2s" width="380" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <h3 className='mt-5 w-96 leading-5 font-light'>Address: Republic of Uzbekistan, Tashkent city, Mirzo-Ulugbek district, Buyuk Ipak Yuli street, 302</h3>
                    </div>
                </div>
                <hr />
                <div className="bedrock mt-10 flex items-center justify-between">
                    <div className="allRightReserved">
                        <h1 className='text-gray-500'>© 2018 - 2024 <b className='text-gray-700'>LLC "OPEN SHOP"</b> TIN 307095613. All rights reserved</h1>
                    </div>
                    <div className="privacyPolicy flex items-center gap-3">
                        <h1 className='hover: cursor-pointer'>Privacy Policy</h1>
                        <img src={visaLogo} className='rounded-3xl w-14' alt="VISA" />
                        <img src={masterCardLogo} className='rounded-3xl w-14' alt="MASTER CARD" />
                        <img src={unionPayLogo} className='rounded-3xl w-14' alt="UNION PAY" />
                        <img src={uzcardLogo} className='rounded-3xl w-14' alt="UZCARD" />
                        <img src={humoLogo} className='rounded-3xl w-14' alt="HUMO" />
                    </div>
                </div>
            </MainContainer>
        </footer>
    )
}

export default Footer