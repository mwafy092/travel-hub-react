import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Country from './Country';
import Photos from './Photos';
import Services from './Services';
import '../styles/App.scss';
import { CountryProvider } from './CountryContext';
import Robot from './assets/error.svg';
import Linkedin from './assets/linkedin.svg';
const App = () => {
    /**
     * This is the root component
     * all components included inside context api provider calling CountryProvider
     */
    return (
        <CountryProvider>
            <div className='app'>
                <Nav />
                <Header />

                <div className='container'>
                    <Services />
                    <div className='country-data'>
                        <div className='form'>
                            <Country />
                        </div>
                        <div className='images'>
                            <Photos />
                        </div>
                    </div>
                    <button>
                        <span>Book now</span>
                        <i className='fas fa-money-bill-wave'></i>
                    </button>
                    <div className='color-red'></div>
                    <div className='color-yellow'></div>
                    <div className='robot'>
                        <img src={Robot} alt='' />
                        <a
                            href='https://www.linkedin.com/in/mwafy/'
                            target='_blank'
                        ></a>
                    </div>
                </div>

                <footer>Travel Hub Created By Mwafy @2020</footer>
            </div>
        </CountryProvider>
    );
};

export default App;
