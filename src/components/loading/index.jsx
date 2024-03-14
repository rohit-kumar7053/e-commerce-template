/** @format */

import React from "react";
import "../../styling/loader.css"

const Loader = () => {
    return (
        <section>
            <div class="demo-container w-full max-w-3xl mx-auto">
                <div class="progress-bar bg-gray-200 h-4">
                    <div class="progress-bar-value bg-black h-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Loader;
