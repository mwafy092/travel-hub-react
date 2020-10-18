import React from 'react';
import '../styles/Services.scss';
import Airplane from './assets/airplane-travel.svg';
import Balloon from './assets/hot-air-balloon.svg';
import Tropical from './assets/tropical.svg';
import Cruise from './assets/cruise.svg';
const Services = () => {
    /**
     * services icons component
     */
    return (
        <div className='services'>
            <p className='services'>our services</p>
            <div className='travel-icons'>
                <div className='icon animate3'>
                    <img src={Airplane} alt='' />
                    <p>travel anywhere</p>
                </div>
                <div className='icon animate3'>
                    <img src={Cruise} alt='' />
                    <p>Cruise</p>
                </div>
                <div className='icon animate4'>
                    <img src={Balloon} alt='' />
                    <p>air balloon</p>
                </div>
                <div className='icon animate4'>
                    <img src={Tropical} alt='' />
                    <p>beautiful beaches</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
