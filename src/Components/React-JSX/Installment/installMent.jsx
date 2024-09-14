import React from 'react'
import NavBar from '../Repetitive/navBar'
import InstallMentMain from './installMentMain'
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo'
import Footer from '../Repetitive/footer'
import MainContainer from '../Repetitive/mainContainer'

function InstallMent() {
    return (
        <>
            <NavBar />
            <MainContainer>
                <InstallMentMain />
                <AboutCompanyInfo />
            </MainContainer>
            <Footer />
        </>
    )
}

export default InstallMent