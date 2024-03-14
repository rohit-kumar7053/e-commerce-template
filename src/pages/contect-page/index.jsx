/** @format */

import React from "react";
import PropTypes from "prop-types";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Contact = (props) => {
    return (
        <section>
            <Navbar />
            <div className="text-gray-600 body-font relative mx-12">
                {/* Bread Crumbs Section */}
                <div className="flex justify-start gap-2 p-3 text-sm text-gray-400">
                    <h4>Home</h4>
                    <span>{">"}</span>
                    <h2>Contact Us 1</h2>
                </div>
                <div className="container px-5 pb-24 mx-auto">
                    <div className="flex flex-col text-start w-1/2">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            Contact Us 1
                        </h1>
                        <p className="my-8 text-sm w-3/4">
                            Have a question or comment?
                            <br />
                            Use the form below to send us a message or contact
                            us by mail at:
                        </p>
                    </div>
                    <div className="flex justify-center gap-12 w-full">
                        {/* Contact Form */}
                        <div className="mt-20 w-1/2 h-full">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-${props.theme}-500 focus:bg-white focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="name"
                                        name="name"
                                        className={`w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-${props.theme}-500 focus:bg-white focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-${props.theme}-500 focus:bg-white focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Comment
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={`w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-${props.theme}-500 focus:bg-white focus:ring-2 focus:ring-${props.theme}-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full justify-start text-start">
                                <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                                    SHOP THE LOOK
                                </button>
                            </div>
                        </div>
                        {/* Contact Details */}
                        <div className="bg-white flex flex-col justify-start text-start w-1/2 h-full">
                            <div className="p-5 h-full">
                                <h2 className="flex text-xl font-semibold tracking-wide ml-5">
                                    Get in Touch !
                                </h2>
                                <div className="w-3/4">
                                    <p className="my-8 text-sm">
                                        We'd love to hear from you - please use
                                        the form to send us your message or
                                        ideas. Or simply pop in for a cup of
                                        fresh tea and a cookie:
                                    </p>
                                    <div className="h-full">
                                        <div className="flex gap-3 mb-2">
                                            <span className="text-2xl">
                                                <RiMessage2Fill />
                                            </span>
                                            <span className="text-xs">
                                                TEXT: 091-123-ELLA
                                            </span>
                                        </div>
                                        <div className="flex justify-start items-center text-center gap-3 mb-8">
                                            <span className="text-2xl">
                                                <MdEmail />
                                            </span>
                                            <span className="text-xs">
                                                email@domain.com
                                            </span>
                                        </div>

                                        <p className="text-gray-600 text-sm">
                                            685 Market Street
                                            <br />
                                            San Francisco, CA 94105,
                                            <br />
                                            United States
                                        </p>
                                        <div className="border border-stone-300 w-68 my-6"></div>
                                        <ul className="list-inside text-gray-600 mt-4 text-sm">
                                            <li>OPENING HOURS</li>
                                            <li className="w-56">
                                                MON to SAT: 9:00 AM - 10:00 PM
                                            </li>
                                            <li>SUN: 10:00 AM - 6:00 PM</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Contact;
