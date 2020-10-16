import React, { useEffect, useState } from 'react';
import '../styles/City.scss';
const City = (props) => {
    const [cities, setCities] = useState([]);
    const getCity = async () => {
        const URL = `http://46.101.108.59/api/country/${props.id}/city`;
        const PROXY = `https://cors-anywhere.herokuapp.com/`;

        const response = await fetch(PROXY + URL)
            .then((response) => response.json())
            .then((data) => setCities(data.data));
    };
    useEffect(() => {
        getCity();
    }, [props.id]);
    return (
        <div className='city'>
            <label htmlFor='city'>city</label>
            <select name='city' id='city'>
                {cities.map((city) => (
                    <option value={city.attributes.name} key={city.id}>
                        {city.attributes.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default City;
