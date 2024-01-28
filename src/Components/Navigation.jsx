import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from '../Assets/Styles/Components/Navigation.module.css';


const Navigation = () => {
    return (
        <>
            <nav className={`${Style.header_Nav} navbar navbar-expand-lg`}>
                <div className="container">
                    <div className={`${Style.logo_div} navbar-brand`}>
                        <h1 className={Style.logo_heading}>Furni</h1>
                        <span className={Style.Dot}>.</span>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${Style.menu_div} collapse navbar-collapse`} id="navbarNav">
                        <ul className={`${Style.menu_Bar} navbar-nav mb-2 mb-lg-0`}>
                            <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/shop" className="nav-link">Shop</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/about" className="nav-link">About</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/services" className="nav-link">Services</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/blog" className="nav-link">Blog</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/contact" className="nav-link">Contact us</NavLink></li>
                        </ul>

                        <div className={`${Style.profile} navbar-text`}>
                            <h3><i className="bi bi-person"></i></h3>
                        </div>

                        <div className={`${Style.cart} navbar-text`}>
                            <h3><i className="bi bi-cart"></i></h3>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigation;