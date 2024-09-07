import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
function IndexMainSlider({ sliderData }) {

    return (
        <div className="carousel">
            {
                sliderData.map((item) => {
                    return (
                        <img className='slide w-2/3 h-auto mt-5 rounded-lg absolute' src={item.img}></img>
                    )
                })
            }
        </div>
    )
}

export default IndexMainSlider