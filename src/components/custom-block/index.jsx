/** @format */

import React, { useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { IoIosArrowUp } from "react-icons/io";

const CustomBlock = () => {
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
                                    CUSTOM BLOCK
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
                    <div className="flex flex-col gap-5 text-sm ">
                        <p>
                            Custom CMS block displayed at the left sidebar on
                            the Catalog Page. Put your own content here: text,
                            html, images, media... whatever you like.
                        </p>
                        <p>
                            There are many similar sample content placeholders
                            across the store. All editable from admin panel.
                        </p>
                    </div>
                </AccordionBody>
            </Accordion>
        </section>
    );
};

export default CustomBlock;
