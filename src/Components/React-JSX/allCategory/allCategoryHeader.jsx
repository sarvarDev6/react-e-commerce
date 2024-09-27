import React from 'react'
import { Link } from 'react-router-dom'

import "../../Stylesheets/allCategory/allCategoryHeader.scss"


function AllCategoryHeader() {
    return (
        <header>
            <div className="categoryBox mt-10 mb-10 flex">
                <div className="item">
                    <div>
                        <i className="fa-solid fa-blender text-4xl"></i>
                        <h1>Small household</h1>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <i className="fa-solid fa-headphones-simple text-4xl"></i>
                        <h1>Accessuars</h1>
                    </div>
                </div>
                <Link to="/shop/phones">
                    <div className="item">
                        <div>
                            <i className="fa-solid fa-mobile text-4xl"></i>
                            <h1>Phones and Tablets</h1>
                        </div>
                    </div>
                </Link>
                <div className="item">
                    <div>
                        <i className="fa-solid fa-desktop text-4xl"></i>
                        <h1>PC Equipment</h1>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <i className="fa-solid fa-car text-4xl"></i>
                        <h1>Auto Products</h1>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <i className="fa-solid fa-handshake-angle text-4xl"></i>
                        <h1>Second Hand</h1>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default AllCategoryHeader