import React, { useEffect, useState, useContext } from 'react';
import City from './City';
import '../styles/Form.scss';
import { CountryContext } from './CountryContext';
const Country = () => {
    // sending country data to context api
    const [country, setCountry] = useContext(CountryContext);

    // country and country id states
    const [countries, setCountries] = useState([]);
    const [countryId, setCountryId] = useState();

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

    const renderCity = () => {
        if (countryId) {
            return <City id={countryId} />;
        }
    };
    return (
        <div className='country '>
            <label htmlFor='country'>Country</label>
            <select
                name='country'
                id='country'
                onChange={(e) => setSelect(e.target.value)}
                className='animate5'
            >
                <option value='select country'>Select Country</option>
                {countries.map((country) => (
                    <option value={country.id} key={country.id}>
                        {country.attributes.name}
                    </option>
                ))}
            </select>
            {renderCity()}
        </div>
    );
};

export default Country;
