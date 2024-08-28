"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, 2000); // Change slide every 2 seconds

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [images.length]); // Dependency on images.length to reset interval if images change

    return (
        <div className="relative w-[35%] mx-auto">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <div key={index} className="min-w-full flex items-center justify-center">
                            <Image src={src} alt={`Slide ${index + 1}`} width={400} height={400} className="object-contain rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
            {/* <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
                ›
            </button> */}
        </div>
    );
};

export default Carousel;
