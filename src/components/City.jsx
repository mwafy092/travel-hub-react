import React, { useEffect, useState } from 'react';
import Area from './Area';
import Error from './assets/error.svg';
const City = (props) => {
    const [cities, setCities] = useState([]);
    const [cityId, setCityId] = useState(null);

    // fetch countries api and set data to cities state
    const getCity = async () => {
        // error handling for fetch api
        if (props.id === undefined) {
            return;
        }
        const URL = `http://46.101.108.59/api/country/${props.id}/city`;
        const PROXY = `https://cors-anywhere.herokuapp.com/`;

        const response = await fetch(PROXY + URL)
            .then((response) => response.json())
            .then((data) => setCities(data.data));
    };

    // setting cityId state
    const setSelect = (id) => {
        setCityId(id);
    };

    // invoking getCity function
    useEffect(() => {
        getCity();
        setCityId(null);
    }, [props.id]);

    // error checking for city
    const errorChecking = () => {
        if (props.id) {
            if (cityId === null) {
                return (
                    <div className='error' style={{ display: 'center' }}>
                        <p style={{ color: '#56C0A6', fontWeight: '600' }}>
                            <img src={Error} alt='error' width='40px' />
                            please select city
                        </p>
                    </div>
                );
            }
        }
    };

    // invoking areas for egypt
    const renderArea = () => {
        if (props.id === '56') {
            if (cityId) {
                return <Area cityId={cityId} countryId={props.id} />;
            }
        }
    };
    return (
        <div className='city'>
            <label htmlFor='city'>city</label>
            <select
                name='city'
                id='city'
                onChange={(e) => setSelect(e.target.value)}
            >
                <option value='0'>select city</option>
                {cities.map((city) => (
                    <option value={city.id} key={city.id}>
                        {city.attributes.name}
                    </option>
                ))}
            </select>
            {errorChecking()}
            {renderArea()}
        </div>
    );
};

export default City;
