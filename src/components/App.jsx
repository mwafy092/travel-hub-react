import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Country from './Country';
import Photos from './Photos';
import '../styles/App.scss';
import Airplane from './assets/airplane-travel.svg';
import Balloon from './assets/hot-air-balloon.svg';
import Tropical from './assets/tropical.svg';
import Cruise from './assets/cruise.svg';
import { CountryProvider } from './CountryContext';
const App = () => {
    return (
        <CountryProvider>
            <div className='app'>
                <Nav />
                <Header />

                <div className='container'>
                    <p className='services'>our services</p>
                    <div className='travel-icons'>
                        <div className='icon'>
                            <img src={Airplane} alt='' />
                            <p>travel anywhere</p>
                        </div>
                        <div className='icon'>
                            <img src={Cruise} alt='' />
                            <p>Cruise</p>
                        </div>
                        <div className='icon'>
                            <img src={Balloon} alt='' />
                            <p>air balloon</p>
                        </div>
                        <div className='icon'>
                            <img src={Tropical} alt='' />
                            <p>beautiful beaches</p>
                        </div>
                    </div>

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
                </div>

                <footer>Travel Hub Created By Mwafy @2020</footer>
            </div>
        </CountryProvider>
    );
};

export default App;
