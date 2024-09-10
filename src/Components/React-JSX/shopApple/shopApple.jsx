import React from 'react'
import NavBar from '../Repetitive/navBar'
import ShopHeaderBanner from '../Repetitive/shopHeaderBanner'
import ShopAppleMain from './shopAppleMain'
import Footer from '../Repetitive/footer'

function ShopApple() {
    return (
        <>
            <NavBar />
            <ShopHeaderBanner />
            <ShopAppleMain />
            <Footer />
        </>
    )
}

export default ShopApple