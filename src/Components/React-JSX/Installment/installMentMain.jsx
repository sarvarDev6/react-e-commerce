import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Locally called images
import warrantyForTenYears from "../../Local-Images/warranty_10year_uz.png"


// React icons
import { CiSearch } from "react-icons/ci";

function InstallMentMain() {

    const [productData, setProductData] = useState([]);
    const [search, setSearch] = useState("");

    const handleAddToCart = (item) => {
        const cartItem = {
            img_1: item.img_1,
            img_2: item.img_2,
            img_3: item.img_3,
            brand_name: item.brand_name,
            brand_logo: item.brand_logo,
            name: item.name,
            price: item.price,
            category: item.category,
            discount: item.discount
        };

        console.log(item)

        axios
            .post("http://127.0.0.1:8000/api/cart/add", JSON.stringify(cartItem), {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log("Product added to cart successfully", res.data);
            })
            .catch((error) => {
                console.error("Error adding product to cart", error);
            });
    }

    // Main Product Data's API URL
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product')
            .then(res => setProductData(res.data))
    }, []);

    const navigate = useNavigate();

    const handleProductClick = (item) => {
        navigate("/shop/product", { state: { item } });
    }

    return (
        <main>
            <div className="filter flex items-center justify-between mt-10 mb-10">
                <div className="sort">
                    <select>
                        <option selected>Newest</option>
                        <option>Oldest</option>
                        <option>Price low to high</option>
                        <option>Price high to low</option>
                    </select>
                </div>
                <div className="search flex items-center">
                    <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                    <CiSearch />
                </div>
            </div>
            <div className="xiaomi">
                <h1 className='mb-5 font-semibold text-2xl bg-yellow-300 p-1'>Installment Products for 12 month</h1>
                <div className="xiaomiProductsContainer flex flex-wrap">
                    {
                        productData.filter((item) => {
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
                                <button className='text-xs' onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToCart(item);
                                }}><i className="fa-solid fa-cart-arrow-down"></i> TO CART</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default InstallMentMain