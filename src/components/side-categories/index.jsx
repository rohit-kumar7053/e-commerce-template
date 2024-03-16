/** @format */

import React, { useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleAlwaysOpenAccordion = () => {
        setIsOpen(!isOpen);
    };
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);
    const handleAlwaysOpenCategories = () => setAlwaysOpen((cur) => !cur);
    return (
        //    Categories
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
                                    CATEGORIES
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
                    <div className="py-1">
                        <ul className="flex flex-col gap-4 text-sm ">
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 ease-in-out transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Cosmopolis</li>
                            </div>
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Suitó</li>
                            </div>
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Milancélos</li>
                            </div>
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Blazéro</li>
                            </div>
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Glamos</li>
                            </div>
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Metropolis</li>
                            </div>
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Valkyrio</li>
                            </div>
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Scarvéro</li>
                            </div>
                            <div className="flex items-center relative group">
                                <span className="absolute left-0 opacity-0 transition-opacity duration-300 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                                    <IoIosArrowForward />
                                </span>
                                <li className="group-hover:pl-5">Congué</li>
                            </div>
                        </ul>
                    </div>
                </AccordionBody>
            </Accordion>
        </section>
    );
};

export default Categories;
