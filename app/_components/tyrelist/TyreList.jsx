"use client"

import { useState } from 'react';
import TyreListCard from '../tyrelist/card/TyreListCard';
import { tyreData } from '../../_constants/Constant';
import SelectFeatures from '../tyrelist/select/SelectFeature';

const TyreList = () => {
    const [visibleCount, setVisibleCount] = useState(8);

    const handleViewMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 8, tyreData.length));
    };

    return (
        <div className='bg-white p-6 pt-4 space-y-4'>
            <div className='flex flex-col md:flex-row justify-between'>
                <h1 className='font-bold text-[18px] mb-2'>Tyres sold by dealers</h1>
                <SelectFeatures />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
                {tyreData.slice(0, visibleCount).map((tyre, index) => (
                    <TyreListCard key={index} {...tyre} />
                ))}
            </div>
            {visibleCount < tyreData.length && (
                <div className="text-center mt-4">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={handleViewMore}
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default TyreList;
