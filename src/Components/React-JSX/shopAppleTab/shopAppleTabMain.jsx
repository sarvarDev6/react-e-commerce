// Called React libraries 
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import MainContainer from '../Repetitive/mainContainer';
import { useNavigate } from 'react-router-dom';


// Stylesheet for this file
import "../../Stylesheets/shopAppleTab/shopAppleTabMain.scss";


// Locally called images
import warrantyForTenYears from "../../Local-Images/warranty_10year_uz.png"


// React icons
import { CiSearch } from "react-icons/ci";
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo';

function ShopAppleTabMain() {

    const navigate = useNavigate();

    const handleProductClick = (item) => {
        navigate("/shop/product", { state: { item } });
    }

    const [productData, setProductData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/product")
            .then(res => setProductData(res.data))
    }, [])

    // productData filtering here (appleTab)
    let appleTabProducts = productData.filter((item) => item.brand_name == "Apple" && item.category == "tablet");

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
                        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                        <CiSearch />
                    </div>
                </div>
                <div className="appleTab">
                    {
                        appleTabProducts == "" ? (
                            <div>
                                <i className="fa-solid fa-database text-4xl mb-5"></i>
                                <h1 className='text-2xl font-semibold mb-6'>There are no products in the database yet :(</h1>
                                <p className='text-gray-600 text-xl mb-7'>You can buy the products in All Products section, check this out ;).</p>
                                <Link to="/shop/installment"><h2 className='flex items-center gap-2 ml-40 text-xl text-orange-500 hover: cursor-pointer'>All Products <i className="fa-solid fa-circle-chevron-right"></i></h2></Link>
                            </div>
                        ) : (
                            <div className="appleTabProductsContainer flex flex-wrap">
                                {
                                    appleTabProducts.filter((item) => {
                                        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                                    }).map(item => (
                                        <div key={item.id} className='product text-center'>
                                            <div className='flex'>
                                                <img onClick={() => handleProductClick(item)} className='productImg' src={item.img_1} alt='img'></img>
                                                <img className='productWarranty w-14' src={warrantyForTenYears} alt='img'></img>
                                            </div>
                                            <span className='text-gray-500 font-bold'>{item.category}</span>
                                            <h1 onClick={() => handleProductClick(item)}>{item.name}</h1>
                                            <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                                            <h5>{Math.floor(item.price / 12).toLocaleString(item.price / 12)} UZS /per month</h5>
                                            <button className='text-xs'><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                <AboutCompanyInfo />
            </MainContainer>
        </main>
    )
}

export default ShopAppleTabMain