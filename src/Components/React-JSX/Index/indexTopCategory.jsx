// React libraries goes here
import React from 'react'
import { Link } from 'react-router-dom';


// Called Local Image from Local-Images folder
import xiaomi from "../../Local-Images/xiaomi.jpg";
import samsung from "../../Local-Images/samsung.jpg";
import apple from "../../Local-Images/apple.jpg";
import honor from "../../Local-Images/honor.jpg";
import tecno from "../../Local-Images/tecno.jpg";
import infinix from "../../Local-Images/infinix.jpg";

function IndexTopCategory() {
    return (
        <div className="topCategories flex mb-20 mt-10">
            <div className="xiaomi w-full p-1">
                <Link to="/shop/phones/xiaomi"><img className='rounded-xl hover: cursor-pointer' src={xiaomi}></img></Link>
            </div>
            <div className="samsung w-full p-1">
                <Link to="/shop/phones/samsung"><img className='rounded-xl hover: cursor-pointer' src={samsung}></img></Link>
            </div>
            <div className="apple w-full p-1">
                <Link to="/shop/phones/apple"><img className='rounded-xl hover: cursor-pointer' src={apple}></img></Link>
            </div>
            <div className="honor w-full p-1">
                <Link to="/shop/phones/honor"><img className='rounded-xl hover: cursor-pointer' src={honor}></img></Link>
            </div>
            <div className="tecno w-full p-1">
                <Link to="/shop/phones/tecno"><img className='rounded-xl hover: cursor-pointer' src={tecno}></img></Link>
            </div>
            <div className="infinix w-full p-1">
                <Link to="/shop/phones/infinix"><img className='rounded-xl hover: cursor-pointer' src={infinix}></img></Link>
            </div>
        </div>
    )
}

export default IndexTopCategory