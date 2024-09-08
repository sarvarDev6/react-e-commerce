// Called React Libraries goes here
import React from 'react'
import MainContainer from '../Repetitive/mainContainer';


// Called main components from components folder
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo';
import IndexProducts from './indexProducts';
import IndexTopCategory from './indexTopCategory';
import IndexSliderProducts from './indexSliderProducts';

function IndexMain() {
    return (
        <main className='mb-10'>
            <MainContainer>
                <IndexTopCategory />
                <IndexSliderProducts />
                <IndexProducts />
                <AboutCompanyInfo />
            </MainContainer>
        </main>
    )
}

export default IndexMain