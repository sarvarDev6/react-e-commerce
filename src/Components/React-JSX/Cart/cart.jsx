import React from 'react'
import NavBar from '../Repetitive/navBar'
import MainContainer from '../Repetitive/mainContainer'
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo'
import Footer from '../Repetitive/footer'
import CartMain from './cartMain'

function Cart() {
    return (
        <>
            <NavBar />
            <MainContainer>
                <CartMain />
                <AboutCompanyInfo />
            </MainContainer>
            <Footer />
        </>
    )
}

export default Cart