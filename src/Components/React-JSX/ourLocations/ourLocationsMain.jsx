import React from 'react'
import MainContainer from '../Repetitive/mainContainer'

// Locally called images
import officeMain from "../../Local-Images/office-main.jpg";
import officeVega from "../../Local-Images/office-vega.jpg";
import officeLabzak from "../../Local-Images/office-labzak.jpg";

function OurLocationsMain() {
    return (
        <>
            <header className="h-52 bg-slate-200 flex justify-center items-center mb-10">
                <h1 className='text-4xl font-semibold'>Our Locations</h1>
            </header>
            <MainContainer>
                <main>
                    <hr />
                    <div className="officeMain mt-5 flex items-center gap-5 mb-5">
                        <div className="maps">
                            <img src={officeMain} width="635" alt="OFFICE-MAIN" />
                            <br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.436358755454!2d69.36016417311774!3d41.34168320327977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef38715cd17d9%3A0x6a7663d6ec3f7bd2!2zT1BFTlNIT1AuVVogLSDQntC90LvQsNC50L0g0LjQvdGC0LXRgNC90LXRgiDQvNCw0LPQsNC30LjQvQ!5e0!3m2!1sen!2s!4v1726303399231!5m2!1sen!2s" width="635" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="content w-6/12">
                            <h1 className='text-center text-2xl font-semibold mb-10'>Head office OPENSHOP.UZ</h1>
                            <ul className='leading-8'>
                                <li className='text-gray-700'><b className='text-gray-600'>Address</b>: Toshkent shahar, Mirzo Ulugbek tumani, Buyuk Ipak Yo'li ko'chasi, 302</li>
                                <li className='text-gray-700'><b className='text-gray-600'>Working hours</b>: 9:00 dan 22:00 gacha</li>
                                <li className='text-gray-700'><b className='text-gray-600'>Phone</b>:  <span className='text-orange-600'>+998 (71) 203 66 60</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Telegram</b>: <span className='text-orange-600'>@WWWOPENSHOPUZ</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Email</b>: <span className='text-orange-600'>info@openshop.uz</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Website</b>: <span className='text-orange-600'>www.openshop.uz</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Payment method</b>: Cash, Installment, UzCard, Humo, Visa, Mastercard</li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="officeVega mt-5 flex items-center gap-5 mb-5">
                        <div className="maps">
                            <img src={officeVega} width="635" alt="OFFICE-VEGA" />
                            <br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.2504356139534!2d69.22123417653816!3d41.25988280389376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a7667710b21%3A0xc478dc0d295f9756!2zTWFsbCDigJxWZWdh4oCd!5e0!3m2!1sen!2s!4v1726304502832!5m2!1sen!2s" width="635" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="content w-6/12">
                            <h1 className='text-center text-2xl font-semibold mb-10'>Vega sales point OPENSHOP.UZ</h1>
                            <ul className='leading-8'>
                                <li className='text-gray-700'><b className='text-gray-600'>Address</b>: Toshkent shahar, Yakkasaroy tumani, Shota Rustaveli ko'chasi, 150</li>
                                <li className='text-gray-700'><b className='text-gray-600'>Working hours</b>: 9:00 dan 21:00 gacha</li>
                                <li className='text-gray-700'><b className='text-gray-600'>Phone</b>:  <span className='text-orange-600'>+998 (71) 203 66 60</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Telegram</b>: <span className='text-orange-600'>@VegaCentre_OpenShop</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Email</b>: <span className='text-orange-600'>info@openshop.uz</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Website</b>: <span className='text-orange-600'>www.openshop.uz</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Payment method</b>: Cash, Installment, UzCard, Humo, Visa, Mastercard</li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="officeLabzak mt-5 flex items-center gap-5 mb-5">
                        <div className="maps">
                            <img src={officeLabzak} width="635" alt="OFFICE-Labzak" />
                            <br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d748.906136120523!2d69.268481!3d41.338777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b293f021f71%3A0x3a59547187207ee3!2zT1BFTlNIT1AuVVogLSBMYWJ6YWsg0KLQvtGH0LrQsCDQv9GA0L7QtNCw0LY!5e0!3m2!1sen!2sus!4v1726304766419!5m2!1sen!2sus" width="635" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="content w-6/12">
                            <h1 className='text-center text-2xl font-semibold mb-10'>Labzak point of sale OPENSHOP.UZ</h1>
                            <ul className='leading-8'>
                                <li className='text-gray-700'><b className='text-gray-600'>Address</b>: Toshkent shahar, Shayxontoxur tumani, Labzak ko'chasi, 136B</li>
                                <li className='text-gray-700'><b className='text-gray-600'>Working hours</b>: 9:00 dan 21:00 gacha</li>
                                <li className='text-gray-700'><b className='text-gray-600'>Phone</b>:  <span className='text-orange-600'>+998 (71) 203 66 60</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Telegram</b>: <span className='text-orange-600'>@Labzak_Openshop</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Email</b>: <span className='text-orange-600'>info@openshop.uz</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Website</b>: <span className='text-orange-600'>www.openshop.uz</span></li>
                                <li className='text-gray-700'><b className='text-gray-600'>Payment method</b>: Cash, Installment, UzCard, Humo, Visa, Mastercard</li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                </main>
            </MainContainer>
        </>
    )
}

export default OurLocationsMain