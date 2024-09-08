// Called React Libraries
import React, { useState } from 'react'
import "../../Stylesheets/indexMainSlider.scss";


// Library and styles for banner carusel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function IndexMainSlider({ sliderData }) {

    // Resoinsive design for product carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="carousel w-full">
            <Carousel responsive={responsive} infinite={true} swipeable={true} className='w-full' autoPlay={true}
                autoPlaySpeed={7000}>
                {
                    sliderData.map((item, index) => {
                        return (
                            <img key={index} src={item.img} className="w-full" ></img>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default IndexMainSlider