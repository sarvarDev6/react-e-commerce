// Called React Libraries goes here
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MainContainer from '../Repetitive/mainContainer';


// StyleSheet for this react file
import "../../Stylesheets/indexHeader.scss";


// Called Local Image from Local-Images folder
import openShopLogo from "../../Local-Images/open-shop-logo.png";
import IndexMainSlider from './indexMainSlider';
import NavBar from '../Repetitive/navBar';

function IndexHeader() {

    const [sliderData, setSliderData] = useState([]);


    // Header Slider Data's API URL
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/slider')
            .then(res => setSliderData(res.data));
    }, []);




    return (
        <header>
            <MainContainer>
                <IndexMainSlider sliderData={sliderData} />
            </MainContainer>
        </header>
    )
}

export default IndexHeader