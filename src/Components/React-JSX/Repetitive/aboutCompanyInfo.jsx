import React from 'react'
import { Link } from 'react-router-dom'

//Stylesheet for this file
import "../../Stylesheets/aboutCompanyInfo.scss"

function AboutCompanyInfo() {
    return (
        <div className="infoSection mb-10">
            <hr className='mb-5' />
            <h1 className='text-2xl font-semibold mb-14'>OPENSHOP.UZ is the best online store for buying electronics in wholesale and retail</h1>
            <div className="aboutCompany text-justify mb-5">
                <h2 className='text-xl font-semibold text-gray-600 mb-2'>About company</h2>
                <p className='mb-6 text-gray-600 font-normal'>The main advantage of our online store is that our customers can purchase goods in wholesale or retail. In our online store, delivery is carried out throughout the Republic of Uzbekistan. Our online store has been operating for more than 4 years and managed to please customers with low prices and quality goods. We study the market and always try to offer the best price for smartphones, small household appliances, large household appliances and of course smartphone accessories.</p>
                <p className='mb-6 text-gray-600 font-normal'>Smartphones - Smartphones have become an integral part of our lives, every year manufacturers try to surprise us with new models of smartphones. But our online store can also surprise you with a large number of new products from world brands! Only in our online store you can buy Xiaomi Apple Samsung Huawei and Vivo smartphones with a 3-year warranty</p>
                <p className='mb-6 text-gray-600 font-normal'>TVs - In this category you can find unique TVs with good performance for your home! Enjoy watching movies and series with your family with TVs from Artel, Shivaki, Samsung, Sony and LG</p>
                <p className='mb-6 text-gray-600 font-normal'>Air conditioners - This section allows you to make useful purchases for your home, office. To make it convenient for our customers, a description is attached to each product so that you can make the right choice.</p>
                <p className='mb-6 text-gray-600 font-normal'>Also, our online store can provide goods for our beloved housewives. In our online store you can buy a washing machine, refrigerator, gas stove, electric stove or microwave for your home at low prices with fast delivery.</p>
                <p className='mb-6 text-gray-600 font-normal'>Our online store delivers to cities like Samarkand, Jizzakh, Andijan, Bukhara, Namangan, Khorezm, Ferghana, Navoi, Kashkadarya, Surkhandarya, Syrdarya and also throughout the Tashkent region, and delivery is also carried out to the Republic of Karakalpakstan. And the most surprising thing is the incomplete supply map. You can clarify the delivery zones by calling our call center</p>
                <p className='mb-6 text-gray-600 font-normal'>LLC "OPEN SHOP" This is a company that has been on the market of Uzbekistan since 2018. Our online store works with famous and reliable brands of different price segments. Each of our clients will find something that suits their budget. We do our best for the convenience of online shopping in our online store. Make profitable purchases in our online store! Our team will be happy to advise.</p>
            </div>
            <div className="phoneAndTablets mb-5">
                <h1 className='text-xl font-bold text-gray-700 mb-7'>Phones and tablets</h1>
                <div className="flex gap-2">
                    <ul className='flex gap-1'>
                        <Link to="/shop/phones"><li className='hover: cursor-pointer'><b>Phones:</b></li></Link>
                        <li className='hover: cursor-pointer'><Link to="/shop/xiaomi"><span>Xiaomi</span></Link>,</li>
                        <li className='hover: cursor-pointer'><Link to="/shop/samsung"><span>Samsung</span></Link>,</li>
                        <li className='hover: cursor-pointer'><Link to="/shop/apple"><span>Apple</span></Link>,</li>
                        <li className='hover: cursor-pointer'><Link to="/shop/honor"><span>Honor</span></Link>,</li>
                        <li className='hover: cursor-pointer'><Link to="/shop/tecno"><span>Tecno</span></Link>,</li>
                        <li className='hover: cursor-pointer'><Link to="/shop/infinix"><span>Infinix</span></Link></li>
                    </ul>
                    <ul className='flex gap-1'>
                        <Link to="/shop/tablets"><li className='hover: cursor-pointer'><b>Tablets:</b></li></Link>
                        <li className='hover: cursor-pointer'><Link to="/shop/xiaomi-tablets"><span>Xiaomi</span></Link>,</li>
                        <li className='hover: cursor-pointer'><Link to="/shop/samsung-tablets"><span>Samsung</span></Link>,</li>
                        <li className='hover: cursor-pointer'><Link to="/shop/apple-tablets"><span>Apple</span></Link></li>
                    </ul>
                </div>
            </div>
            <div className="computerEquipment">
                <h1 className='text-xl font-bold text-gray-700 mb-7'>Computer Equipments</h1>
                <div className="flex gap-2">
                    <ul className='flex gap-1'>
                        <li className='hover: cursor-pointer'><b>Laptop:</b></li>
                        <li className='hover: cursor-pointer'><span>MacBook</span>,</li>
                        <li className='hover: cursor-pointer'><span>AsusRog</span>,</li>
                        <li className='hover: cursor-pointer'><span>Hp</span>,</li>
                        <li className='hover: cursor-pointer'><span>Acer</span>,</li>
                        <li className='hover: cursor-pointer'><span>MSI</span>,</li>
                        <li className='hover: cursor-pointer'><span>Lenovo</span></li>
                    </ul>
                    <ul className='flex gap-1'>
                        <li className='hover: cursor-pointer'><b>PC components:</b></li>
                        <li className='hover: cursor-pointer'><span>Motherboard</span>,</li>
                        <li className='hover: cursor-pointer'><span>RAM</span>,</li>
                        <li className='hover: cursor-pointer'><span>Storage (SDD or HDD)</span>,</li>
                        <li className='hover: cursor-pointer'><span>Power unit</span>,</li>
                        <li className='hover: cursor-pointer'><span>CPU cooler</span>,</li>
                        <li className='hover: cursor-pointer'><span>Processor</span>,</li>
                        <li className='hover: cursor-pointer'><span>Video card</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutCompanyInfo