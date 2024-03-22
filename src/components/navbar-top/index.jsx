/** @format */

import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../shopping-cart";
import { IoSearchOutline } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

import usFlag from "/assets/local-images/us.png";
import ukFlag from "/assets/local-images/uk.png";
import frFlag from "/assets/local-images/fr.png";
import deFlag from "/assets/local-images/de.png";

// Define an array of country objects with their names and flag image paths
const countries = [
    { name: "US", flag: usFlag },
    { name: "UK", flag: ukFlag },
    { name: "FR", flag: frFlag },
    { name: "GR", flag: deFlag },
];
// Define an array of currency options
const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "JPY", name: "Japanese Yen" },
    // Add more currencies as needed
];

const NavTop = () => {
    return (
        <section>
            <div className="flex justify-between items-end gap-10 px-10 py-5">
                <div className="h-12 w-24">
                    <img
                        src="/assets/local-images/ella-logo-black-compressor.avif"
                        alt=""
                        className="h-full w-full"
                    />
                </div>
                {/* top right section */}
                <div className="flex flex-col justify-center gap-3 items-end text-center">
                    <div className="flex justify-center items-center text-center gap-2">
                        <span className="text-sm">
                            Customer Service 091 234-ELLA
                        </span>
                        {/* Country Section */}
                        <div className="relative inline-flex">
                            <select className="h-8 bg-white border-none py-2 leading-tight">
                                {countries.map((country, index) => (
                                    <option key={index} value={country.name}>
                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="w-6 h-6 mr-2"
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "50%",
                                            }} // Ensure proper styling
                                        />
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <IoMdArrowDropdown className="h-2 w-2 text-sm" />
                            </div>
                        </div>
                        {/* Currencies Section */}
                        <div className="relative inline-flex">
                            <select className="w-20 h-8 bg-white border-none px-4 py-2 leading-tight">
                                {currencies.map((currency, index) => (
                                    <option key={index} value={currency.code}>
                                        {currency.name} ({currency.code})
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <IoMdArrowDropdown className="h-4 w-4" />
                            </div>
                        </div>
                        {/* Search Section */}
                        <div className="flex w-40 h-8 bg-slate-100">
                            <input
                                className="w-full border-none text-gray-900 bg-slate-100"
                                type="search"
                                name="search"
                                placeholder="Search..."
                            />
                            <button type="submit" className="p-1 text-gray-900">
                                <IoSearchOutline className="fill-current h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center text-sm font-semibold gap-x-1">
                        <span>FREE SHIPPING ON ALL ORDERS.</span>
                        <span>NO MINIMUM PURCHASE</span>
                    </div>
                    <div className="flex justify-center items-center text-center gap-5">
                        <div className="flex justify-center items-center text-center gap-x-2">
                            <span className="text-xl">
                                <SlBag />
                            </span>
                            <h5 className="text-sm">
                                {" "}
                                <ShoppingCart />
                            </h5>
                            <span className="bg-pink-200 text-lg p-3 rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span>
                        </div>
                        <div className="flex justify-center items-center text-center gap-x-2">
                            <span className="text-xl font-bold">
                                <FiHeart />
                            </span>
                            <h5 className="text-sm">
                                <Link to="/whish-list">My Wish List</Link>
                            </h5>
                        </div>
                        <div>
                            {" "}
                            <Link
                                to="/create-account"
                                className="text-gray-900 text-sm"
                            >
                                Sign In or Create an Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavTop;
