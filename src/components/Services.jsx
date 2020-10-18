import React from 'react';
import '../styles/Services.scss';
import Car from './assets/car.svg';
import Hotel from './assets/hotel.svg';
import Flight from './assets/flight.svg';
import Trip from './assets/trip.svg';

const Services = () => {
    /**
     * services icons component
     */
    return (
        <div className='services'>
            <p className='services'>our services</p>
            <div className='travel-icons'>
                <div className='icon animate3'>
                    <img src={Car} alt='' />
                    <p>Car rental</p>
                </div>
                <div className='icon animate3'>
                    <img src={Flight} alt='' />
                    <p>Flight anywhere</p>
                </div>
                <div className='icon animate3'>
                    <img src={Hotel} alt='' />
                    <p>Hotel Reservation</p>
                </div>
                <div className='icon animate3'>
                    <img src={Trip} alt='' />
                    <p>Trip Advising</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
