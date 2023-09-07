import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <nav className="navbar">
                <div className="logo">
                    <h3>e-shop</h3>
                </div>
                <ul className="nav-links">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/about">About</a></li>
                    <li className="nav-item"><a href="/services">Services</a></li>
                    {/* Add more navigation items here */}
                </ul>
                <ul className='nav-button'>

                <li className='nav-item'><a href="/createShop">Create Shop</a></li>
                </ul>
            </nav>
            <div className="header2">
                <h1>Discover and Find Your Own Fashion!</h1>
                <h4>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</h4>
                <button>Explore Now</button>
            </div>
        </div>
    );
};

export default Header;