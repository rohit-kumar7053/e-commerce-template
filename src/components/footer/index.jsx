/** @format */

import React, { useState } from "react";
import {
    FaFacebookSquare,
    FaInstagram,
    FaPinterest,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcon = ({ icon: Icon }) => (
    <Icon className="social-icon hover:text-[#00df9a]" size={16} />
);

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };

    const items = [
        { type: "icon", icon: FaFacebookSquare },
        { type: "icon", icon: FaInstagram },
        { type: "icon", icon: FaPinterest },
        { type: "icon", icon: FaTiktok },
        { type: "icon", icon: FaYoutube },
        { type: "icon", icon: FaXTwitter },

        {
            type: "section",
            title: "SHOP",
            items: [
                "New In",
                "Women",
                "Men",
                "Shoes",
                "Bags & Accessories",
                "Top Brands",
                "Sale & Special Offers",
            ],
        },
        { type: "section", title: "INFORMATION", items: ["About", "Blog"] },
        {
            type: "section",
            title: "CUSTOMER SERVICE",
            items: [
                "Search Terms",
                "Advanced Search",
                "Orders And Returns",
                "Contact Us",
                "Theme FAQs",
                "Consultant",
                "Store Locations",
            ],
        },
    ];

    return (
        <footer>
            <div className="bg-[#232323] text-gray-300">
                <div className="flex justify-center gap-x-28">
                    <div className="flex justify-start gap-28 my-6">
                        {items.map(
                            (item, index) =>
                                item.type === "section" && (
                                    <div key={index}>
                                        <h6 className="font-medium text-gray-100 text-base mb-5">
                                            {item.title}
                                        </h6>
                                        <ul>
                                            {item.items.map(
                                                (subItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="py-1 text-xs"
                                                    >
                                                        {subItem}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )
                        )}
                    </div>
                    <div>
                        <h2 className="font-medium text-gray-100 text-base mt-6">
                            NEWSLETTER SIGN UP
                        </h2>
                        <p className="py-4 text-sm">
                            Sign up for exclusive updates, new arrivals &
                            insider only discounts
                        </p>
                        <div className="flex justify-center items-center text-center gap-10 mb-10">
                            <form className="w-72" onSubmit={handleSubmit}>
                                <label htmlFor="email">
                                    <input
                                        className="form-input block w-full leading-none focus:outline-none py-2 bg-transparent px-4 text-gray-800"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="enter your email address"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </label>
                            </form>
                            <div>
                                <button className="bg-white hover:bg-black hover:text-white text-black border border-transparent hover:border-black cursor-pointer uppercase font-bold text-sm py-2 px-2 w-32">
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-start gap-5 ">
                            {items.map(
                                (item, index) =>
                                    item.type === "icon" && (
                                        <span className="h-10 w-10 flex justify-center items-center text-center bg-white text-black rounded-full">
                                            <SocialIcon
                                                key={index}
                                                icon={item.icon}
                                            />
                                        </span>
                                    )
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center text-center px-12">
                    <div className=" flex flex-col items-start py-8">
                        <p className="text-sm mb-4">
                            © 2024, Ella Demo. All Rights Reserved. Themes By
                            Halothemes
                        </p>
                        <p className="text-sm">
                            Crafted with{" "}
                            <span className="text-red-500">&hearts;</span> by
                            Your Company Name
                        </p>
                    </div>

                    <div className="flex gap-5">
                        <img
                            className="h-8 w-12 transition-transform transform hover:scale-110"
                            src="../src/assets/local-images/flogo-1.jpg"
                            alt="Logo 1"
                        />
                        <img
                            className="h-8 w-12 transition-transform transform hover:scale-110"
                            src="../src/assets/local-images/flogo-2.jpg"
                            alt="Logo 2"
                        />
                        <img
                            className="h-8 w-12 transition-transform transform hover:scale-110"
                            src="../src/assets/local-images/flogo-3.jpg"
                            alt="Logo 3"
                        />
                        <img
                            className="h-8 w-12 transition-transform transform hover:scale-110"
                            src="../src/assets/local-images/flogo-4.webp"
                            alt="Logo 4"
                        />
                        <img
                            className="h-8 w-12 transition-transform transform hover:scale-110"
                            src="../src/assets/local-images/flogo-5.jpg"
                            alt="Logo 5"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
