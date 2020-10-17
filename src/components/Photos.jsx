import React, { useState, useEffect } from 'react';
import '../styles/Photo.scss';
const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const getPhotos = async () => {
        const API_KEY = `18025631-21fc69eb9242d4f0ccc554e3b`;
        const country = 'germany';
        const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${country}&image_type=photo&orientation=vertical`;

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
    }, []);
    console.log(photos);
    return (
        <React.Fragment>
            {photos.map((photo) => (
                <div className='photo'>
                    <p>{photo.user}</p>
                    <i class='fas fa-thumbtack'>
                        <span> germany</span>
                    </i>
                    <img src={photo.largeImageURL} alt='' key={photo.id} />
                </div>
            ))}
        </React.Fragment>
    );
};

export default Photos;
