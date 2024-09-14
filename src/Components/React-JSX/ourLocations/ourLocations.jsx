import React from 'react'
import NavBar from '../Repetitive/navBar'
import OurLocationsMain from './ourLocationsMain'
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo'
import Footer from '../Repetitive/footer'
import MainContainer from '../Repetitive/mainContainer'

function OurLocations() {
    return (
        <>
            <NavBar />
            <OurLocationsMain />
            <MainContainer>
                <AboutCompanyInfo />
            </MainContainer>
            <Footer />
        </>
    )
}

export default OurLocations