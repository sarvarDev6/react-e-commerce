import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../Repetitive/navBar';
import MainContainer from '../Repetitive/mainContainer';

function ToDetail() {

    const location = useLocation();
    const { item } = location.state || {};


    return (
        <>
            <NavBar />
            <MainContainer>
                <div className="productSection">
                    <img className='w-2/12' src={item.img_1}></img>
                </div>
            </MainContainer>
        </>
    )
}

export default ToDetail