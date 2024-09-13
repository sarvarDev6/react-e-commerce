// React Libraries goes here
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Stylesheet for this file
import "../../Stylesheets/Registration/registration.scss";
import MainContainer from '../Repetitive/mainContainer';
import NavBar from '../Repetitive/navBar';


// React icons
import { MdOutlineChevronRight } from "react-icons/md";
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo';
import Footer from '../Repetitive/footer';

function Registration() {

    const [post, setPost] = useState({
        fullname: "",
        phone: 0,
        password: "",
    })

    const getFormInpValues = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const [userData, setUserData] = useState([]);

    // console.log(userData);



    // axios post data goes here
    const postMemberForm = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/api/register", JSON.stringify(post),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => setUserData(res.data[0].fullname))
            .catch(err => console.log(err))

        event.target.reset();

        window.location.pathname = '/'
    }

    return (
        <>
            <NavBar userData={userData} />
            <div className="banner w-full h-48 flex items-center justify-center bg-gray-100">
                <h1 className='text-4xl font-bold text-gray-700'>Registration</h1>
            </div>
            <MainContainer>
                <ul className='optionalLink flex items-center gap-1 mt-5 mb-5'>
                    <li><Link to="/">Home</Link></li>
                    <MdOutlineChevronRight />
                    <li>Registration</li>
                </ul>
                <hr />
            </MainContainer>
            <div className="registrationDiv flex w-full h-auto items-center justify-center mt-5 mb-10">
                <div className="formBox">
                    <div>
                        <h1 className='text-center mt-5 mb-5 text-orange-500 font-semibold'>PHONE NUMBER</h1>
                        <form onSubmit={postMemberForm}>
                            <label htmlFor="userName">Name *</label> <br />
                            <input type="text" minLength='3' maxLength='25' id='userName' name='fullname' onChange={getFormInpValues} required /> <br />
                            <label htmlFor="userPhoneNumber">Your Phone Number *</label>
                            <input type="number" minLength='12' maxLength='12' placeholder='Phone' name='phone' id='userPhoneNumber' onChange={getFormInpValues} required /> <br />
                            <label htmlFor="userPassword">Password *</label> <br />
                            <input type="password" minLength='6' maxLength='30' placeholder='Password' name='password' id='userPassword' onChange={getFormInpValues} required />
                            <p>
                                Your personal information will be used in the order processing process, as well as for coupon invitations or for statistics and order history. You can find out more by following the link: Privacy Policy
                            </p>
                            <button id='submit' type='submit'>CREATE ACCOUNT</button>
                            <hr />
                            <h2 className='mb-5 mt-5'>Already have an account? <Link to="/user/login"><button id='loginBtn'>Login to your account.</button></Link></h2>

                        </form>
                    </div>
                </div>
            </div>
            <MainContainer>
                <AboutCompanyInfo />
            </MainContainer>
            <Footer />
        </>
    )
}

export default Registration