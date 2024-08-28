import Image from 'next/image';
import ServiceCard from './card/ServiceCard';
import { Wheel_alignment, Wheel_bal } from '@/app';

const Service = () => {
    const Images = [
        { logo: Wheel_bal, brandName: "Wheel Balancing" },
        { logo: Wheel_alignment, brandName: "Wheel Alignment" },
    ];

    return (
        <div className='bg-white p-4 shadow-lg w-full'>
            <h1 className='text-[16px] font-bold'>Service Offered by this dealer</h1>
            <ServiceCard images={Images}/>
        </div>
    );
};

export default Service;
