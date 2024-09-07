// Called React Libraries goes here
import React from 'react'
import MainContainer from './mainContainer';


// Called main components from components folder
import AboutCompanyInfo from './aboutCompanyInfo';
import IndexProducts from './indexProducts';
import IndexTopCategory from './indexTopCategory';

function IndexMain() {
    return (
        <main className='mb-10'>
            <MainContainer>
                <IndexTopCategory />
                <IndexProducts />
                <AboutCompanyInfo />
            </MainContainer>
        </main>
    )
}

export default IndexMain