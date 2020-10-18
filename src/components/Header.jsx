import React from 'react';
import '../styles/Header.scss';
const Header = () => {
    /**
     * header component
     */
    return (
        <div className='header '>
            <h1 className='animate1'>What is your next destination?!</h1>
            <p className='animate2'>
                search for your favorite city and get the most beautiful photos
            </p>
        </div>
    );
};

export default Header;
