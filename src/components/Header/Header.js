import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className='d-flex align-items-center mt-5 container'>
            <img className=' logo-size' src='/images/website_logo.png'alt="" />
            <h1 className='mx-3 '>Study Planner</h1>
        </div>
    );
};

export default Header;