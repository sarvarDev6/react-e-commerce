// Called React Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainContainer from './mainContainer';
import { Carousel } from "flowbite-react";

// StyleSheet for this react file
import "../Stylesheets/index.scss";

// Imported Local Images
import openShopLogo from "../Local-Images/open-shop-logo.png";
import xiaomi from "../Local-Images/xiaomi.jpg";
import samsung from "../Local-Images/samsung.jpg";
import apple from "../Local-Images/apple.jpg";
import honor from "../Local-Images/honor.jpg";
import tecno from "../Local-Images/tecno.jpg";
import infinix from "../Local-Images/infinix.jpg";

function Index() {

  const [sliderData, setSliderData] = useState([]);
  const [productData, setProductData] = useState([]);

  // Header Slider Data's API URL
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/slider')
      .then(res => setSliderData(res.data));
  }, []);

  // Main Product Data's API URL
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/product')
      .then(res => setProductData(res.data))
  }, []);

  // All Brand Products filtering here 
  let xiaomiProducts = productData.filter((item) => item.brand_name == "Xiaomi" && item.category == "phone");





  return (
    <>
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
                  <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                  <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                  <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                  <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                  <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                </Carousel>
              </div>
            </div>
          </div>
        </MainContainer>
      </header>
      <main className='mt-10 mb-10'>
        <MainContainer>
          <div className="topCategories flex">
            <div className="xiaomi w-full p-1">
              <img className='rounded-xl hover: cursor-pointer' src={xiaomi}></img>
            </div>
            <div className="samsung w-full p-1">
              <img className='rounded-xl hover: cursor-pointer' src={samsung}></img>
            </div>
            <div className="apple w-full p-1">
              <img className='rounded-xl hover: cursor-pointer' src={apple}></img>
            </div>
            <div className="honor w-full p-1">
              <img className='rounded-xl hover: cursor-pointer' src={honor}></img>
            </div>
            <div className="tecno w-full p-1">
              <img className='rounded-xl hover: cursor-pointer' src={tecno}></img>
            </div>
            <div className="infinix w-full p-1">
              <img className='rounded-xl hover: cursor-pointer' src={infinix}></img>
            </div>
          </div>
          <div className="products">
            <div className="xiaomi">
              <h1 className='text-center text-4xl font-semibold mt-5 mb-10'>Xiaomi</h1>
              <div className="xiaomiProductsContainer flex flex-wrap">
                {
                  xiaomiProducts.map(item => (
                    <div key={item.id} className='product text-center'>
                      <img src={item.img_1}></img>
                      <span className='text-gray-500 font-bold'>{item.category}</span>
                      <h1 >{item.name}</h1>
                      <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                      <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </MainContainer>
      </main>
    </>
  )
}

export default Index