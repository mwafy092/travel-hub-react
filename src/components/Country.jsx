import React, { useEffect, useState, useContext } from 'react';
import City from './City';

import '../styles/Form.scss';
import { CountryContext } from './CountryContext';
const Country = () => {
    const [country, setCountry] = useContext(CountryContext);
    const [countries, setCountries] = useState([]);
    const [countryId, setCountryId] = useState();
    const getCountry = async () => {
        const URL = `http://46.101.108.59/api/countries`;
        const PROXY = `https://cors-anywhere.herokuapp.com/`;

        const response = await fetch(PROXY + URL)
            .then((response) => response.json())
            .then((data) => setCountries(data.data));
    };
    useEffect(() => {
        getCountry();
    }, [countryId]);

    const setSelect = (id) => {
        setCountryId(id);
    };

    const getCountryById = () => {
        countries.map((country) => {
            if (country.id === countryId) {
                setCountry((prevData) => [
                    { country: country.attributes.name },
                ]);
            }
        });
    };
    useEffect(() => {
        getCountryById();
    }, [countryId]);
    return (
        <div className='country'>
            <label htmlFor='country'>Country</label>
            <select
                name='country'
                id='country'
                onChange={(e) => setSelect(e.target.value)}
            >
                <option value='select country'>Select Country</option>
                {countries.map((country) => (
                    <option value={country.id} key={country.id}>
                        {country.attributes.name}
                    </option>
                ))}
            </select>
            <City id={countryId} />
        </div>
    );
};

export default Country;
