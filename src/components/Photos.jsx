import React, { useState, useEffect, useContext } from 'react';
import '../styles/Photo.scss';
import { CountryContext } from './CountryContext';
const Photos = () => {
    const [country, setCountry] = useContext(CountryContext);
    const [photos, setPhotos] = useState([]);
    const getPhotos = async () => {
        const API_KEY = `18025631-21fc69eb9242d4f0ccc554e3b`;
        const _country = await country[0].country;
        const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${_country}&image_type=photo&orientation=vertical`;

        const response = await fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                let [photo1, photo2, photo3] = data.hits;
                let allPhotos = [photo1, photo2, photo3];
                setPhotos(allPhotos);
            });
    };
    useEffect(() => {
        getPhotos();
    }, [country]);
    if (photos[0] === undefined) {
        return (
            <p style={{ color: 'red' }}>
                <i
                    className='fas fa-bomb'
                    style={{ fontSize: '1.5rem', margin: '1rem' }}
                ></i>
                no photos to show
            </p>
        );
    }
    return (
        <React.Fragment>
            {photos.map((photo) => (
                <div className='photo' key={photo.id}>
                    <p>{photo.user}</p>
                    <i className='fas fa-thumbtack'>
                        <span>{country[0].country}</span>
                    </i>
                    <img src={photo.largeImageURL} alt={photo.id} />
                </div>
            ))}
        </React.Fragment>
    );
};

export default Photos;
