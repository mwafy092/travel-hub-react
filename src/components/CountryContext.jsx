import React, { useState, createContext } from 'react';

/**
 * context api to hold data related to country name
 */
export const CountryContext = createContext();

export const CountryProvider = (props) => {
    const [country, setCountry] = useState([{ country: 'egypt' }]);
    return (
        <CountryContext.Provider value={[country, setCountry]}>
            {props.children}
        </CountryContext.Provider>
    );
};
