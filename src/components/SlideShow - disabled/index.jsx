import React, { useState, useEffect } from 'react';
import "./SlideShow.scss";

function SlideShow({ image, intervalTime }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % image.length);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [currentIndex, image.length, intervalTime]);

    const goToPrev = () => {
        setCurrentIndex((currentIndex + image.length - 1) % image.length);
    };

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % image.length);
    };

    return (
        <div className='slideShow'>
            <button onClick={goToPrev}>Anterior</button>
            <img src={image[currentIndex]} alt="Slide-Show" />
            <button onClick={goToNext}>Próximo</button>
        </div>
    );
};

export default SlideShow;
