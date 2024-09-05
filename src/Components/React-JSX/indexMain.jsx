// Called React Libraries goes here
import React, { useState, useEffect } from 'react'
import MainContainer from './mainContainer';
import axios from 'axios';


// Called Local Image from Local-Images folder
import warrantyForTenYears from "../Local-Images/warranty_10year_uz.png";
import xiaomi from "../Local-Images/xiaomi.jpg";
import samsung from "../Local-Images/samsung.jpg";
import apple from "../Local-Images/apple.jpg";
import honor from "../Local-Images/honor.jpg";
import tecno from "../Local-Images/tecno.jpg";
import infinix from "../Local-Images/infinix.jpg";

function IndexMain() {

    const [productData, setProductData] = useState([]);



    // Main Product Data's API URL
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product')
            .then(res => setProductData(res.data))
    }, []);

    // All Brand Products filtering here 
    let xiaomiProducts = productData.filter((item) => item.brand_name == "Xiaomi" && item.category == "phone");
    let samsungProducts = productData.filter((item) => item.brand_name == "Samsung" && item.category == "phone");
    let appleProducts = productData.filter((item) => item.brand_name == "Apple" && item.category == "phone");
    let honorProducts = productData.filter((item) => item.brand_name == "Honor" && item.category == "phone");
    let infinixProducts = productData.filter((item) => item.brand_name == "Infinix" && item.category == "phone");
    let tecnoProducts = productData.filter((item) => item.brand_name == "Tecno" && item.category == "phone");
    let laptopProducts = productData.filter((item) => item.brand_name == "Apple" && item.category == "laptop");
    let pcEquipmentProducts = productData.filter((item) => item.category == "pc-equipment");
    let watchProducts = productData.filter((item) => item.category == "watch");
    let accessuarProducts = productData.filter((item) => item.category == "accessuars");

    return (
        <main className='mt-10 mb-10'>
            <MainContainer>
                <div className="topCategories flex mb-20">
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
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Xiaomi</h1>
                        <div className="xiaomiProductsContainer flex flex-wrap">
                            {
                                xiaomiProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                            <img className='productWarranty w-14' src={warrantyForTenYears}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="samsung">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Samsung</h1>
                        <div className="samsungProductsContainer flex flex-wrap">
                            {
                                samsungProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                            <img className='productWarranty w-14' src={warrantyForTenYears}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="apple">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Apple</h1>
                        <div className="appleProductsContainer flex flex-wrap">
                            {
                                appleProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                            <img className='productWarranty w-14' src={warrantyForTenYears}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="honor">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Honor</h1>
                        <div className="honorProductsContainer flex flex-wrap">
                            {
                                honorProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                            <img className='productWarranty w-14' src={warrantyForTenYears}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="tecno">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Tecno</h1>
                        <div className="tecnoProductsContainer flex flex-wrap">
                            {
                                tecnoProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                            <img className='productWarranty w-14' src={warrantyForTenYears}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="infinix">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Infinix</h1>
                        <div className="infinixProductsContainer flex flex-wrap">
                            {
                                infinixProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                            <img className='productWarranty w-14' src={warrantyForTenYears}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="laptop">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Laptops</h1>
                        <div className="laptopProductsContainer flex flex-wrap">
                            {
                                laptopProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                            <img className='productWarranty w-14' src={warrantyForTenYears}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="pcEquipment">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>PC Equipment</h1>
                        <div className="pcEquipmentProductsContainer flex flex-wrap">
                            {
                                pcEquipmentProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="watch">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Watches</h1>
                        <div className="watchProductsContainer flex flex-wrap">
                            {
                                watchProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                    <div className="accessuar">
                        <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>accessuars</h1>
                        <div className="accessuarProductsContainer flex flex-wrap">
                            {
                                accessuarProducts.map(item => (
                                    <div key={item.id} className='product text-center'>
                                        <div className='flex'>
                                            <img className='productImg' src={item.img_1}></img>
                                        </div>
                                        <span className='text-gray-500 font-bold'>{item.category}</span>
                                        <h1 >{item.name}</h1>
                                        <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                        <button className='text-xs'><i class="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='loadMoreBtn'><i class="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
                    </div>
                </div>
                <div className="infoSection">
                    <hr className='mb-5' />
                    <h1 className='text-2xl font-semibold mb-14'>OPENSHOP.UZ is the best online store for buying electronics in wholesale and retail</h1>
                    <div className="aboutCompany text-justify mb-5">
                        <h2 className='text-xl font-semibold text-gray-600 mb-2'>About company</h2>
                        <p className='mb-6 text-gray-600 font-normal'>The main advantage of our online store is that our customers can purchase goods in wholesale or retail. In our online store, delivery is carried out throughout the Republic of Uzbekistan. Our online store has been operating for more than 4 years and managed to please customers with low prices and quality goods. We study the market and always try to offer the best price for smartphones, small household appliances, large household appliances and of course smartphone accessories.</p>
                        <p className='mb-6 text-gray-600 font-normal'>Smartphones - Smartphones have become an integral part of our lives, every year manufacturers try to surprise us with new models of smartphones. But our online store can also surprise you with a large number of new products from world brands! Only in our online store you can buy Xiaomi Apple Samsung Huawei and Vivo smartphones with a 3-year warranty</p>
                        <p className='mb-6 text-gray-600 font-normal'>TVs - In this category you can find unique TVs with good performance for your home! Enjoy watching movies and series with your family with TVs from Artel, Shivaki, Samsung, Sony and LG</p>
                        <p className='mb-6 text-gray-600 font-normal'>Air conditioners - This section allows you to make useful purchases for your home, office. To make it convenient for our customers, a description is attached to each product so that you can make the right choice.</p>
                        <p className='mb-6 text-gray-600 font-normal'>Also, our online store can provide goods for our beloved housewives. In our online store you can buy a washing machine, refrigerator, gas stove, electric stove or microwave for your home at low prices with fast delivery.</p>
                        <p className='mb-6 text-gray-600 font-normal'>Our online store delivers to cities like Samarkand, Jizzakh, Andijan, Bukhara, Namangan, Khorezm, Ferghana, Navoi, Kashkadarya, Surkhandarya, Syrdarya and also throughout the Tashkent region, and delivery is also carried out to the Republic of Karakalpakstan. And the most surprising thing is the incomplete supply map. You can clarify the delivery zones by calling our call center</p>
                        <p className='mb-6 text-gray-600 font-normal'>LLC "OPEN SHOP" This is a company that has been on the market of Uzbekistan since 2018. Our online store works with famous and reliable brands of different price segments. Each of our clients will find something that suits their budget. We do our best for the convenience of online shopping in our online store. Make profitable purchases in our online store! Our team will be happy to advise.</p>
                    </div>
                    <div className="phoneAndTablets mb-5">
                        <h1 className='text-xl font-bold text-gray-700 mb-7'>Phones and tablets</h1>
                        <div className="flex gap-2">
                            <ul className='flex gap-1'>
                                <li className='hover: cursor-pointer'><b>Phones:</b></li>
                                <li className='hover: cursor-pointer'><span>Xiaomi</span>,</li>
                                <li className='hover: cursor-pointer'><span>Samsung</span>,</li>
                                <li className='hover: cursor-pointer'><span>Apple</span>,</li>
                                <li className='hover: cursor-pointer'><span>Honor</span>,</li>
                                <li className='hover: cursor-pointer'><span>Tecno</span>,</li>
                                <li className='hover: cursor-pointer'><span>Infinix</span></li>
                            </ul>
                            <ul className='flex gap-1'>
                                <li className='hover: cursor-pointer'><b>Tablets:</b></li>
                                <li className='hover: cursor-pointer'><span>Xiaomi</span>,</li>
                                <li className='hover: cursor-pointer'><span>Samsung</span>,</li>
                                <li className='hover: cursor-pointer'><span>Apple</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="computerEquipment">
                        <h1 className='text-xl font-bold text-gray-700 mb-7'>Computer Equipments</h1>
                        <div className="flex gap-2">
                            <ul className='flex gap-1'>
                                <li className='hover: cursor-pointer'><b>Laptop:</b></li>
                                <li className='hover: cursor-pointer'><span>MacBook</span>,</li>
                                <li className='hover: cursor-pointer'><span>AsusRog</span>,</li>
                                <li className='hover: cursor-pointer'><span>Hp</span>,</li>
                                <li className='hover: cursor-pointer'><span>Acer</span>,</li>
                                <li className='hover: cursor-pointer'><span>MSI</span>,</li>
                                <li className='hover: cursor-pointer'><span>Lenovo</span></li>
                            </ul>
                            <ul className='flex gap-1'>
                                <li className='hover: cursor-pointer'><b>PC components:</b></li>
                                <li className='hover: cursor-pointer'><span>Motherboard</span>,</li>
                                <li className='hover: cursor-pointer'><span>RAM</span>,</li>
                                <li className='hover: cursor-pointer'><span>Storage (SDD or HDD)</span>,</li>
                                <li className='hover: cursor-pointer'><span>Power unit</span>,</li>
                                <li className='hover: cursor-pointer'><span>CPU cooler</span>,</li>
                                <li className='hover: cursor-pointer'><span>Processor</span>,</li>
                                <li className='hover: cursor-pointer'><span>Video card</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </main>
    )
}

export default IndexMain