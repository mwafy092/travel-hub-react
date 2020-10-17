import React, { useEffect, useState } from 'react';
import '../styles/City.scss';
import Area from './Area';
const City = (props) => {
    const [cities, setCities] = useState([]);
    const [cityId, setCityId] = useState();

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
    const setSelect = (id) => {
        setCityId(id);
    };
    return (
        <div className='city'>
            <label htmlFor='city'>city</label>
            <select
                name='city'
                id='city'
                onChange={(e) => setSelect(e.target.value)}
            >
                {cities.map((city) => (
                    <option value={city.id} key={city.id}>
                        {city.attributes.name}
                    </option>
                ))}
            </select>
            <Area cityId={cityId} countryId={props.id} />
        </div>
    );
};

export default City;
