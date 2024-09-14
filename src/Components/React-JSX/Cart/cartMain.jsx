import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";

function CartMain() {




    const [cartData, setCartData] = useState([]);

    // Main Product Data's API URL
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cart')
            .then(res => setCartData(res.data))
    }, []);

    let navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/user/cart/checkout")
    }

    return (
        <main>
            {cartData == "" ? <div className="emptyDiv mt-10 mb-10 flex justify-center text-center">
                <div>
                    <i className="fa-solid fa-cart-shopping text-4xl mb-5"></i>
                    <h1 className='text-2xl font-semibold mb-6'>Your cart is empty</h1>
                    <p className='text-gray-600 text-xl mb-7'>You can add the products to your cart via the website.</p>

                    <Link to="/shop/installment"><h2 className='flex items-center gap-2 ml-40 text-xl text-orange-500 hover: cursor-pointer'>All Products <i class="fa-solid fa-circle-chevron-right"></i></h2></Link>
                </div>
            </div> :
                <div className='cartDiv mt-10'>
                    <table className='w-full mt-10'>
                        <tr>
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        {
                            cartData.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td><img className='w-40' src={item.img_1} alt="img" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price} UZS</td>
                                        <td><button className='p-3 rounded-lg text-white bg-red-600'>Delete</button></td>
                                    </tr>

                                )
                            })
                        }
                    </table>
                    <div className="action flex items-center justify-between mt-10 mb-10">
                        <Link to="/">
                            <button className='flex items-center gap-1 p-3 bg-gray-700 text-white rounded-lg'><FaArrowLeftLong /> RETURN TO SHOP</button>
                        </Link>
                        <Link to="/user/cart/checkout"><button onClick={() => handleCheckout()} className='flex items-center gap-1 p-3 bg-orange-500 rounded-lg text-white'><FaRegCreditCard /> ORDER NOW</button></Link>
                    </div>
                </div>
            }
        </main>
    )
}

export default CartMain