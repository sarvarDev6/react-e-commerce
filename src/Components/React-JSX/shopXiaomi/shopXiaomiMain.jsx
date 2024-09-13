// Called React libraries 
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import MainContainer from '../Repetitive/mainContainer';


// Stylesheet for this file
import "../../Stylesheets/shopXiaomiMain.scss";


// Locally called images
import warrantyForTenYears from "../../Local-Images/warranty_10year_uz.png"


// React icons
import { CiSearch } from "react-icons/ci";
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo';

function ShopXiaomiMain() {

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

    // productData filtering here (xiaomi)
    let xiaomiProducts = productData.filter((item) => item.brand_name == "Xiaomi" && item.category == "phone");

    let priceHighToLow = xiaomiProducts.sort((a, b) => b.price - a.price)
    let priceLowToHigh = xiaomiProducts.sort((a, b) => a.price - b.price)
    let newest = xiaomiProducts.sort((a, b) => b.created_at - a.created_at)
    let oldest = xiaomiProducts.sort((a, b) => a.created_at - b.created_at)


    return (
        <main>
            <MainContainer>
                <div className="filter flex items-center justify-between mt-10 mb-10">
                    <div className="sort">
                        <select>
                            <option onChange={() => console.log("salom")} selected>Newest</option>
                            <option onChange={console.log(oldest)}>Oldest</option>
                            <option onChange={() => console.log("vxc")}>Price low to high</option>
                            <option onChange={console.log(priceHighToLow)}>Price high to low</option>
                        </select>
                    </div>
                    <div className="search flex items-center">
                        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                        <CiSearch />
                    </div>
                </div>
                <div className="xiaomi">
                    <div className="xiaomiProductsContainer flex flex-wrap">
                        {
                            xiaomiProducts.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                            }).map(item => (
                                <div key={item.id} className='product text-center'>
                                    <div className='flex'>
                                        <img onClick={() => handleProductClick(item)} className='productImg' src={item.img_1}></img>
                                        <img className='productWarranty w-14' src={warrantyForTenYears}></img>
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
                </div>
                <AboutCompanyInfo />
            </MainContainer>
        </main>
    )
}

export default ShopXiaomiMain