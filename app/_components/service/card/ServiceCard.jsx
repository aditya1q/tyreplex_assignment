import Image from 'next/image';

const ServiceCard = ({ images }) => {
    return (
        <div className="flex gap-4 ">
            {images?.map((item, index) => (
                <div key={index} className="flex bg-white shadow-lg flex-col gap-4 p-10 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <Image 
                        src={item.logo} 
                        alt={`Service Image ${index + 1}`} 
                        width={100} 
                        height={100} 
                        className="object-contain mix-blend-multiply" 
                    />
                    <p className='text-[14px]'>{item.brandName}</p>
                    <button className='py-1.5 w-[90px] px-0 rounded-sm text-[14px] bg-[red] text-white'>Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default ServiceCard;
