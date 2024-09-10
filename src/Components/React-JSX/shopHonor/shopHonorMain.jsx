// Called React libraries 
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainContainer from '../Repetitive/mainContainer';


// Stylesheet for this file
import "../../Stylesheets/shopHonor/shopHonorMain.scss";


// Locally called images
import warrantyForTenYears from "../../Local-Images/warranty_10year_uz.png"


// React icons
import { CiSearch } from "react-icons/ci";
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo';

function ShopHonorMain() {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/product")
            .then(res => setProductData(res.data))
    }, [])

    // productData filtering here (samsung)
    let honorProducts = productData.filter((item) => item.brand_name == "Honor" && item.category == "phone");

    return (
        <main>
            <MainContainer>
                <div className="filter flex items-center justify-between mt-10 mb-10">
                    <div className="sort">
                        <select>
                            <option selected>Newest</option>
                            <option selected>Oldest</option>
                            <option selected>Price low to high</option>
                            <option selected>Price high to low</option>
                        </select>
                    </div>
                    <div className="search flex items-center">
                        <input type="text" placeholder='Search' />
                        <CiSearch />
                    </div>
                </div>
                <div className="honor">
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
                                    <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <AboutCompanyInfo />
            </MainContainer>
        </main>
    )
}

export default ShopHonorMain