import React from 'react'
import NavBar from '../Repetitive/navBar'
import ShopHeaderBanner from '../Repetitive/shopHeaderBanner'
import ShopInfinixMain from './shopInfinixMain'
import Footer from '../Repetitive/footer'

function ShopInfinix() {
    return (
        <>
            <NavBar />
            <ShopHeaderBanner />
            <ShopInfinixMain />
            <Footer />
        </>
    )
}

export default ShopInfinix