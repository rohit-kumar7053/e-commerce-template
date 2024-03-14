/** @format */

import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Accordion, AccordionBody } from "@material-tailwind/react";

import { IoIosArrowUp } from "react-icons/io";

const PriceFilter = ({ onApply }) => {
    const [priceRange, setPriceRange] = useState([0, 2990]); // Initial price range

    const handleApplyClick = () => {
        onApply(priceRange[0], priceRange[1]);
    };

    const handleSliderChange = (value) => {
        setPriceRange(value);
    };
    const [isOpen, setIsOpen] = useState(false);

    const handleAlwaysOpenAccordion = () => {
        setIsOpen(!isOpen);
    };
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);

    const handleAlwaysOpenCategories = () => setAlwaysOpen((cur) => !cur);

    return (
        <section>
            <Accordion open={alwaysOpen}>
                <div onClick={handleAlwaysOpenCategories}>
                    <div className="py-1 my-3">
                        <div
                            onClick={handleAlwaysOpenAccordion}
                            className="flex justify-between items-center"
                        >
                            <div className="flex justify-between items-center text-center">
                                <h1 className="text-xl ">PRICE</h1>
                            </div>
                            <span
                                className={`cursor-pointer transition-transform ${
                                    isOpen ? "transform rotate-180" : ""
                                }`}
                            >
                                <IoIosArrowUp className="h-5 w-5" />
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="flex-grow border-t border-gray-800"></hr>
                <AccordionBody>
                    {" "}
                    <Slider
                        id="priceRange"
                        min={0}
                        max={2990}
                        value={priceRange}
                        onChange={handleSliderChange}
                        range
                        className="w-52"
                    />
                    <div className="flex justify-between text-center items-center text-sm text-gray-600 mt-4">
                        <div className="flex justify-between text-center items-center border border-black w-20 h-12 px-1 text-sm font-normal">
                            <span>$</span>
                            <span className="">{priceRange[0]}</span>
                        </div>
                        to
                        <div className="flex justify-between text-center items-center border border-black w-20 h-12 px-1 text-sm font-normal">
                            <span>$</span>
                            <span className="">{priceRange[1]}</span>
                        </div>
                    </div>
                    <button
                        onClick={handleApplyClick}
                        className="bg-black hover:bg-white hover:text-black text-white border border-black hover:border-black cursor-pointer font-bold text-sm py-3 mt-6 px-1 w-full"
                    >
                        APPLY
                    </button>
                </AccordionBody>
            </Accordion>
        </section>
    );
};

export default PriceFilter;
