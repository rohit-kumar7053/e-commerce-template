/** @format */
import React, { useState } from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
    HiOutlineHeart,
    HiFire,
    HiQuestionMarkCircle,
    HiPlus,
    HiOutlineChevronRight,
    HiOutlineChevronLeft,
} from "react-icons/hi";

const TrendingNow = (prop) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
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
    // const ButtonGroup = ({ next, previous, ...rest }) => {
    //     const {
    //         carouselState: { currentSlide },
    //     } = rest;
    //     return (
    //         <div className="carousel-button-group">
    //             <button
    //                 className={`${
    //                     currentSlide === 0 ? "disable" : ""
    //                 } left-custom-btn`}
    //                 onClick={() => previous()}
    //             />
    //             <button className="right-custom-btn" onClick={() => next()} />
    //         </div>
    //     );
    // };
    const ButtonGroup = ({ next, previous, ...rest }) => {
        const {
            carouselState: { currentSlide },
        } = rest;
        return (
            <div className="w-full h-0 absolute top-40 text-white">
                <div className="carousel-button-group text-4xl text-black">
                    <div className="flex justify-between items-center h-10 w-full">
                        <button
                            className={`${
                                currentSlide === 0 ? "disable" : ""
                            } bg-white border border-black rounded-full left-custom-btn`}
                            onClick={() => previous()}
                        >
                            <HiOutlineChevronLeft />
                        </button>
                        <button
                            className=" absolute right-8 bg-white border border-black rounded-full right-custom-btn"
                            onClick={() => next()}
                        >
                            <HiOutlineChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    const products = [
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image1.webp",
            hoverImage: "../src/assets/local-images/image2.webp",
            imagehoverbtnText: "Add To Cart",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image2.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            imagehoverbtnText: "Notify ME",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image3.webp",
            hoverImage: "../src/assets/local-images/image4.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image5.webp",
            hoverImage: "../src/assets/local-images/image7.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image13.webp",
            hoverImage: "../src/assets/local-images/image10.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image14.webp",
            hoverImage: "../src/assets/local-images/image12.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        // Add more product objects as needed
    ];

    return (
        <section>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full h-0.5 mx-14 bg-gray-600"></hr>
                <span className="absolute px-28 -translate-x-1/2 bg-white left-1/2 text-2xl font-bold tracking-wide text-center text-black ">
                    TRENDING NOW
                </span>
            </div>
            <a
                href="/Product"
                className="flex justify-center mt-5 underline font-thin text-sm text-stone-400"
            >
                View All
            </a>
            <div className="overflow-hidden mx-12">
                <div className="relative w-full bottom-0 left-0 mt-7">
                    <MultiCarousel
                        partialVisible={true}
                        autoPlay={false}
                        customTransition="transform 300ms ease-in-out"
                        infinite={true}
                        loop
                        renderButtonGroupOutside={true}
                        customButtonGroup={<ButtonGroup />}
                        arrows={false}
                        margin={5}
                        responsive={responsive}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="relative w-64 h-96 mb-48"
                            >
                                <div className="relative w-68 h-96 block gap-10 overflow-hidden transition-opacity duration-300 group">
                                    <img
                                        src={product.defaultImage}
                                        alt="default"
                                        className="absolute h-full w-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                                    />
                                    <img
                                        src={product.hoverImage}
                                        alt="hover"
                                        className="absolute h-full w-full object-cover transition-opacity opacity-0 group-hover:opacity-100 hover:transition-transform duration-1000 transform hover:scale-105"
                                    />
                                    <button className="absolute bottom-0 left-0 bg-white w-full hover:bg-black hover:text-white text-black font-bold py-2 px-4 border-2 border-black transition duration-500 opacity-0 group-hover:opacity-100">
                                        {product.imagehoverbtnText}
                                    </button>
                                </div>
                                <div className="w-full h-auto mb-4 mt-4 text-black">
                                    <h2 className="text-xs flex justify-center text-gray-500">
                                        {product.title}
                                    </h2>
                                    <div className="text-sm hover:underline underline-offset-4">
                                        <span className="block text-center">
                                            {" "}
                                            (Product {
                                                product.availProducts
                                            }) {product.description}
                                        </span>
                                    </div>
                                    <div className="flex gap-5 justify-center text-center mt-2">
                                        <div className="relative inline-block">
                                            <span className="absolute inset-x-0 top-1/2 h-0.5 bg-stone-500 transform -translate-y-1/2"></span>
                                            <span className="text-lg text-stone-400">
                                                {product.cutmoney}
                                            </span>
                                        </div>
                                        <span className="block font-bold text-red-600">
                                            {product.price}
                                        </span>
                                    </div>
                                    <div className="flex justify-center gap-2 pt-3">
                                        <img
                                            src="https://www.snitch.co.in/cdn/shop/products/Matteus1498.jpg?v=1663163076"
                                            alt="Your Image"
                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                        />
                                        <img
                                            src="https://www.snitch.co.in/cdn/shop/products/Matteus1498.jpg?v=1663163076"
                                            alt="Your Image"
                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                        />
                                        <img
                                            src="https://www.snitch.co.in/cdn/shop/products/Matteus1498.jpg?v=1663163076"
                                            alt="Your Image"
                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </MultiCarousel>
                </div>
            </div>
        </section>
    );
};

export default TrendingNow;
