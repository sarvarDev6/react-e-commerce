import React from 'react'
import NavBar from '../Repetitive/navBar'
import AllCategoryHeader from './allCategoryHeader'
import AllCategoryMain from './allCategoryMain'
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo'
import Footer from '../Repetitive/footer'
import MainContainer from '../Repetitive/mainContainer'

function AllCategory() {
    return (
        <>
            <NavBar />
            <MainContainer>
                <AllCategoryHeader />
                <AllCategoryMain />
                <AboutCompanyInfo />
            </MainContainer>
            <Footer />
        </>
    )
}

export default AllCategory