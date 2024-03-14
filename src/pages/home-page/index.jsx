/** @format */

import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Ellafeatured from "../../components/ella-featured";
import Ellainsta from "../../components/ella-instagram";
import Brendpartner from "../../components/brend-partner";
import TrendingNow from "../../components/trending-now";
import NewArrivals from "../../components/new-arrivals";

const Home = () => {
    return (
        <section>
            {/* Header Section */}
            <header>
                <Navbar />
            </header>
            {/* Banner Section Start */}
            <div className="relative w-full h-full">
                <img
                    src="/assets/local-images/banner-1.jpg"
                    alt="Banner Image"
                    className="w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-center px-8">
                    <h1 className="text-black text-4xl font-bold tracking-wider mt-5">
                        COSMOPOLIS
                    </h1>
                    <span className="flex flex-col justify-center items-center font-black text-2xl">
                        ____
                    </span>
                    <p className="text-black text-right max-w-md m-4 text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt labore et dolore magna
                        aliqua ut labore et dolore
                    </p>
                    <button className="font-bold py-2 px-4 w-48 mt-8 bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black">
                        Shop Now
                    </button>
                </div>
            </div>
            {/* Top Categorys Start */}
            <div className="page1-container pb-5 h-full">
                <div className="flex justify-center gap-7 mt-8 mx-12 ">
                    {/* Category 1  */}
                    <div className="relative w-96 h-48 overflow-hidden bg-black">
                        <img
                            src="/assets/local-images/cat1.avif"
                            alt=""
                            className="w-full h-48 mb-4 object-cover transition-transform duration-700 transform hover:scale-110"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-50 text-lg font-bold hover:underline underline-offset-8 ">
                            Top Category
                        </div>
                    </div>

                    {/* Category 2  */}
                    <div className="relative w-96 h-48 overflow-hidden bg-black">
                        <img
                            src="/assets/local-images/cat2.avif"
                            alt=""
                            className="w-full h-48 mb-4 object-cover transition-transform duration-700 transform hover:scale-110"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-50 text-lg font-bold hover:underline underline-offset-8 ">
                            Top Category
                        </div>
                    </div>
                    {/* Category 3  */}
                    <div className="relative w-96 h-48 overflow-hidden bg-black">
                        <img
                            src="/assets/local-images/cat3.avif"
                            alt=""
                            className="w-full h-48 mb-4 object-cover transition-transform duration-700 transform hover:scale-110"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-50 text-lg font-bold hover:underline underline-offset-8 ">
                            Top Category
                        </div>
                    </div>
                </div>
            </div>
            {/* NEW ARRIVALS Section */}
            <div className="page2-container pb-5 h-full">
                <NewArrivals />
            </div>
            {/* Second Banner and Trending Now Section */}
            <div className="page3-container pb-5 h-full">
                <div className="relative w-full my-14">
                    <img
                        src="/assets/local-images/banner-2.webp"
                        alt="Banner Image"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 h-full flex flex-col justify-center items-center px-8">
                        <h1 className="text-black text-4xl font-bold mb-4">
                            METROPÓLIS
                        </h1>
                        <p className="text-black text-left max-w-md mb-4 text-sm leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt labore et
                            dolore magna aliqua ut labore et dolore
                        </p>
                        <button className="font-bold py-2 px-4 w-48 mt-8 bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black">
                            Shop Now
                        </button>
                    </div>
                </div>
                {/* TRENDING NOW Section */}
                <TrendingNow />
            </div>
            {/* FEATURED ON ELLA Section */}
            <div className="page4-container pb-5 mx-12 h-full">
                <Ellafeatured />
            </div>
            {/* Brendpartner and Ellainsta Section */}
            <div className="page5-container h-full">
                <div className="mt-14">
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-900"></hr>
                    <Brendpartner />
                </div>
                <div className="bg-stone-100">
                    <Ellainsta />
                </div>
            </div>
            {/* Footer Section */}
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Home;
