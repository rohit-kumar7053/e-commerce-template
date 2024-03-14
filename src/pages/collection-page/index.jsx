/** @format */

import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// Ek card banaya usse niche call kar liya.
// Ye Collection page hai.
const Card = ({ imageSrc, title, description, quantity }) => {
    return (
        <section>
            {/* Zoom out Property  yaha use nahi hai or nahi ho gi*/}
            {/* 
            <div className="image-card relative w-full h-94 overflow-hidden">
                <img
                    src="/assets/local-images/trainding-1.webp"
                    alt=""
                    className="w-auto h-full object-contain transition-transform duration-700 transform hover:scale-105"
                />
            </div> 
            */}

            <div className="mb-4 mt-5">
                <img
                    className="w-full h-94 object-contain cursor-pointer"
                    src={imageSrc}
                    alt={title}
                />
                <div className="px-6 py-4 justify-center text-center ">
                    <div className="text-2xl font-extrabold my-3  text-black cursor-pointer">
                        {title}
                    </div>
                    <h5 className="flex justify-center text-center tracking-normal text-xs font-normal uppercase text-gray-600 my-3">
                        {quantity} Products
                    </h5>
                    <p className="text-gray-700 text-sm">{description}</p>
                </div>
                <div className="justify-center text-center">
                    <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const Collections = () => {
    return (
        <section>
            <Navbar />
            <div className="mx-12">
                <div>
                    <div className="flex gap-2 p-3 my-10 text-sm text-gray-400">
                        <h4>home</h4>
                        <span>{">"}</span>
                        <h2>Collections</h2>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl tracking-widest my-6 uppercase">
                            Collections
                        </h1>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card
                            imageSrc="/assets/local-images/trainding-1.webp"
                            title="SUITÓ"
                            quantity="32"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis....."
                        />
                        <Card
                            imageSrc="/assets/local-images/trainding-2.webp"
                            title="COSMOPOLIS"
                            quantity="8"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis......"
                        />
                        <Card
                            imageSrc="/assets/local-images/trainding-1.webp"
                            title="SUITÓ"
                            quantity="3"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis......"
                        />
                        <Card
                            imageSrc="/assets/local-images/trainding-1.webp"
                            title="SUITÓ"
                            quantity="16"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis......"
                        />
                        <Card
                            imageSrc="/assets/local-images/trainding-2.webp"
                            title="COSMOPOLIS"
                            quantity="34"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis......"
                        />
                        <Card
                            imageSrc="/assets/local-images/trainding-1.webp"
                            title="SUITÓ"
                            quantity="22"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis......"
                        />
                        <Card
                            imageSrc="/assets/local-images/trainding-2.webp"
                            title="COSMOPOLIS"
                            quantity="30"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis......"
                        />
                        <Card
                            imageSrc="/assets/local-images/trainding-1.webp"
                            title="SUITÓ"
                            quantity="10"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis......"
                        />
                        <Card
                            imageSrc="/assets/local-images/trainding-2.webp"
                            title="COSMOPOLIS"
                            quantity="8"
                            description="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis......"
                        />
                    </div>
                </div>
                <div className="justify-center text-center mt-16 mb-28">
                    <button className="bg-white hover:bg-black hover:text-white text-black border border-black cursor-pointer font-bold py-2 px-5 w-80">
                        SHOW MORE
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Collections;
