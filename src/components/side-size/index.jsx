/** @format */

import React, { useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { IoIosArrowUp } from "react-icons/io";
import { LuChevronsUpDown } from "react-icons/lu";

const SideSize = () => {
    const [showMore, setShowMore] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [alwaysOpen, setAlwaysOpen] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);

    const sizeOptions = [
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium Small", value: "mdsm" },
        { label: "Medium", value: "md" },
        { label: "Medium Large", value: "mdlg" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
        { label: "2 Extra Large", value: "2xl" },
        { label: "3 Extra Large", value: "3xl" },
        { label: "4 Extra Large", value: "4xl" },
        { label: "5 Extra Large", value: "5xl" },
        { label: "6 Extra Large", value: "6xl" },
        { label: "7 Extra Large", value: "7xl" },
        { label: "8 Extra Large", value: "8xl" },
        { label: "9 Extra Large", value: "9xl" },
        { label: "10 Extra Large", value: "10xl" },
        { label: "11 Extra Large", value: "11xl" },
        { label: "12 Extra Large", value: "12xl" },
        { label: "13 Extra Large", value: "13xl" },
        { label: "14 Extra Large", value: "14xl" },
        // Additional size options
        { label: "15 Extra Large", value: "15xl" },
        { label: "16 Extra Large", value: "16xl" },
        { label: "17 Extra Large", value: "17xl" },
        { label: "18 Extra Large", value: "18xl" },
        { label: "19 Extra Large", value: "19xl" },
        { label: "20 Extra Large", value: "20xl" },
    ];

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleAlwaysOpenAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleAlwaysOpenCategories = () => {
        setAlwaysOpen((cur) => !cur);
    };

    const handleSizeSelect = (value) => {
        setSelectedSize(value);
        // Yaha par aap jo bhi size select karne ke baad karna chahte hain, wo code likh sakte hain.
    };

    return (
        <section>
            <style>
                {`
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
          .size-options {
            max-height: ${showMore ? "none" : "100px"};
            overflow-y: ${showMore ? "scroll" : "hidden"};
          }
        `}
            </style>
            <Accordion open={alwaysOpen}>
                <div onClick={handleAlwaysOpenCategories}>
                    <div className="py-1 my-3">
                        <div
                            onClick={handleAlwaysOpenAccordion}
                            className="flex justify-between items-center"
                        >
                            <div className="flex justify-between items-center text-center">
                                <h1 className="text-sm font-bold">SIZE</h1>
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
                    <div
                        className={`flex flex-wrap justify-center items-center text-center gap-2 h-${
                            showMore ? "full" : "20"
                        } overflow-scroll scrollbar-hidden`}
                        style={{ maxHeight: "400px" }}
                    >
                        {sizeOptions.map((option, index) => (
                            <button
                                key={index}
                                className={`p-1 border rounded hover:bg-gray-200 focus:outline-none ${
                                    selectedSize === option.value
                                        ? "bg-gray-200"
                                        : ""
                                }`}
                                onClick={() => handleSizeSelect(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                    <div className=" flex justify-start items-center text-center gap-1 mt-2">
                        <span className="hover:text-2xl text-sm">
                            <LuChevronsUpDown />
                        </span>
                        <div
                            className="text-sm text-gray-800 underline"
                            onClick={toggleShowMore}
                        >
                            {showMore ? "Show Less" : "Show ALL"}
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
        </section>
    );
};

export default SideSize;
