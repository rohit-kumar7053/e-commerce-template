/** @format */

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { SlTag } from "react-icons/sl";
import { FaTruckFast } from "react-icons/fa6";
import { GoGift, GoPaste, GoPlus, GoDash } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";

const ShoppingCart = () => {
    //  Define state to manage the price and message.
    const [quantity, setQuantity] = useState(1);
    const [showLimitMessage, setShowLimitMessage] = useState(false);
    const handleIncrement = () => {
        if (quantity < 4) {
            setQuantity((prevQuantity) => prevQuantity + 1);
        } else {
            setShowLimitMessage(true);
        }
    };
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        } else {
            setShowLimitMessage(true);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section>
            <div>
                {/* Button to toggle sidebar */}
                <h5 onClick={handleToggleSidebar} className="text-sm">
                    Shopping Cart{" "}
                </h5>
                {/* Sidebar */}
                <div
                    className={`fixed inset-0 z-50 overflow-hidden ${
                        isOpen ? "" : "hidden"
                    }`}
                >
                    <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                        <div className="w-screen max-w-md">
                            <div className="h-full flex flex-col bg-white shadow-xl">
                                {/* Sidebar Header */}
                                <div className="flex items-center justify-between px-4">
                                    <div className="flex flex-col">
                                        <h2 className="text-xl font-semibold text-black">
                                            Shopping Cart
                                        </h2>
                                        <div className="font-semibold">
                                            <h6>1 item</h6>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleToggleSidebar}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <span className="sr-only">Close</span>
                                        <span className="font-extrabold text-xl">
                                            <RxCross2 className="transition-transform transform hover:rotate-90" />
                                        </span>
                                    </button>
                                </div>
                                {/* Sidebar Content */}
                                {/* Sidebar Footer */}
                                <div className="p-5">
                                    {/* Whish List Products */}
                                    <div className="flex flex-col justify-between items-start text-center gap-10 h-28 w-full overflow-y-scroll">
                                        <div className="flex justify-between items-start text-start px-3">
                                            {/* Left side Image */}
                                            <div className="w-20 h-28">
                                                <img
                                                    className="object-cover w-full h-full"
                                                    src="/assets/local-images/image10.webp"
                                                    alt="placeholder"
                                                />
                                            </div>
                                            {/* Right side Content */}
                                            <div className="w-2/3 ">
                                                <p className="text-gray-700 text-sm hover:underline underline-offset-4">
                                                    (Product 10) Sample -
                                                    Clothing And Accessory
                                                    Boutiques For Sale
                                                </p>
                                                <h5 className="my-3">
                                                    $218.99
                                                </h5>
                                                <div className="flex justify-between items-center">
                                                    <div className="h-10 w-20 my-3 p-1 flex justify-center text-center items-center border border-gray-300">
                                                        <button
                                                            onClick={
                                                                handleDecrement
                                                            }
                                                            disabled={
                                                                quantity === 1
                                                            }
                                                            className="w-16 h-10 text-base text-center items-center"
                                                        >
                                                            <span className="flex text-center justify-center">
                                                                <GoDash />
                                                            </span>
                                                        </button>
                                                        <span className="flex items-center text-center justify-center w-20 h-10 text-lg">
                                                            {quantity}
                                                        </span>
                                                        <button
                                                            onClick={
                                                                handleIncrement
                                                            }
                                                            disabled={
                                                                quantity === 4
                                                            }
                                                            className="w-16 h-10 text-base"
                                                        >
                                                            <div className="flex text-center justify-center">
                                                                <GoPlus />
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <span className="">
                                                        <RxCross2 className="text-xl" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-start text-start px-3">
                                            {/* Left side Image */}
                                            <div className="w-20 h-28">
                                                <img
                                                    className="object-cover w-full h-full"
                                                    src="/assets/local-images/image10.webp"
                                                    alt="placeholder"
                                                />
                                            </div>
                                            {/* Right side Content */}
                                            <div className="w-2/3 ">
                                                <p className="text-gray-700 text-sm hover:underline underline-offset-4">
                                                    (Product 10) Sample -
                                                    Clothing And Accessory
                                                    Boutiques For Sale
                                                </p>
                                                <h5 className="my-3">
                                                    $218.99
                                                </h5>
                                                <div className="flex justify-between items-center">
                                                    <div className="h-10 w-20 my-3 p-1 flex justify-center text-center items-center border border-gray-300">
                                                        <button
                                                            onClick={
                                                                handleDecrement
                                                            }
                                                            disabled={
                                                                quantity === 1
                                                            }
                                                            className="w-16 h-10 text-base text-center items-center"
                                                        >
                                                            <span className="flex text-center justify-center">
                                                                <GoDash />
                                                            </span>
                                                        </button>
                                                        <span className="flex items-center text-center justify-center w-20 h-10 text-lg">
                                                            {quantity}
                                                        </span>
                                                        <button
                                                            onClick={
                                                                handleIncrement
                                                            }
                                                            disabled={
                                                                quantity === 4
                                                            }
                                                            className="w-16 h-10 text-base"
                                                        >
                                                            <div className="flex text-center justify-center">
                                                                <GoPlus />
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <span className="">
                                                        <RxCross2 className="text-xl" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-start text-start px-3">
                                            {/* Left side Image */}
                                            <div className="w-20 h-28">
                                                <img
                                                    className="object-cover w-full h-full"
                                                    src="/assets/local-images/image10.webp"
                                                    alt="placeholder"
                                                />
                                            </div>
                                            {/* Right side Content */}
                                            <div className="w-2/3 ">
                                                <p className="text-gray-700 text-sm hover:underline underline-offset-4">
                                                    (Product 10) Sample -
                                                    Clothing And Accessory
                                                    Boutiques For Sale
                                                </p>
                                                <h5 className="my-3">
                                                    $218.99
                                                </h5>
                                                <div className="flex justify-between items-center">
                                                    <div className="h-10 w-20 my-3 p-1 flex justify-center text-center items-center border border-gray-300">
                                                        <button
                                                            onClick={
                                                                handleDecrement
                                                            }
                                                            disabled={
                                                                quantity === 1
                                                            }
                                                            className="w-16 h-10 text-base text-center items-center"
                                                        >
                                                            <span className="flex text-center justify-center">
                                                                <GoDash />
                                                            </span>
                                                        </button>
                                                        <span className="flex items-center text-center justify-center w-20 h-10 text-lg">
                                                            {quantity}
                                                        </span>
                                                        <button
                                                            onClick={
                                                                handleIncrement
                                                            }
                                                            disabled={
                                                                quantity === 4
                                                            }
                                                            className="w-16 h-10 text-base"
                                                        >
                                                            <div className="flex text-center justify-center">
                                                                <GoPlus />
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <span className="">
                                                        <RxCross2 className="text-xl" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start mt-5">
                                        <div className="grid grid-cols-4 items-center border border-black">
                                            <div className="bg-white hover:bg-slate-100 border border-gray-400 flex justify-center items-center w-24 h-16">
                                                <GoPaste className="text-gray-700 text-2xl" />
                                            </div>
                                            <div className="bg-white hover:bg-slate-100 border border-gray-400 flex justify-center items-center w-24 h-16">
                                                <GoGift className="text-gray-700 text-2xl" />
                                            </div>
                                            <div className="bg-white hover:bg-slate-100 border border-gray-400 flex justify-center items-center w-24 h-16">
                                                <FaTruckFast className="text-gray-700 text-2xl" />
                                            </div>
                                            <div className="bg-white hover:bg-slate-100 border border-gray-400 flex justify-center items-center w-24 h-16">
                                                <SlTag className="text-gray-700 text-2xl transform scale-x-[-1]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-start flex-col my-5">
                                        <div className="flex justify-between font-semibold py-2">
                                            <h5>Subtotal:</h5>
                                            <div className="flex items-center text-center">
                                                <span>
                                                    <FiDollarSign />
                                                </span>
                                                218.99
                                            </div>
                                        </div>
                                        <div className="flex justify-between font-semibold py-2">
                                            <h5>Total:</h5>
                                            <h5 className="flex items-center text-center text-xl">
                                                <span>
                                                    <FiDollarSign />
                                                </span>
                                                218.99
                                            </h5>
                                        </div>
                                        <div className="flex justify-start items-start">
                                            <h5 className="text-sm">
                                                Tax included and shipping
                                                calculated at checkout
                                            </h5>
                                        </div>
                                        <div className="flex items-center my-2">
                                            <input
                                                id="link-checkbox"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 text-black bg-gray-100 border-gray-300"
                                            ></input>
                                            <label
                                                for="link-checkbox"
                                                className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-500"
                                            >
                                                I agree with the{" "}
                                                <a
                                                    href="#"
                                                    className="dark:text-gray-500 underline underline-offset-2"
                                                >
                                                    terms and conditions
                                                </a>{" "}
                                            </label>
                                            .
                                        </div>
                                        <div className="flex flex-col justify-center text-center gap-5">
                                            <div>
                                                <button className="cursor-pointer font-bold py-3 w-96 mr-5 bg-gray-400 text-black uppercase border border-gray-900">
                                                    CheckOut
                                                </button>
                                            </div>
                                            <div>
                                                <button className="cursor-pointer font-bold py-3 w-96 mr-5 bg-white uppercase hover:bg-black hover:text-white text-black border border-gray-900 hover:border-black">
                                                    View Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Add your sidebar content here */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default ShoppingCart;
