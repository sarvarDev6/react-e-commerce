// Called React Libraries
import React, { useState } from 'react'
import "../Stylesheets/indexMainSlider.scss";


// Called React Icons (arrows)
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function IndexMainSlider({ sliderData }) {

    const [slide, setSlide] = useState(0)


    // Arrow Functons for carousel buttons
    const prevSlide = () => {
        setSlide(slide === 0 ? sliderData.length - 1 : slide - 1)
    }

    const nextSlide = () => {
        setSlide(slide === sliderData.length - 1 ? 0 : slide + 1)
    }
    setTimeout(() => {
        nextSlide()
    }, 10000)

    return (
        <div className="carousel">
            <div onClick={prevSlide}>
                <IoIosArrowRoundBack className='arrow arrow-left' />
            </div>

            {
                sliderData.map((item, index) => {
                    return (
                        <img key={item.id} className={slide === index ? "slide" : "slide-hidden"} src={item.img}></img>
                    )
                })
            }

            <div onClick={nextSlide}>
                <IoIosArrowRoundForward className='arrow arrow-right' />
            </div>
        </div>
    )
}

export default IndexMainSlider