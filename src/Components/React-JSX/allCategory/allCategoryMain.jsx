import React from 'react'

function AllCategoryMain() {
    return (
        <main>
            <div className="phoneAndTab mb-10">
                <h1 className='text-center mb-5 text-3xl font-semibold'>Phones and Tablets</h1>
                <h2 className='mb-3 text-xl font-semibold'>Phones</h2>
                <div className="phonesCate flex gap-80 mb-5">
                    <ul>
                        <li>Xiaomi</li>
                        <li>Huawei</li>
                        <li>Novey Mobile</li>
                        <li>Tecno</li>
                        <li>ZTE</li>
                    </ul>
                    <ul>
                        <li>Samsung</li>
                        <li>Nokia</li>
                        <li>Blackview</li>
                        <li>Oppo</li>
                        <li>Oukitel</li>
                    </ul>
                    <ul>
                        <li>Apple</li>
                        <li>Realme</li>
                        <li>Honor</li>
                        <li>Infinix</li>
                        <li>Doogee</li>
                    </ul>
                </div>
                <h2 className='mb-3 text-xl font-semibold'>Tablets</h2>
                <div className="tabletCate flex gap-80">
                    <ul>
                        <li>Xiaomi</li>
                        <li>Other tablets</li>
                    </ul>
                    <ul>
                        <li>Samsung</li>
                        <li>Oukitel</li>
                    </ul>
                    <ul>
                        <li>Apple</li>
                        <li>Huawei</li>
                    </ul>
                </div>
            </div>
            <div className="pcEquipment">
                <h1 className='text-center mb-5 text-3xl font-semibold'>Computers and office equipment</h1>
                <h2 className='mb-3 text-xl font-semibold'>Laptops</h2>
                <div className="laptopCate flex gap-80 mb-5">
                    <ul>
                        <li>For work, education and games</li>
                    </ul>
                    <ul>
                        <li>For games</li>
                    </ul>
                </div>
                <h2 className='mb-3 text-xl font-semibold'>PC bulding</h2>
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
                <h2 className='mb-3 text-xl font-semibold'>PC peripherals</h2>
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