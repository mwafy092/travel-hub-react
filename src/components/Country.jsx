import React, { useEffect, useState, useContext } from 'react';
import City from './City';
import '../styles/Form.scss';
import { CountryContext } from './CountryContext';
import { render } from '@testing-library/react';
const Country = () => {
    // sending country data to context api
    const [country, setCountry] = useContext(CountryContext);
    let { country: voiceCountry } = country[0];
    // country and country id states
    const [countries, setCountries] = useState([]);
    const [countryId, setCountryId] = useState();
    const [voiceCountryId, setVoiceCountryId] = useState();

    const [id, setId] = useState();
    // Handling AI voice and getting id by country name
    const getVoiceId = () => {
        countries.map((country) => {
            if (
                country.attributes.name.toLowerCase() ===
                voiceCountry.toLowerCase()
            ) {
                setVoiceCountryId(country.id);
                // set the main id state
                setId(country.id);
            }
        });
    };
    useEffect(() => {
        getVoiceId();
    }, [country]);

    // calling fetch api for countries
    const getCountry = async () => {
        const URL = `http://46.101.108.59/api/countries`;
        const PROXY = `https://cors-anywhere.herokuapp.com/`;

        const response = await fetch(PROXY + URL)
            .then((response) => response.json())
            .then((data) => setCountries(data.data));
    };

    // calling country api when countryId changed
    useEffect(() => {
        getCountry();
    }, [countryId]);

    // setting country id based on selection
    const setSelect = (id) => {
        setCountryId(id);
        // set the main id state
        setId(id);
    };

    // getting the country name by id selected to send through context api
    const getCountryById = () => {
        countries.map((country) => {
            if (country.id === countryId) {
                setCountry((prevData) => [
                    { country: country.attributes.name },
                ]);
            }
        });
    };

    // calling get country by id when country id changed
    useEffect(() => {
        getCountryById();
    }, [countryId]);

    // render city component based on voice id or selection id
    const renderCity = () => {
        if (countryId || voiceCountryId) {
            return <City id={id} />;
        }
    };

    return (
        <div className='country '>
            <label htmlFor='country'>Country</label>
            <select
                onClick={() => voiceCountry === undefined}
                name='country'
                id='country'
                onChange={(e) => setSelect(e.target.value)}
                className='animate5'>
                <option value='select country'>
                    {voiceCountry ? voiceCountry : 'Select Country'}
                </option>
                {countries.map((country) => (
                    <option value={country.id} key={country.id}>
                        {country.attributes.name}
                    </option>
                ))}
            </select>
            <p className='selected-country'>Selected Country: {voiceCountry}</p>
            {renderCity()}
        </div>
    );
};

export default Country;
