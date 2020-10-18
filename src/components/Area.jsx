import React, { useEffect, useState } from 'react';
const Area = (props) => {
    // areas state
    const [areas, setAreas] = useState([]);

    // get area for cities in egypt using fetch api
    const getArea = async () => {
        const URL = `http://46.101.108.59/api/country/${props.countryId}/city/${props.cityId}/area`;
        const PROXY = `https://cors-anywhere.herokuapp.com/`;

        const response = await fetch(PROXY + URL)
            .then((response) => response.json())
            .then((data) => setAreas(data.data));
    };

    // calling fetch api when cityId changed
    useEffect(() => {
        getArea();
        setAreas([]);
    }, [props.cityId]);
    return (
        <div className='area'>
            <label htmlFor='area'>Area</label>
            <select name='area' id='area' className='animate5'>
                {areas.map((area) => (
                    <option value={area.attributes.name} key={area.id}>
                        {area.attributes.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Area;
