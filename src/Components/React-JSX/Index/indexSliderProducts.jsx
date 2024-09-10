// Called react libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Library and styles for products carusel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function IndexSliderProducts() {

    // useState data's goes here
    const [productData, setProductData] = useState([]);



    // Main Product Data's API URL
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product')
            .then(res => setProductData(res.data))
    }, []);


    // Resoinsive design for product carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="sliderProducts w-full mb-10 mt-10">
            <h1 className='mb-10 text-4xl font-semibold text-center'>Best Sellers</h1>
            <Carousel responsive={responsive} className='w-full' infinite={true} ssr={true} arrows={false} autoPlay={true}
                autoPlaySpeed={3000}>
                {
                    productData.map((item, index) => {
                        return (
                            <div key={index} className='product text-center hover: cursor-pointer'>
                                <img src={item.img_1}></img>
                                <span className='text-gray-500 font-bold'>{item.category}</span>
                                <h1 className='mb-5'>{item.name}</h1>
                                <h2 className='font-semibold'>{item.price.toLocaleString(item.price)} UZS</h2>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default IndexSliderProducts