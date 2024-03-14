/** @format */

import React, { useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { IoIosArrowUp} from "react-icons/io";

const SideFeaturedProducts = () => {
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
                                    FEATURED PRODUCTS
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
                    <div className="flex flex-col gap-5 text-sm mb-5 ">
                        <img
                            src="../src/assets/local-images/blog-sidebar-1.avif"
                            alt=""
                        />
                        <img
                            src="../src/assets/local-images/blog-sidebar-2.avif"
                            alt=""
                        />
                    </div>
                </AccordionBody>
            </Accordion>
        </section>
    );
};

export default SideFeaturedProducts;
