/** @format */

import React from "react";

const Badge = () => {
    return (
        <div className="flex flex-col gap-y-0.5 justify-center items-center">
            <div className="bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
                Sale
            </div>
            <div className="h-0 w-0 border-x-4 border-x-transparent border-t-[6px] border-t-red-500"></div>
        </div>
    );
};

export default Badge;
