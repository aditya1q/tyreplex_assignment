"use client"

import { useState, useEffect } from 'react';
import TyreCard from './card/TyreCard';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { mrf, bridgestone, ceat, cst_tyre, dunlop, falken, goodtyre, jk, kumho, maxxis, yokohama, apollo } from '@/app';

const Deals = () => {
    const tyreData = [
        { logo: bridgestone, brandName: 'Bridgestone' },
        { logo: ceat, brandName: 'CEAT' },
        { logo: cst_tyre, brandName: 'CST Tyre' },
        { logo: dunlop, brandName: 'Dunlop' },
        { logo: falken, brandName: 'Falken' },
        { logo: mrf, brandName: 'MRF' },
        { logo: goodtyre, brandName: 'GoodTyre' },
        { logo: jk, brandName: 'JK Tyre' },
        { logo: kumho, brandName: 'Kumho' },
        { logo: maxxis, brandName: 'Maxxis' },
        { logo: yokohama, brandName: 'Yokohama' },
        { logo: apollo, brandName: 'Apollo' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const tyresPerSlide = 4;
    const slideInterval = 3000;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const totalSlides = Math.ceil(tyreData.length / tyresPerSlide);
                return (prevIndex + 1) % totalSlides;
            });
        }, slideInterval);

        return () => clearInterval(interval);
    }, [tyreData.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const totalSlides = Math.ceil(tyreData.length / tyresPerSlide);
            return (prevIndex - 1 + totalSlides) % totalSlides;
        });
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const totalSlides = Math.ceil(tyreData.length / tyresPerSlide);
            return (prevIndex + 1) % totalSlides;
        });
    };

    const totalSlides = Math.ceil(tyreData.length / tyresPerSlide);

    return (
        <div className="relative w-full mx-auto shadow-lg bg-white px-4 py-6">
            <h1 className="text-[16px] font-bold">Best Deals</h1>
            <div className="overflow-hidden relative">
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
                            className="flex w-full"
                        >
                            {tyreData.slice(slideIndex * tyresPerSlide, (slideIndex + 1) * tyresPerSlide).map((tyre, index) => (
                                <div
                                    key={index}
                                    className="min-w-[25%] flex items-center justify-center p-2"
                                >
                                    <TyreCard logo={tyre.logo} brandName={tyre.brandName} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-[60%] left-0 transform -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-300 rounded-full p-2 shadow-md transition-colors"
            >
                <ArrowBackIosNewOutlinedIcon />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-[60%] right-0 transform -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-300 rounded-full p-2 shadow-md transition-colors"
            >
                <ArrowForwardIosOutlinedIcon />
            </button>
        </div>
    );
};

export default Deals;
