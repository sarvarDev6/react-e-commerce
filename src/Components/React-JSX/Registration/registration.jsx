// React Libraries goes here
import React from 'react';
import { Link } from 'react-router-dom';


// Stylesheet for this file
import "../../Stylesheets/Registration/registration.scss";
import MainContainer from '../Repetitive/mainContainer';
import NavBar from '../Repetitive/navBar';


// React icons
import { MdOutlineChevronRight } from "react-icons/md";

function Registration() {
    return (
        <>
            <NavBar />
            <div className="banner w-full h-48 flex items-center justify-center bg-gray-100">
                <h1 className='text-4xl font-bold text-gray-700'>Registration</h1>
            </div>
            <MainContainer>
                <ul className='optionalLink flex items-center gap-1 mt-5'>
                    <li><Link to="/">Home</Link></li>
                    <MdOutlineChevronRight />
                    <li>Registration</li>
                </ul>
            </MainContainer>
        </>
    )
}

export default Registration