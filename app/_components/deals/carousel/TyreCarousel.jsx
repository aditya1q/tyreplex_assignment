"use client"

import { useState, useEffect } from 'react';
import TyreCard from '../card/TyreCard';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const TyreCarousel = ({ tyres }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const tyresPerSlide = 4; // Number of tyres to show per slide
    const slideInterval = 3000; // 3 seconds
    console.log(tyres.length)
    // Update slide interval on component mount and when tyres length changes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const totalSlides = Math.ceil(tyres.length / tyresPerSlide);
                return (prevIndex + 1) % totalSlides;
            });
        }, slideInterval);

        return () => clearInterval(interval);
    }, [tyres.length]);

    // Navigate to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const totalSlides = Math.ceil(tyres.length / tyresPerSlide);
            return (prevIndex - 1 + totalSlides) % totalSlides;
        });
    };

    // Navigate to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const totalSlides = Math.ceil(tyres.length / tyresPerSlide);
            return (prevIndex + 1) % totalSlides;
        });
    };

    // Calculate the total number of slides
    const totalSlides = Math.ceil(tyres.length / 2);

    return (
        <div className="relative w-full mx-auto">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
                        width: `${totalSlides * 100}%`
                    }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="flex w-full bg-white p-4"
                        >
                            {tyres.slice(slideIndex * tyresPerSlide, (slideIndex + 1) * tyresPerSlide).map((tyre, index) => (
                                <div
                                    key={index}
                                    className="min-w-[25%] flex items-center justify-center"
                                >
                                    <TyreCard logo={tyre.logo} brandName={tyre.brandName}/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-1 h-full transform -translate-y-1/2 hover:border hover:border-blue-500 text-blue-700 px-4"
            >
                <ArrowBackIosNewOutlinedIcon />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-1 h-full transform -translate-y-1/2 hover:border hover:border-blue-500 text-blue-700 px-4"
            >
                <ArrowForwardIosOutlinedIcon />
            </button>
        </div>
    );
};

export default TyreCarousel;
