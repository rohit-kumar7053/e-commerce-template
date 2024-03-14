/** @format */

import React, { useState } from "react";
import { ImPlay2 } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

const VideoPopup = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-black w-3/5 h-3/4 relative">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/-it8niM3fRg?autoplay=1"
                    title="YouTube video player"
                    allowFullScreen
                    allow="autoplay"
                ></iframe>
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white bg-opacity-50 z-50">
                    <button
                        className="absolute top-12 right-60 p-1 mt-2 bg-black text-white"
                        onClick={onClose}
                    >
                        <RxCross2 className="h-6 w-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const VideoPlayer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="relative">
                <div
                    onClick={openPopup}
                    className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <ImPlay2 className="h-16 w-16 text-white" />
                </div>
            </div>
            {isPopupOpen && <VideoPopup onClose={closePopup} />}
        </div>
    );
};

export default VideoPlayer;
