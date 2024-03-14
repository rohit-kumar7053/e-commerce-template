/** @format */

import React, { useState, useEffect } from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHashtag } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import axios from "axios";

const Ellainsta = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
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
            <div className="carousel-button-group">
                <button
                    className={`${
                        currentSlide === 0 ? "disable" : ""
                    } left-custom-btn`}
                    onClick={() => previous()}
                />
                <button className="right-custom-btn" onClick={() => next()} />
            </div>
        );
    };

    return (
        <section>
            <div className="py-14">
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex justify-center gap-4">
                        <span className="text-2xl pt-1">
                            <IoLogoInstagram />
                        </span>
                        <div className="flex justify-center text-center">
                            <div className="font-bold text-xl mt-1">
                                <FaHashtag />
                            </div>
                            <div className="font-bold text-xl">
                                ELLA ON INSTAGRAM
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-sm">
                        Phasellus lorem malesuada ligula pulvinar commodo
                        maecenas
                    </p>
                </div>
            </div>
            <section className="m-3 px-4 h-64">
                <MultiCarousel
                    partialVisible={true}
                    autoPlay={false}
                    customTransition="transform 300ms ease-in-out"
                    infinite={true}
                    loop
                    renderButtonGroupOutside={true}
                    customButtonGroup={<ButtonGroup />}
                    arrows={true}
                    margin={5}
                    nav
                    responsive={responsive}
                >
                    <div className="relative w-56 h-64 overflow-hidden">
                        <img
                            src="../src/assets/local-images/insta2.jpg"
                            alt=""
                            className=" w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                        />
                    </div>
                    <div className="relative w-56 h-64 overflow-hidden">
                        <img
                            src="../src/assets/local-images/insta1.avif"
                            alt=""
                            className=" w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                        />
                    </div>
                    <div className="relative w-56 h-64 overflow-hidden">
                        <img
                            src="../src/assets/local-images/insta3.avif"
                            alt=""
                            className=" w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                        />
                    </div>
                    <div className="relative w-56 h-64 overflow-hidden">
                        <img
                            src="../src/assets/local-images/insta4.avif"
                            alt=""
                            className=" w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                        />
                    </div>
                    <div className="relative w-56 h-64 overflow-hidden">
                        <img
                            src="../src/assets/local-images/insta5.avif"
                            alt=""
                            className=" w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                        />
                    </div>
                   
                </MultiCarousel>
            </section>
            <div className="justify-center text-center mt-5 pb-20">
                <button className="bg-[#232323] hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 px-4 w-56">
                    VIEW GALLERY
                </button>
            </div>
        </section>
    );
};

export default Ellainsta;
