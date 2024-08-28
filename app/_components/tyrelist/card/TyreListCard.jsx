import Image from 'next/image';

const TyreCard = ({ logo, brandName, model, size, price, reviews, warranty, type, availability }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-80 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-between items-center mb-2">
                {/* <Image src={logo} alt={brandName} width={60} height={30} /> */}
                <h1 className='font-bold text-[20px]'>{brandName}</h1>
                <span className="bg-yellow-400 text-xs font-bold py-1 px-2 rounded">{warranty}</span>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className="text-[16px] font-bold">{model}</h2>
                    <p className="text-sm text-gray-600">{size}</p>
                    <div className="flex items-center mt-2">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mr-2">{reviews.rating}★</span>
                        <span className="text-xs text-gray-500">{reviews.count} Reviews</span>
                    </div>
                    <div className="mt-2">
                        <p className="text-lg font-bold">₹ {price}</p>
                        <p className="text-xs text-green-600">{availability}</p>
                        <p className="text-xs text-gray-500">{type}</p>
                    </div>
                </div>
                <Image src={logo} alt={brandName} width={130} height={100} />
            </div>
        </div>
    );
};

export default TyreCard;
