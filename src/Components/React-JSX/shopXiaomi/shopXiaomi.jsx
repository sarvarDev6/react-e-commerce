import React from 'react'
import NavBar from '../Repetitive/navBar'
import ShopXiaomiMain from './shopXiaomiMain'
import ShopHeaderBanner from '../Repetitive/shopHeaderBanner'
import Footer from '../Repetitive/footer'

function ShopXiaomi() {
    return (
        <>
            <NavBar />
            <ShopHeaderBanner />
            <ShopXiaomiMain />
            <Footer />
        </>
    )
}

export default ShopXiaomi