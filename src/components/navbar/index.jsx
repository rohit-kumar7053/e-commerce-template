/** @format */

import React from "react";

const Navbar = (props) => {
    return (
        <section>
            <body className="bg-black font-bold antialiased bg-no-repeat text-white">
                <header className="container px-4 py-2 flex items-center justify-between w-full">
                    {/* <a href="#" className="font-bold text-white text-xl">
                        LOGO
                    </a> */}
                    <nav>
                        <ul className="flex items-center justify-center gap-3 ml-20 font-semibold">
                            {/* THEME DEMO */}
                            <li className="group px-3 py-2">
                                <button
                                    className="hover:opacity-50 cursor-default "
                                    aria-haspopup="true"
                                >
                                    THEME DEMO
                                </button>
                                <div className="absolute top-6 left-0 right-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
                                    <div className="relative top-3 py-6 h-96 bg-white shadow-xl">
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-4 overflow-hidden h-80 px-12  overflow-y-scroll">
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        HOMEPAGES
                                                    </h2>
                                                    <ul className="mt-3 text-xs text-gray-500 ">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 01 -
                                                                Classic
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 02 - Trendy
                                                                StyleHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 03 - In
                                                                Vogue
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 04 - High
                                                                FashionHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 05 -
                                                                Surfing
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 06 -
                                                                SuperMarketHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 07 -
                                                                ElectronicsHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 08 - Large
                                                                Catalogs
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 09 - Pet
                                                                SuppliesHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 10 -
                                                                Jewelry
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 11 - Health
                                                                & Beauty
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 09 - Pet
                                                                SuppliesHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 12 - Men
                                                                Fashion
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 13 - Winter
                                                                Sport
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 14 -
                                                                Automotive 1
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        HOMEPAGES
                                                    </h2>
                                                    <ul className="mt-3 text-xs text-gray-500">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 15 -
                                                                Automotive 2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 16 - Games
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 17 - Gym
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 18 - Shoes
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 19 -
                                                                Swimwear 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 20 -
                                                                Furniture
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 21 - Yoga
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 22 - Eyes
                                                                Wears
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 23 - Plant+
                                                                Garden
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 24 -
                                                                Bicycle
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 25 -
                                                                Swimwear 2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 26 -
                                                                Bagratica
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 27 - Men
                                                                Fashion 02
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 28 - Single
                                                                Product
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        THEME HIGHLIGHTS
                                                    </h2>
                                                    <ul className="mt-3 text-xs text-gray-500">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Shopify OS 2.0
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                42+ Unique
                                                                Sections
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Sections On
                                                                Every Page
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Section Groups
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Multiple Headers
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Multiple Footers
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Powerful
                                                                Configuration
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Premium Features
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Lifetime Free
                                                                Updates
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product Video On
                                                                Hover
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Dynamic Browser
                                                                Tab
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Animated Cursor
                                                                Effects
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Home 12 - Men
                                                                Fashion
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Image Behavior
                                                                Effects
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                RTL Support
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        HIGHLIGHTED FEATURES
                                                    </h2>
                                                    <ul className="mt-3 text-xs text-gray-500">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Enhanced Instant
                                                                Search
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Multiple
                                                                Currencies
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Multiple
                                                                Languages
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Ask An Expert
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Shipping
                                                                Thresholds
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Side Cart Popup
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Login Popup
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Image Resize
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Quick View
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Sticky Header
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Marquee Function
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                GDPR Cookie
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Recent Sales
                                                                Popup (Fake)
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* SHOP */}
                            <li className="group px-3 py-2">
                                <button
                                    className="hover:opacity-50 cursor-default "
                                    aria-haspopup="true"
                                >
                                    SHOP
                                </button>
                                <div className="absolute top-6 left-0 right-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
                                    <div className="relative top-3 px-12 py-6 h-96 bg-white shadow-xl">
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-4 overflow-hidden ">
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-sm">
                                                        COLLECTION LIST PAGES
                                                    </h2>
                                                    <ul className="mt-3 text-xs">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Collection List
                                                                01
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Collection List
                                                                02
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Collection List
                                                                03
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Collection List
                                                                04
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Collection List
                                                                05
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Collection
                                                                Detail 01
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Collection
                                                                Detail 02
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-sm">
                                                        COLLECTION PAGES
                                                    </h2>
                                                    <ul className="mt-3 text-xs">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 01 - Left
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 02 - No
                                                                Sidebar
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 03 -
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 04 -
                                                                Masonry
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 05 - With
                                                                Banners
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 06 -
                                                                Express Order
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-sm">
                                                        HIGHLIGHTED FEATURES
                                                    </h2>
                                                    <ul className="mt-3 text-xs">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Dynamic
                                                                Filtering
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Tags Filtering
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Horizontal
                                                                Filter
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Vertical Filter
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product Compare
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Ajax Infinite
                                                                Scroll
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Pagination
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                No Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Breadcrumb
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-sm">
                                                        HIGHLIGHTED FEATURES
                                                    </h2>
                                                    <ul className="mt-3 text-xs">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Left Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Right Sidebar
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Sub Collections
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                List View
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Grid View
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Grid 2 Columns
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Grid 3 Columns
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Grid 4 Columns
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Grid 5 Columns
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* PRODUCTS */}
                            <li className="group px-3 py-2">
                                <button
                                    className="hover:opacity-50 cursor-default "
                                    aria-haspopup="true"
                                >
                                    PRODUCTS
                                </button>
                                <div className="absolute top-6 left-0 right-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                                    <div className="relative top-3 py-6 px-12 bg-white shadow-xl">
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-5 gap-6">
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        PRODUCT PAGES
                                                    </h2>
                                                    <ul className="mt-3 text-xs">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 01 -
                                                                Default
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 02 - Full
                                                                Width
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 03 - Grid
                                                                View
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 04 -
                                                                Slider
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 05 -
                                                                Gallery
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 06 - Left
                                                                Thumb
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 07 -
                                                                Right Thumb
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 08 - Left
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Layout 09 -
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        PRODUCT FEATURES
                                                    </h2>
                                                    <ul className="mt-3 text-xs">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Bundle -
                                                                UpsellHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Hot Stock
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Sticky Add To
                                                                Cart
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Notify Me (Out
                                                                Of Stock)Hot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Ask An Expert
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Variant Image
                                                                GroupedHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Trust Badge
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Delivery
                                                                Information
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        PRODUCT FEATURES
                                                    </h2>
                                                    <ul className="mt-3 text-xs ">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Sold In Last
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Color
                                                                ComparisonHot
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product Swatches
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product Select
                                                                Options
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Pre-Order
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product 3D, AR
                                                                Models
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Terms And
                                                                Conditions
                                                                Checkbox
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Variant
                                                                Metafield
                                                                Description
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Variant
                                                                Metafield
                                                                Property
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        PRODUCT FEATURES
                                                    </h2>
                                                    <ul className="mt-3 text-xs text-gray-500">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product VideoHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Size Chart
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Dynamic Checkout
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product
                                                                Countdown
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Custom Content
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Custom
                                                                OptionsHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product ComboHot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Product
                                                                Complementary
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Auto Discount
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h2 className="uppercase tracking-wider text-black font-bold text-xs">
                                                        PRODUCT FEATURES
                                                    </h2>
                                                    <ul className="mt-3 text-xs text-gray-500">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Custom Product
                                                                Tabs
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Vertical Product
                                                                Tab
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Horizontal
                                                                Product Tab
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Social Share
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Related Products
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Recently Viewed
                                                                Products
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Recently Viewed
                                                                Products
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Local Pick Up
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                            >
                                                                Custom Label
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* BLOG */}
                            <li className="relative group px-3 py-2">
                                <button
                                    className="hover:opacity-50 cursor-default"
                                    aria-haspopup="true"
                                >
                                    BLOG
                                </button>
                                <div className="absolute lg:-left-2 top-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                                    <div className="relative px-6 py-1 bg-white shadow-xl w-60">
                                        <div className="relative z-10">
                                            <ul className="text-xs">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Blog Default
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Blog Simple
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Blog Full Width
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-2"
                                                    >
                                                        Blog Masonry
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Blog List
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Blog Post Default
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Blog Post With Products
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* PAGES */}
                            <li className="relative group px-3 py-2">
                                <button
                                    className="hover:opacity-50 cursor-default"
                                    aria-haspopup="true"
                                >
                                    PAGES
                                </button>
                                <div className="absolute lg:-left-2 top-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                                    <div className="relative top-3 px-3 py-2 w-60 bg-white shadow-xl">
                                        <div className="relative z-10">
                                            <ul className="mt-3 text-xs">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        RTL Layout Hot
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        About Us
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Brands
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-2"
                                                    >
                                                        Contact Us
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Faqs
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Landing Pages
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Lookbook
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Portfolio
                                                    </a>
                                                </li>
                                                <hr class="w-52 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                    >
                                                        Wishlist
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* NEW IN */}
                            <li className="group px-3 py-2">
                                <button
                                    className="hover:opacity-50 cursor-default"
                                    aria-haspopup="true"
                                >
                                    NEW IN
                                </button>
                                <div className="absolute top-7 left-0 right-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
                                    <div className="relative top-2 bg-white shadow-xl">
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-center text-start gap-20 px-12 py-2 overflow-y-scroll">
                                                <div className="grid grid-cols-3 gap-6 mt-6 w-1/2 h-96">
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LOREM DORUS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Dincidunteros
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Loremous
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Comodianos
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Gravidas
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Montemous
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            MILANCELOS LANOS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Dincidunteros
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Nectellus
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Solutmades
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Loremous
                                                                    Comodous
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Namdos
                                                                    Hempus
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LYNN COSMOPOLIS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Bibendumetos
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Pellentes
                                                                    Habitanto
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Senectus
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Consequatod
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Scelerisque
                                                                    Yurnas
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LYNN COSMOPOLIS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Pellentes
                                                                    Habitanto
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Senectus
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Consequatod
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Gravidas
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Scelerisque
                                                                    Yurnas
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LOREM DORUS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Dincidunteros
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Loremous
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Comodianos
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Gravidas
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Montemous
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LOREM DORUS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Dincidunteros
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Loremous
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Comodianos
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Gravidas
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Montemous
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between w-1/2">
                                                    <div className="">
                                                        <img
                                                            src="../src/assets/local-images/blog-sidebar-2.avif"
                                                            alt=""
                                                            srcset=""
                                                        />
                                                    </div>
                                                    <img
                                                        src="../src/assets/local-images/blog-sidebar-2.avif"
                                                        alt=""
                                                        srcset=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* TREND */}
                            <li className="group px-3 py-2">
                                <button
                                    className="hover:opacity-50 cursor-default"
                                    aria-haspopup="true"
                                >
                                    TREND
                                </button>
                                <div className="absolute top-6 left-0 right-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
                                    <div className="relative top-3 py-8 px-12 bg-white shadow-xl overflow-y-scroll">
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-center text-start gap-20 h-96">
                                                <div className="grid grid-cols-3 gap-6 mt-6 w-1/2">
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LOREM DORUS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Dincidunteros
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Loremous
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Comodianos
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Gravidas
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Montemous
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            MILANCELOS LANOS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Dincidunteros
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Nectellus
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Solutmades
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Loremous
                                                                    Comodous
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Namdos
                                                                    Hempus
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LYNN COSMOPOLIS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Bibendumetos
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Pellentes
                                                                    Habitanto
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Senectus
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Consequatod
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Scelerisque
                                                                    Yurnas
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LYNN COSMOPOLIS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Pellentes
                                                                    Habitanto
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Senectus
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Consequatod
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Gravidas
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Scelerisque
                                                                    Yurnas
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LOREM DORUS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Dincidunteros
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Loremous
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Comodianos
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Gravidas
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Montemous
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-black font-bold text-xs">
                                                            LOREM DORUS
                                                        </p>
                                                        <ul className="mt-3 text-xs text-gray-500">
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Dincidunteros
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Loremous
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Comodianos
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Gravidas
                                                                </a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                                >
                                                                    Montemous
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end w-1/2 h-96">
                                                    <div className="flex flex-col justify-center items-center text-center gap-4">
                                                        <div className="relative w-48 h-48 overflow-hidden bg-black">
                                                            <img
                                                                src="../src/assets/local-images/blog-sidebar-1.avif"
                                                                alt=""
                                                                className="w-full h-48 object-cover transition-transform duration-700 transform hover:scale-110"
                                                            />
                                                        </div>
                                                        <div className="relative w-48 h-44 overflow-hidden bg-black">
                                                            <img
                                                                src="../src/assets/local-images/mega-menu-2.avif"
                                                                alt=""
                                                                className="w-full h-44 object-cover transition-transform duration-700 transform hover:scale-110"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="relative w-60 h-full overflow-hidden bg-black">
                                                        <img
                                                            src="../src/assets/local-images/mega-menu-1.avif"
                                                            alt=""
                                                            className="w-full h-96 object-cover transition-transform duration-700 transform hover:scale-110"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* COLLECTIONS */}
                            <li className="px-3 py-2 group">
                                <button
                                    className="hover:opacity-50 cursor-default"
                                    aria-haspopup="true"
                                >
                                    COLLECTIONS
                                </button>
                                <div className="absolute top-9 left-0 right-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
                                    <div className="relative py-3 px-12 bg-white h-96 shadow-xl">
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-5 gap-6">
                                                {/* Card-1 */}
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="block p-2 -mx-2 mb-3 text-xs hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600"
                                                    >
                                                        LOREM DE DORUS
                                                    </a>
                                                    <div className="relative w-48 h-28 overflow-hidden bg-black">
                                                        <img
                                                            src="../src/assets/local-images/blog1.jpg"
                                                            alt=""
                                                            className="w-full h-48 mb-4 object-cover transition-transform duration-700 transform hover:scale-110"
                                                        />
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-50 text-lg font-bold hover:underline underline-offset-8 ">
                                                            Dorus
                                                        </div>
                                                    </div>

                                                    <ul className="flex flex-col justify-center items-start mt-3 text-sm">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Dincidunteros
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Nectellus
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Solutmades
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Loremous
                                                                Comodous
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Namdos Hempus
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* Card-2 */}
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="block p-2 -mx-2 mb-3 text-xs hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600"
                                                    >
                                                        LOREM DE DORUS
                                                    </a>
                                                    <div className="relative w-48 h-28 overflow-hidden bg-black">
                                                        <img
                                                            src="../src/assets/local-images/blog2.jpg"
                                                            alt=""
                                                            className="w-full h-48 mb-4 object-cover transition-transform duration-700 transform hover:scale-110"
                                                        />
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-50 text-lg font-bold hover:underline underline-offset-8 ">
                                                            Dorus
                                                        </div>
                                                    </div>

                                                    <ul className="flex flex-col justify-center items-start mt-3 text-sm">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Dincidunteros
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Nectellus
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Solutmades
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Loremous
                                                                Comodous
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Namdos Hempus
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* Card-3 */}
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="block p-2 -mx-2 mb-3 text-xs hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600"
                                                    >
                                                        LOREM DE DORUS
                                                    </a>
                                                    <div className="relative w-48 h-28 overflow-hidden bg-black">
                                                        <img
                                                            src="../src/assets/local-images/blog3.jpg"
                                                            alt=""
                                                            className="w-full h-48 mb-4 object-cover transition-transform duration-700 transform hover:scale-110"
                                                        />
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-50 text-lg font-bold hover:underline underline-offset-8 ">
                                                            Dorus
                                                        </div>
                                                    </div>

                                                    <ul className="flex flex-col justify-center items-start mt-3 text-sm">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Dincidunteros
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Nectellus
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Solutmades
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Loremous
                                                                Comodous
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Namdos Hempus
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* Card-4 */}
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="block p-2 -mx-2 mb-3 text-xs hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600"
                                                    >
                                                        LOREM DE DORUS
                                                    </a>
                                                    <div className="relative w-48 h-28 overflow-hidden bg-black">
                                                        <img
                                                            src="../src/assets/local-images/blog4.webp"
                                                            alt=""
                                                            className="w-full h-48 mb-4 object-cover transition-transform duration-700 transform hover:scale-110"
                                                        />
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-50 text-lg font-bold hover:underline underline-offset-8 ">
                                                            Dorus
                                                        </div>
                                                    </div>

                                                    <ul className="flex flex-col justify-center items-start mt-3 text-sm">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Dincidunteros
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Loremous
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Comodianos
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Gravidas
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Montemous
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* Card-5 */}
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="block p-2 -mx-2 mb-3 text-xs font-bold hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 hover:text-indigo-600"
                                                    >
                                                        LOREM DE DORUS
                                                    </a>
                                                    <div className="relative w-48 h-28 overflow-hidden bg-black">
                                                        <img
                                                            src="../src/assets/local-images/banner-1.jpg"
                                                            alt=""
                                                            className="w-full h-48 mb-4 object-cover transition-transform duration-700 transform hover:scale-110"
                                                        />
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-50 text-lg font-bold hover:underline underline-offset-8 ">
                                                            Dorus
                                                        </div>
                                                    </div>

                                                    <ul className="flex flex-col justify-center items-start mt-3 text-sm">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Dincidunteros
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Loremous
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Comodianos
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Gravidas
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                            >
                                                                Montemous
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* BUY ELLA */}
                            <li className=" relative group px-3 py-2">
                                <button
                                    className="hover:opacity-50 cursor-default"
                                    aria-haspopup="true"
                                >
                                    BUY ELLA
                                </button>
                                <div className="absolute lg:-left-2 top-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] transform">
                                    <div className="relative top-3 p-6 bg-white shadow-xl">
                                        <div className="w-10 h-10 bg-white absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                                        <div className="relative z-10">
                                            <ul className="text-[15px]">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                    >
                                                        Documentation
                                                    </a>
                                                </li>
                                                <hr class="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                    >
                                                        Open A Store For FREE
                                                    </a>
                                                </li>
                                                <hr class="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                    >
                                                        Get Support
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    {/* <div className="flex justify-center text-center items-center gap-10">
                        <a href="#" className="font-bold text-white text-xl">
                            Icon-1
                        </a>
                        <a href="#" className="font-bold text-white text-xl">
                            Icon-2
                        </a>
                    </div> */}
                </header>
            </body>
        </section>
    );
};

export default Navbar;
