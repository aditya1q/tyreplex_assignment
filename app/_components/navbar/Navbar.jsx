import Image from 'next/image'
import React from 'react'
import { logo } from '../../index'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-8 md:px-28 w-full shadow-md h-12 text-[14px] bg-white font-bold top-0 sticky z-20'>
            <Image src={logo} height='100%' width='100%' />
            <div className=''>
                <ul className="items-center gap-6 hidden md:flex">
                    <li><a href="#car-tyres" className="hover:text-gray-700">Car Tyres</a></li>
                    <li><a href="#bike-tyres" className="hover:text-gray-700">Bike Tyres</a></li>
                    <li><a href="#tyre-pressure" className="hover:text-gray-700">Tyre Pressure</a></li>
                    <li><a href="#commercial-tyres" className="hover:text-gray-700">Commercial Tyres</a></li>
                    <li><a href="#accessories" className="hover:text-gray-700">Accessories</a></li>
                    <li><a href="#more" className="hover:text-gray-700">More</a></li>
                </ul>
            </div>
            <div className='flex items-center gap-2'><PersonOutlineOutlinedIcon />Login</div>
        </nav>
    )
}

export default Navbar