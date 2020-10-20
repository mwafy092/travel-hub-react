import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Country from './Country';
import Photos from './Photos';
import Services from './Services';
import '../styles/App.scss';
import { CountryProvider } from './CountryContext';
import Robot from './assets/error.svg';
import Alan from './Alan';
const App = () => {
    /**
     * This is the root component
     * all components included inside context api provider calling CountryProvider
     */

    return (
        <CountryProvider>
            <div className='app'>
                {/* header component */}
                <Nav />
                {/* header component */}
                <Header />

                <div className='container'>
                    <div className='color-red'></div>
                    <div className='color-yellow'></div>
                    {/* services component */}
                    <Services />

                    <div className='country-data'>
                        <div className='form'>
                            <div className='user'>
                                <p>
                                    you can use voice search and say "Search for
                                    [country name]"
                                </p>
                                <img src={Robot} alt='' />
                            </div>
                            {/* country component */}
                            <Country />
                        </div>
                        <div className='images'>
                            {/* photos component */}
                            <Photos />
                        </div>
                    </div>

                    <a
                        href='mailto:mwafy092@gmail.com?subject=Trip Reservation'
                        target='_blank'>
                        <button>
                            <span>Book now</span>
                            <i className='fas fa-money-bill-wave'></i>
                        </button>
                    </a>
                </div>

                {/* intergrate alan voice AI */}
                <Alan />
                <footer>Travel Hub Created By Mwafy @2020</footer>
            </div>
        </CountryProvider>
    );
};

export default App;
