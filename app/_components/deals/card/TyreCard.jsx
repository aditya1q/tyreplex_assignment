import Image from 'next/image';

const TyreCard = ({ logo }) => {
    return (
        <div className="flex items-center flex-col gap-4 justify-center transform transition-transform duration-300 ease-in-out hover:scale-105">
            <Image src={logo} alt="No Tyre" width={200} height={100} className="object-contain mix-blend-plus-darker" />
        </div>
    );
};

export default TyreCard;
