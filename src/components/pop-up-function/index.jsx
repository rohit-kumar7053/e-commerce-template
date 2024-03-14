/** @format */

import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
// Generic Pop-up Component
function PopUp({ isOpen, closePopup, content }) {
    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isOpen ? "hidden" : "auto";
        };

        handleBodyOverflow();

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white p-6 shadow-lg">
                        <RxCross2
                            className="absolute top-0 right-0 -mt-2 -mr-2 p-2 text-white bg-black text-4xl cursor-pointer"
                            onClick={closePopup}
                        />
                        <h2>{content.title}</h2>
                        <p>{content.body}</p>
                    </div>
                </div>
            )}
        </>
    );
}

// Main Pop-up Component
function Popup() {
    const [isSizeOpen, setSizeOpen] = useState(false);
    const [isColorOpen, setColorOpen] = useState(false);

    const openSizePopup = () => {
        setSizeOpen(true);
    };

    const openColorPopup = () => {
        setColorOpen(true);
    };

    const closeSizePopup = () => {
        setSizeOpen(false);
    };

    const closeColorPopup = () => {
        setColorOpen(false);
    };


    return (
        <section>
            <div className="flex text-center items-center gap-5">
                {/* Size Section */}
                <div>
                    <div
                        onClick={openSizePopup}
                        className="flex justify-between text-center items-center"
                    >
                        <div className="h-16 w-16">
                            <img
                                src="../src/assets/local-images/size-ruler.png"
                                alt=""
                                className="object-cover h-full w-full mr-4"
                            />
                        </div>
                        <div className="text-sm">Size Guide</div>
                    </div>
                    <PopUp
                        isOpen={isSizeOpen}
                        closePopup={closeSizePopup}
                        content={{
                            title: "This is a Size pop-up!",
                            body: "Hello",
                        }}
                    />
                </div>
                {/* Color Section  */}
                <div>
                    <div
                        onClick={openColorPopup}
                        className="flex justify-between text-center items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                src="../src/assets/local-images/color-wheel.jpg"
                                alt=""
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="text-sm">Compare Color</div>
                    </div>
                    <PopUp
                        isOpen={isColorOpen}
                        closePopup={closeColorPopup}
                        content={{
                            title: "This is a Color pop-up!",
                            body: "Good Morning",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Popup;
