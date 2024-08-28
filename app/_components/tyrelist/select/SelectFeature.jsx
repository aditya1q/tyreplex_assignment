import React from 'react'
import Select from './Select';

const SelectFeature = () => {
    const tyreBrands = [
        'Apollo',
        'Bridgestone',
        'Michelin',
        'Goodyear',
        'Continental',
        'Pirelli',
        'Hankook',
        'Yokohama',
        'Dunlop',
        'Falken',
        'Nexen',
        'Toyo'
    ];

    const tyreFilter = [
        'Most Popilar',
        'High to Low',
        'Low to High'
    ]
    return (
        <div className='flex flex-col lg:flex-row items-center gap-5'>
            <Select data={tyreBrands} labelName='Tyre Brands'/>
            <Select data={tyreFilter} labelName='Tyre Filter'/>
        </div>
    )
}

export default SelectFeature;