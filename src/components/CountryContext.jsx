import React, { useState, createContext } from 'react';

export const CountryContext = createContext();

export const CountryProvider = (props) => {
    const [country, setCountry] = useState([{ country: 'egypt' }]);
    return (
        <CountryContext.Provider value={[country, setCountry]}>
            {props.children}
        </CountryContext.Provider>
    );
};
