import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Country from './Country';
import '../styles/App.scss';
import Airplane from './assets/airplane-travel.svg';
import Balloon from './assets/hot-air-balloon.svg';
import Tropical from './assets/tropical.svg';
import Cruise from './assets/cruise.svg';

const App = () => {
    return (
        <div className='app'>
            <Nav />
            <Header />

            <div className='container'>
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
                        <p>enjoy summer</p>
                    </div>
                </div>

                <div className='country-data'>
                    <Country />
                </div>
            </div>
        </div>
    );
};

export default App;
