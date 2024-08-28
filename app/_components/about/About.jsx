import ReviewCard from "./card/ReviewCard";
import Carousel from "./carousel/Carousel";
import { carousel_1, carousel_2, carousel_3 } from '@/app';

const About = () => {
    const images = [
        carousel_1,
        carousel_2,
        carousel_3
    ];

    const reviews = [
        { name: 'Md Nasir', review: 'Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your courteous, prompt, and professional...' },
        { name: 'Rohit Bhati', review: 'Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per your budget. Highly recommend.' },
        { name: 'Pradeep Kumar', review: 'Best tyre shop in Indirapuram. Good dealing with customer. All types of tyre available here. Price also responsible. Overall good experience.' }
    ];

    return (
        <div className="w-full mx-auto p-4 shadow-lg z-0">
            {/* Business Information */}
            <div className="flex items-center justify-between mb-4">
                <div className="space-y-2">
                    <h1 className="text-xl whitespace-nowrap font-bold">SHREE HEMKUNT TYRES AND SERVICES</h1>
                    <div className="flex items-center mt-2 gap-2">
                        <span className="bg-green-800 font-bold text-white px-1 rounded-sm text-xs mr-2">4.9</span>
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-gray-600 ml-2 underline">2278 Reviews</span>
                        <button className="text-gray-400 px-2 rounded-sm border border-gray-400 text-[13px]">Rate</button>
                    </div>
                    <p className="mt-2 text-[13px] w-[70%]">
                        PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                    </p>
                    <p className="text-gray-600 text-[12px]">Open - Monday to Sunday - 10:00AM to 8:00PM</p>
                    <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white">Get Directions</button>
                </div>
                <Carousel images={images} />
            </div>
            <div className="border-t pt-4 w-full">
                <h2 className="text-xl font-semibold mb-4">2278 Google Reviews</h2>
                <div className="grid grid-cols-3 gap-3">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} name={review.name} review={review.review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
