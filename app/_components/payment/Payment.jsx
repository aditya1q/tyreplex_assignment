import React from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const Payment = () => {
    return (
        <div className='flex flex-col gap-2 text-[13px] bg-white p-4 shadow-lg'>
            <h1 className='text-[16px] font-bold'>Payment Offers</h1>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-3'>
                    <p><CheckOutlinedIcon sx={{color:'#0a7802' , fontSize:'20px'}}/>Deposit to Account</p>
                    <p><CheckOutlinedIcon sx={{color:'#0a7802' , fontSize:'20px'}}/>Credit Card/Debit Card</p>
                    <p><CheckOutlinedIcon sx={{color:'#0a7802' , fontSize:'20px'}}/>Wallets (PayTM/PhonePe/Amazon etc.)</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p><CheckOutlinedIcon sx={{color:'#0a7802' , fontSize:'20px'}}/>Net Banking</p>
                    <p><CheckOutlinedIcon sx={{color:'#0a7802' , fontSize:'20px'}}/>UPI</p>
                </div>
            </div>
        </div>
    )
}

export default Payment