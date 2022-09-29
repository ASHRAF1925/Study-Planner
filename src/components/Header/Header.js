import React from 'react';
import logo from '../../images/website_logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex align-items-center mt-5 container'>
            <img className=' logo-size' src={logo} alt="" />
            <h1 className='mx-3 '>Study Planner</h1>
        </div>
    );
};

export default Header;