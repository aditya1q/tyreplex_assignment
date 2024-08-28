"use client"

import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import { logo } from '../../index'

const Footer = () => {
    return (
        <div className='bg-white shadow-lg w-full'>
            <div className='bg-[#FFEAAA] p-6 space-y-2'>
                <h1 className='font-bold text-[15px]'>Have a question about Tyres?</h1>
                <p className='text-[12px] text-gray-800'>Get an answer in 24 hours from our experts.</p>
                <input className='w-[40%] rounded-full border-2 bg-white border-[yellow] text-[12px] px-3 py-2 outline-none' placeholder='Ask or Search your question' />
            </div>
            <div className='flex w-full px-8 py-4'>
                <div className='flex flex-col gap-3 w-[50%]'>
                    <Image src={logo} height={100} width={100} alt='no img' />
                    <div className='flex gap-2 pl-6'>
                        <FacebookOutlinedIcon />
                        <InstagramIcon />
                    </div>
                </div>
                <div className='w-full text-gray-500'>
                    <ul className="grid grid-cols-3 gap-2 text-[12px] place-content-between">
                        <li className="cursor-pointer hover:text-blue-500">Who We Are</li>
                        <li className="cursor-pointer hover:text-blue-500">Are you a Tyre Dealer?</li>
                        <li className="cursor-pointer hover:text-blue-500">Privacy Policy</li>
                        <li className="cursor-pointer hover:text-blue-500">Terms of Use</li>
                        <li className="cursor-pointer hover:text-blue-500">Contact Us</li>
                        <li className="cursor-pointer hover:text-blue-500">Career</li>
                        <li className="cursor-pointer hover:text-blue-500">Shipping & Return Policy</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className='text-center text-[13px] py-3 text-gray-700]'>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
        </div>
    )
}

export default Footer