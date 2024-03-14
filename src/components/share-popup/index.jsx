/** @format */

import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoShareAndroid } from "react-icons/go";

// Generic Pop-up Component
function SharePopup({ isOpen, closePopup, content }) {
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
function ShareMainPopup() {
    const [isShareOpen, setShareOpen] = useState(false);

    const openSharePopup = () => {
        setShareOpen(true);
    };

    const closeSharePopup = () => {
        setShareOpen(false);
    };

    return (
        <section>
            {/* Share Section  */}
            <div>
                <div
                    onClick={openSharePopup}
                >
                    <button className="flex items-center w-14 h-14 justify-center rounded-full font-bold">
                        <div className="text-4xl">
                            <GoShareAndroid />
                        </div>
                    </button>
                </div>
                <SharePopup
                    isOpen={isShareOpen}
                    closePopup={closeSharePopup}
                    content={{
                        title: "This is a Share pop-up!",
                        body: "Share your favorite items with friends.",
                    }}
                />
            </div>
        </section>
    );
}

export default ShareMainPopup;
