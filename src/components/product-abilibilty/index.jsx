/** @format */

import React, { useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { IoIosArrowUp } from "react-icons/io";

const ProductAvailability = () => {
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
                                <h1 className="text-sm font-bold">
                                    AVAILABILITY
                                </h1>
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
                    <ul className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center text-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 m-1 border-gray-300 checked:bg-gray-800 checked:accent-black"
                            />
                            <li>In Stock(337)</li>
                        </div>
                        <div className="flex items-center text-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 m-1 border-gray-300 checked:bg-gray-800 checked:accent-black"
                            />
                            <li>Out of Stock(8)</li>
                        </div>
                    </ul>
                </AccordionBody>
            </Accordion>
        </section>
    );
};

export default ProductAvailability;
