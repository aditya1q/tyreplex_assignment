const ReviewCard = ({ name, review }) => {
    // Extract the initials (letter from first and last name) from the user's name
    const initials = name.split(' ').map(part => part[0]).join('');

    return (
        <div className="bg-gray-100 p-4 rounded-lg flex items-start border border-gray-300 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                {initials}
            </div>
            <div className="ml-4">
                <p className="text-sm text-gray-700 font-bold">{name}</p>
                <p className="text-gray-700 mt-2 text-[13px]">{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
