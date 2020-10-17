import React, { useEffect, useState } from 'react';
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
    const setSelect = (id) => {
        setCityId(id);
    };
    useEffect(() => {
        getCity();
    }, [props.id]);
    return (
        <div className='city'>
            <label htmlFor='city'>city</label>
            <select
                name='city'
                id='city'
                onChange={(e) => setSelect(e.target.value)}
            >
                <option value='select_city'>select city</option>
                {cities.map((city) => (
                    <option value={city.id} key={city.id}>
                        {city.attributes.name}
                    </option>
                ))}
            </select>
            {props.id ? (
                cityId ? (
                    ''
                ) : (
                    <p style={{ color: 'red' }}>
                        <i
                            className='fas fa-bomb'
                            style={{ fontSize: '1.5rem', margin: '1rem' }}
                        ></i>
                        please select city
                    </p>
                )
            ) : (
                ''
            )}
            {props.id === '56' ? (
                <Area cityId={cityId} countryId={props.id} />
            ) : (
                ''
            )}
        </div>
    );
};

export default City;
