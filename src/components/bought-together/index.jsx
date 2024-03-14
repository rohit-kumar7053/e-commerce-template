/** @format */

import React, { useState, useEffect } from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
    HiPlus,
    HiOutlineChevronRight,
    HiOutlineChevronLeft,
} from "react-icons/hi";

const Boughttogether = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 40,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 25,
        },
    };
    const ButtonGroup = ({ next, previous, ...rest }) => {
        const {
            carouselState: { currentSlide },
        } = rest;
        return (
            <div className="flex justify-between items-center w-3/4 pl-5 pr-24 absolute bottom-100 left-10 right-0 top-0 text-white ">
                <h1 className="text-black font-semibold text-2xl py-8">
                    Frequently Bought Together
                </h1>

                <div className="carousel-button-group text-4xl bg-gray-100 text-black">
                    <button
                        className={`${
                            currentSlide === 0 ? "disable" : ""
                        } left-custom-btn`}
                        onClick={() => previous()}
                    >
                        <HiOutlineChevronLeft />
                    </button>
                    <button className="right-custom-btn" onClick={() => next()}>
                        <HiOutlineChevronRight />
                    </button>
                </div>
            </div>
        );
    };

    // ye Check Box K Liye hai
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <section className="container block text-center items-center justify-center">
            <div className="flex justify-between items-center px-12 bg-stone-100 relative">
                <div className="h-full w-3/4 bg-stone-100">
                    <div className="bg-stone-100 w-full pt-24">
                        <MultiCarousel
                            partialVisible={true}
                            autoPlay={true}
                            customTransition="transform 300ms ease-in-out"
                            infinite={true}
                            loop
                            renderButtonGroupOutside={true}
                            customButtonGroup={<ButtonGroup />}
                            arrows={false}
                            margin={5}
                            responsive={responsive}
                        >
                            {/* Additional content */}
                            <div className="flex justify-center items-center text-center">
                                <div className="w-48 p-4 mx-1 border-2 bg-white">
                                    <img
                                        src="/assets/local-images/image1.webp"
                                        alt="Image 1"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="flex flex-col pt-3">
                                        <div className="flex items-center text-start">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 m-1 border-gray-300 checked:bg-gray-800 checked:accent-black"
                                                checked={isChecked}
                                                onChange={handleCheckboxClick}
                                            />
                                            <p className="flex justify-start text-start text-sm">
                                                (Product 16) Sample-Clothing And
                                                Accessory Boutiques For Sale
                                            </p>
                                        </div>

                                        <span className="text-base font-bold mr-12 my-2">
                                            $286.00
                                        </span>
                                        <button className="cursor-pointer font-thin py-2 mt-2 w-40 bg-white hover:bg-black hover:text-white text-black border border-black">
                                            Choose Options
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <HiPlus />
                                </span>
                            </div>
                            <div className="flex justify-center items-center text-center">
                                <div className="w-48 p-4 mx-1 border-2 bg-white">
                                    <img
                                        src="/assets/local-images/image1.webp"
                                        alt="Image 1"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="flex flex-col pt-3">
                                        <div className="flex items-center text-start">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 m-1 border-gray-300 checked:bg-gray-800 checked:accent-black"
                                                checked={isChecked}
                                                onChange={handleCheckboxClick}
                                            />
                                            <p className="flex justify-start text-start text-sm">
                                                (Product 16) Sample-Clothing And
                                                Accessory Boutiques For Sale
                                            </p>
                                        </div>

                                        <span className="text-base font-bold mr-12 my-2">
                                            $286.00
                                        </span>
                                        <button className="cursor-pointer font-thin py-2 mt-2 w-40 bg-white hover:bg-black hover:text-white text-black border border-black">
                                            Choose Options
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <HiPlus />
                                </span>
                            </div>
                            <div className="flex justify-center items-center text-center">
                                <div className="w-48 p-4 mx-1 border-2 bg-white">
                                    <img
                                        src="/assets/local-images/image1.webp"
                                        alt="Image 1"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="flex flex-col pt-3">
                                        <div className="flex items-center text-start">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 m-1 border-gray-300 checked:bg-gray-800 checked:accent-black"
                                                checked={isChecked}
                                                onChange={handleCheckboxClick}
                                            />
                                            <p className="flex justify-start text-start text-sm">
                                                (Product 16) Sample-Clothing And
                                                Accessory Boutiques For Sale
                                            </p>
                                        </div>

                                        <span className="text-base font-bold mr-12 my-2">
                                            $286.00
                                        </span>
                                        <button className="cursor-pointer font-thin py-2 mt-2 w-40 bg-white hover:bg-black hover:text-white text-black border border-black">
                                            Choose Options
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <HiPlus />
                                </span>
                            </div>
                            <div className="flex justify-center items-center text-center">
                                <div className="w-48 p-4 mx-1 border-2 bg-white">
                                    <img
                                        src="/assets/local-images/image1.webp"
                                        alt="Image 1"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="flex flex-col pt-3">
                                        <div className="flex items-center text-start">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 m-1 border-gray-300 checked:bg-gray-800 checked:accent-black"
                                                checked={isChecked}
                                                onChange={handleCheckboxClick}
                                            />
                                            <p className="flex justify-start text-start text-sm">
                                                (Product 16) Sample-Clothing And
                                                Accessory Boutiques For Sale
                                            </p>
                                        </div>

                                        <span className="text-base font-bold mr-12 my-2">
                                            $286.00
                                        </span>
                                        <button className="cursor-pointer font-thin py-2 mt-2 w-40 bg-white hover:bg-black hover:text-white text-black border border-black">
                                            Choose Options
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <HiPlus />
                                </span>
                            </div>
                            <div className="flex justify-center items-center text-center">
                                <div className="w-48 p-4 mx-1 border-2 bg-white">
                                    <img
                                        src="/assets/local-images/image1.webp"
                                        alt="Image 1"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="flex flex-col pt-3">
                                        <div className="flex items-center text-start">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 m-1 border-gray-300 checked:bg-gray-800 checked:accent-black"
                                                checked={isChecked}
                                                onChange={handleCheckboxClick}
                                            />
                                            <p className="flex justify-start text-start text-sm">
                                                (Product 16) Sample-Clothing And
                                                Accessory Boutiques For Sale
                                            </p>
                                        </div>

                                        <span className="text-base font-bold mr-12 my-2">
                                            $286.00
                                        </span>
                                        <button className="cursor-pointer font-thin py-2 mt-2 w-40 bg-white hover:bg-black hover:text-white text-black border border-black">
                                            Choose Options
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <HiPlus />
                                </span>
                            </div>
                            <div className="flex justify-center items-center text-center">
                                <div className="w-48 p-4 mx-1 border-2 bg-white">
                                    <img
                                        src="/assets/local-images/image1.webp"
                                        alt="Image 1"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="flex flex-col pt-3">
                                        <div className="flex items-center text-start">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 m-1 border-gray-300 checked:bg-gray-800 checked:accent-black"
                                                checked={isChecked}
                                                onChange={handleCheckboxClick}
                                            />
                                            <p className="flex justify-start text-start text-sm">
                                                (Product 16) Sample-Clothing And
                                                Accessory Boutiques For Sale
                                            </p>
                                        </div>

                                        <span className="text-base font-bold mr-12 my-2">
                                            $286.00
                                        </span>
                                        <button className="cursor-pointer font-thin py-2 mt-2 w-40 bg-white hover:bg-black hover:text-white text-black border border-black">
                                            Choose Options
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <HiPlus />
                                </span>
                            </div>
                        </MultiCarousel>
                    </div>
                </div>
                {/* Last Card  */}
                <div className="flex flex-col text-center items-center h-80 p-4 ml-10 mt-24">
                    <h6 className="text-sm">Price Total:</h6>
                    <div className="flex gap-3 justify-center text-center mt-2">
                        <div className="relative inline-block">
                            <span className="absolute inset-x-0 top-1/2 h-0.5 bg-stone-500 transform -translate-y-1/2"></span>
                            <span className="text-stone-400 text-2xl">
                                $742.98
                            </span>
                        </div>
                        <span className="block font-bold text-red-600 text-2xl">
                            $668.68
                        </span>
                    </div>
                    <button className="cursor-pointer font-bold py-3 mt-4 px-5 w-48 bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black">
                        Add All TO Cart
                    </button>
                    <p className="w-48 pl-5 mt-3">
                        Get a 10% discount buying these products together
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Boughttogether;
