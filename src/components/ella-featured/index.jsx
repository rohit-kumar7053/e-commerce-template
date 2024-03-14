/** @format */
//(FEATURED ON ELLA) Home-Page pe show ho raha hai ye page.
import React from "react";
// Ek card banaya usse niche call car liya or phir trendProducts ko home mai call kar diya.
const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="mb-4 mt-5">
            <div className="image-card relative w-full h-94 overflow-hidden">
                <img
                    src={imageSrc}
                    alt=""
                    className="w-auto h-full object-contain transition-transform duration-700 transform hover:scale-105"
                />
            </div>
            <div className="px-6 py-4 justify-center text-center ">
                <div className="text-xl font-semibold mb-2 text-black hover:underline cursor-pointer">
                    {title}
                </div>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
            <div className="justify-center text-center">
                <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black  font-bold py-2 px-4 w-48">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

const Ellafeatured = () => {
    return (
        <div className="container mx-auto">
            <div className="my-10">
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-full h-0.5 mx-2 bg-gray-600"></hr>
                    <span className="absolute px-28 -translate-x-1/2 bg-white left-1/2 text-2xl font-bold tracking-wide text-center text-black ">
                    FEATURED ON ELLA
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card
                    imageSrc="/assets/local-images/trainding-1.webp"
                    title="LOREM DE DORUS"
                    description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis."
                />
                <Card
                    imageSrc="/assets/local-images/trainding-2.webp"
                    title="MILANCELOS LANOS"
                    description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis."
                />
                <Card
                    imageSrc="/assets/local-images/trainding-1.webp"
                    title="COMO A MILANO"
                    description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis."
                />
            </div>
        </div>
    );
};

export default Ellafeatured;
