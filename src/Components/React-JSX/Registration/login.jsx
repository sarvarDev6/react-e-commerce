// React Libraries goes here
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Stylesheet for this file
import "../../Stylesheets/Registration/registration.scss";


// Called Components
import MainContainer from '../Repetitive/mainContainer';
import NavBar from '../Repetitive/navBar';
import AboutCompanyInfo from '../Repetitive/aboutCompanyInfo';
import Footer from '../Repetitive/footer';


// React icons
import { MdOutlineChevronRight } from "react-icons/md";

function Login() {

    const [post, setPost] = useState({
        phone: 0,
        password: "",
    })

    const getFormInpValues = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    // axios post data goes here
    const postMemberForm = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/api/login", JSON.stringify(post),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => console.log(res))
            .catch(err => console.log(err))

        event.target.reset();
    }

    return (
        <>
            <NavBar />
            <div className="banner w-full h-48 flex items-center justify-center bg-gray-100">
                <h1 className='text-4xl font-bold text-gray-700'>Login to your account.</h1>
            </div>
            <MainContainer>
                <ul className='optionalLink flex items-center gap-1 mt-5 mb-5'>
                    <li><Link to="/">Home</Link></li>
                    <MdOutlineChevronRight />
                    <li>Login</li>
                </ul>
                <hr />
            </MainContainer>
            <div className="registrationDiv flex w-full h-auto items-center justify-center mt-5 mb-10">
                <div className="formBox">
                    <div>
                        <h1 className='text-center mt-5 mb-5 text-orange-500 font-semibold'>PHONE NUMBER</h1>
                        <form onSubmit={postMemberForm}>
                            <label htmlFor="userPhone">Your Phone Number *</label> <br />
                            <input type="text" minLength='3' maxLength='25' id='userPhone' name='phone' onChange={getFormInpValues} required/> <br />
                            <label htmlFor="userPassword">Password *</label> <br />
                            <input type="password" minLength='6' maxLength='30' placeholder='Password' name='password' id='userPassword' onChange={getFormInpValues} required/>
                            <p>
                                Your personal information will be used in the order processing process, as well as for coupon invitations or for statistics and order history. You can find out more by following the link: Privacy Policy
                            </p>
                            <button id='submit' type='submit'>LOGIN</button>
                            <hr />
                            <h2 className='mb-5 mt-5'>Need an account?  <Link to="/user/registration"><button id='loginBtn'>Register now</button></Link></h2>

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

export default Login