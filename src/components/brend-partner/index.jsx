/** @format */

import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brendpartner = () => {
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
        <section className="pl-10">
            <MultiCarousel
                partialVisible={true}
                autoPlay={true}
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
                <div className="bg-white p-4 text-center justify-center w-52 h-28">
                    <img
                        src="/assets/local-images/brendlogo-1.webp"
                        alt=""
                        className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-105"
                    />
                </div>

                <div className="bg-white p-4 text-center justify-center w-52 h-28">
                    <img
                        src="/assets/local-images/brendlogo-2.webp"
                        alt=""
                        className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-105"
                    />
                </div>
                <div className="bg-white p-4 text-center justify-center w-52 h-28">
                    <img
                        src="/assets/local-images/brendlogo-3.webp"
                        alt=""
                        className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-105"
                    />
                </div>
                <div className="bg-white p-4 text-center justify-center w-52 h-28">
                    <img
                        src="/assets/local-images/brendlogo-4.webp"
                        alt=""
                        className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-105"
                    />
                </div>
                <div className="bg-white p-4 text-center justify-center w-52 h-28">
                    <img
                        src="/assets/local-images/brendlogo-5.webp"
                        alt=""
                        className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-105"
                    />
                </div>
                <div className="bg-white p-4 text-center justify-center w-52 h-28">
                    <img
                        src="/assets/local-images/brendlogo-5.webp"
                        alt=""
                        className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-105"
                    />
                </div>
                <div className="bg-white p-4 text-center justify-center w-52 h-28">
                    <img
                        src="/assets/local-images/brendlogo-5.webp"
                        alt=""
                        className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-105"
                    />
                </div>
            </MultiCarousel>
        </section>
    );
};

export default Brendpartner;
