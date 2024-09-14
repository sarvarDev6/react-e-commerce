import React from 'react'
import NavBar from '../Repetitive/navBar'
import CheckoutMain from './checkoutMain'
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo'
import MainContainer from '../Repetitive/mainContainer'
import Footer from '../Repetitive/footer'

function Checkout() {
    return (
        <>
            <NavBar />
            <MainContainer>
                <CheckoutMain />
                <AboutCompanyInfo />
            </MainContainer>
            <Footer />
        </>
    )
}

export default Checkout