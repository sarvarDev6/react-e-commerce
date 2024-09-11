import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//Stylesheet for this file
import "../../Stylesheets/indexProducts.scss";

// Localy called images from Local-Images folder
import warrantyForTenYears from "../../Local-Images/warranty_10year_uz.png";


function IndexProducts() {

    const [productData, setProductData] = useState([]);
    const navigate = useNavigate();



    // Main Product Data's API URL
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product')
            .then(res => setProductData(res.data))
    }, []);

    console.log(productData);


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
        <div className="products">
            <div className="xiaomi">
                <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Xiaomi</h1>
                <div className="xiaomiProductsContainer flex flex-wrap">
                    {
                        xiaomiProducts.map(item =>
                        (
                            <div key={item.id} className='product text-center'>
                                <div className='flex'>
                                    <img className='productImg' src={item.img_1}></img>
                                    <img className='productWarranty w-14' src={warrantyForTenYears}></img>
                                </div>
                                <span className='text-gray-500 font-bold'>{item.category}</span>
                                <h1 >{item.name}</h1>
                                <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={xiaomiProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={samsungProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={appleProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={honorProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={tecnoProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={infinixProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={laptopProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={pcEquipmentProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={watchProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
            </div>
            <div className="accessuar">
                <h1 className='text-center text-3xl font-semibold mt-5 mb-10'>Accessuars and Gadgets</h1>
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
                                <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
                <button className={accessuarProducts.length < 12 ? `hidden` : `loadMoreBtn`}><i className="fa-solid fa-angles-right loadMoreBtnIcon"></i> LOAD MORE</button>
            </div>
        </div>
    )
}

export default IndexProducts