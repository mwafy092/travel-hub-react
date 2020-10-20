import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { CountryContext } from './CountryContext';

const Alan = () => {
    // setting country context by voice
    const [country, setCountry] = useContext(CountryContext);

    // alan api key
    const alanKey = `76d2d393a24f7f28c2ff9885945c8c972e956eca572e1d8b807a3e2338fdd0dc/stage`;

    // setting up alan integration
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, country }) => {
                if (command === 'getCountry') {
                    setCountry([{ country }]);
                }
            },
        });
    }, []);
    return <div className='alan'></div>;
};

export default Alan;
