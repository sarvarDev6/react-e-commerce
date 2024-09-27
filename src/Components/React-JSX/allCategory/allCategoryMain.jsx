import React from 'react'
import { Link } from 'react-router-dom'

import "../../Stylesheets/allCategory/allCategoryMain.scss";

function AllCategoryMain() {
    return (
        <main>
            <div className="phoneAndTab mb-10">
                <h1 className='text-center mb-5 text-3xl font-semibold'>Phones and Tablets</h1>
                <Link to="/shop/phones">
                    <h2 className='mb-3 text-xl font-semibold' style={{
                        color: "#ff6117"
                    }}>Phones</h2>
                </Link>
                <div className="phonesCate flex gap-80 mb-5">
                    <ul>
                        <Link to="/shop/phones/xiaomi"><li>Xiaomi</li></Link>
                        <li>Huawei</li>
                        <li>Novey Mobile</li>
                        <Link to="/shop/phones/tecno"><li>Tecno</li></Link>
                        <li>ZTE</li>
                    </ul>
                    <ul>
                        <Link to="/shop/phones/samsung"><li>Samsung</li></Link>
                        <li>Nokia</li>
                        <li>Blackview</li>
                        <li>Oppo</li>
                        <li>Oukitel</li>
                    </ul>
                    <ul>
                        <Link to="/shop/phones/apple"><li>Apple</li></Link>
                        <li>Realme</li>
                        <Link to="/shop/phones/honor"><li>Honor</li></Link>
                        <Link to="/shop/phones/infinix"><li>Infinix</li></Link>
                        <li>Doogee</li>
                    </ul>
                </div>
                <Link to="/shop/tablets">
                    <h2 className='mb-3 text-xl font-semibold' style={{
                        color: "#ff6117"
                    }}>Tablets</h2>
                </Link>
                <div className="tabletCate flex gap-80">
                    <ul>
                        <Link to="/shop/tablets/xiaomi"><li>Xiaomi</li></Link>
                        <li>Other tablets</li>
                    </ul>
                    <ul>
                        <Link to="/shop/tablets/samsung"><li>Samsung</li></Link>
                        <li>Oukitel</li>
                    </ul>
                    <ul>
                        <Link to="/shop/tablets/apple"><li>Apple</li></Link>
                        <li>Huawei</li>
                    </ul>
                </div>
            </div>
            <div className="pcEquipment">
                <h1 className='text-center mb-5 text-3xl font-semibold'>Computers and office equipment</h1>
                <Link to="/shop/laptops"><h2 className='mb-3 text-xl font-semibold' style={{
                    color: "#ff6117"
                }}>Laptops</h2></Link>
                <div className="laptopCate flex gap-80 mb-5">
                    <ul>
                        <li>For work, education and games</li>
                    </ul>
                    <ul>
                        <li>For games</li>
                    </ul>
                </div>
                <h2 className='mb-3 text-xl font-semibold' style={{
                    color: "#ff6117"
                }}>PC bulding</h2>
                <div className="tabletCate flex gap-80 mb-5">
                    <ul>
                        <li>Motherboard</li>
                        <li>Power unit</li>
                        <li>Video card</li>
                        <li>Gaming chairs</li>
                    </ul>
                    <ul>
                        <li>RAM</li>
                        <li>CPU cooler</li>
                        <li>Housings</li>
                        <li>Monitors</li>
                    </ul>
                    <ul>
                        <li>Storage (SSD or HDD)</li>
                        <li>Processor</li>
                        <li>CPU cooling</li>
                        <li>Hard drives</li>
                    </ul>
                </div>
                <h2 className='mb-3 text-xl font-semibold' style={{
                    color: "#ff6117"
                }}>PC peripherals</h2>
                <div className="tabletCate flex gap-80 mb-5">
                    <ul>
                        <li>Microphones</li>
                        <li>Headphones</li>
                    </ul>
                    <ul>
                        <li>Keyboards</li>
                        <li>Rug</li>
                    </ul>
                    <ul>
                        <li>Mouse</li>
                        <li>Web - camera</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default AllCategoryMain