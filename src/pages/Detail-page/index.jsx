/** @format */

// /** @format */

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { TbTruckDelivery } from "react-icons/tb";
import { IoStarSharp } from "react-icons/io5";
import {
    HiOutlineHeart,
    HiFire,
    HiQuestionMarkCircle,
    HiPlus,
    HiOutlineChevronRight,
    HiOutlineChevronLeft,
} from "react-icons/hi";
import {
    GoEye,
    GoPlus,
    GoDash,
    GoShieldCheck,
    GoShareAndroid,
    GoAlert,
} from "react-icons/go";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Relatedproducts from "../../components/related-products";
import Viewdproducts from "../../components/viewd-products";
import Boughttogether from "../../components/bought-together";
import Popup from "../../components/pop-up-function";
import Accordion from "../../components/detail-accordion";
import ShareMainPopup from "../../components/share-popup";

const ProductDetails = ({ price }) => {
    // Main Image Carousal.
    const [mainImage, setMainImage] = useState(
        "../src/assets/local-images/image14.webp"
    );
    const options = [
        { id: 1, src: "../src/assets/local-images/image7.webp" },
        { id: 2, src: "../src/assets/local-images/image5.webp" },
        { id: 3, src: "../src/assets/local-images/image6.webp" },
        { id: 4, src: "../src/assets/local-images/image3.webp" },
        { id: 5, src: "../src/assets/local-images/image10.webp" },
    ];

    const handleOptionClick = (src) => {
        setMainImage(src);
    };
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 40,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 25,
        },
    };
    const ButtonGroup = ({ next, previous, ...rest }) => {
        const {
            carouselState: { currentSlide },
        } = rest;
        return (
            <div className="w-full h-0 absolute bottom-0 left-0 right-0 top-40 text-white">
                <div className="carousel-button-group text-4xl text-black">
                    <div className="flex justify-between items-center h-10 w-full">
                        <button
                            className={`${
                                currentSlide === 0 ? "disable" : ""
                            } bg-stone-100 rounded-full left-custom-btn`}
                            onClick={() => previous()}
                        >
                            <HiOutlineChevronLeft />
                        </button>
                        <button
                            className="bg-stone-100 rounded-full right-custom-btn"
                            onClick={() => next()}
                        >
                            <HiOutlineChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    // Main Image Carousal Ends.
    // Define state to manage the value of the range input
    const [value, setValue] = useState(50); // Initial value is set to 50
    // Function to handle change in range input value
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    // Define state to manage the color
    const [color, setColor] = useState("Gray"); // Initial color is set to 'gray'
    const [clicked, setClicked] = useState();
    // Function to handle color change
    const handleColorChange = (newColor, index) => {
        setColor(newColor);
        setClicked(index); // Set clicked to true when button is clicked
    };
    //  Define state to manage the Size of product
    const [size, setSize] = useState("XS");
    const handleSizeChange = (newSize) => {
        setSize(newSize);
    };
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
    const subtotal = price * quantity;

    return (
        <section className="container">
            {/* Bread Crumbs and Navbar Section */}
            <header>
                <Navbar />
                <div className="mx-12">
                    <div className="flex gap-2 py-8 text-sm text-gray-400">
                        <h4>home</h4>
                        <span>{">"}</span>
                        <h2>Collections</h2>
                    </div>
                </div>
            </header>
            {/* Detail Section */}
            <div className="sub-container-1">
                <div className="mx-12 mb-12">
                    <div className="flex justify-between gap-8 w-full text-gray-600 body-font">
                        <div className="w-7/12">
                            <div className="w-full">
                                <div className="flex flex-col gap-8 justify-between items-start text-start">
                                    <div className="h-full">
                                        {mainImage && (
                                            <img
                                                src={mainImage}
                                                alt="Main Image"
                                                className="w-full h-full"
                                            />
                                        )}
                                    </div>
                                    {/* MultiCarousel Items */}
                                    <div className="relative w-full bottom-0 left-0">
                                        <MultiCarousel
                                            partialVisible={true}
                                            autoPlay={false}
                                            customTransition="transform 300ms ease-in-out"
                                            infinite={true}
                                            loop
                                            renderButtonGroupOutside={true}
                                            customButtonGroup={<ButtonGroup />}
                                            arrows={false}
                                            margin={5}
                                            responsive={responsive}
                                        >
                                            {/* Additional content */}

                                            {options.map((option) => (
                                                <img
                                                    key={option.id}
                                                    src={option.src}
                                                    alt={`Option ${option.id}`}
                                                    className="w-full h-full object-cover p-3 cursor-pointer"
                                                    onClick={() =>
                                                        handleOptionClick(
                                                            option.src
                                                        )
                                                    }
                                                />
                                            ))}
                                        </MultiCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-5/12">
                            <h1 className="text-gray-900 text-2xl title-font font-medium">
                                (Product 5) Sample - Clothing And Accessory
                                Boutiques For Sale
                            </h1>
                            <div className="flex my-2">
                                <span className="flex items-center">
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarSharp />

                                    <span className="text-gray-600 ml-3">
                                        4 Reviews
                                    </span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2">
                                    <div className="flex text-center gap-2 text-red-400">
                                        <span className="w-5 h-6 text-xl">
                                            <HiFire />
                                        </span>
                                        <h5>12 sold in last 10 hours</h5>
                                    </div>
                                </span>
                            </div>
                            <p className="leading-relaxed mb-3 text-sm">
                                Fam locavore kickstarter distillery. Mixtape
                                chillwave tumeric sriracha taximy chia
                                microdosing tilde DIY. XOXO fam indxgo...
                            </p>
                            <ul className="leading-relaxed text-sm font-normal mb-3">
                                <li>Vender: Donatello</li>
                                <li>SKU: W0690034</li>
                                <li>Availability: In Stock</li>
                                <li>Product Type: Dincidunteros</li>
                            </ul>
                            <span className="title-font font-medium text-xl text-gray-900">
                                $86.00
                            </span>
                            <h4 className="text-red-400 mt-3 font-normal text-sm">
                                Please hurry! Only 3 left in stock
                            </h4>
                            <input
                                id="small-range"
                                type="range"
                                value={value}
                                onChange={handleChange}
                                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                            />
                            {/* Color Section */}
                            <div className="flex flex-col mt-4">
                                <div className="mr-3">Color: {color}</div>
                                <div className="flex mt-3">
                                    <img
                                        onClick={() =>
                                            handleColorChange("black")
                                        }
                                        src="../src/assets/local-images/image1.webp"
                                        alt="Image"
                                        className="{`border border-gray-300 rounded-full w-10 h-10 focus:outline-none ${clicked ? 'border-black' : ''}`} w-10 h-10 ml-1 p-0.5 rounded-full object-cover border-2 border-gray-300 focus:outline-none"
                                    />
                                    <img
                                        onClick={() =>
                                            handleColorChange("white")
                                        }
                                        src="../src/assets/local-images/image3.webp"
                                        alt="Image"
                                        className="{`border-2 border-gray-300 rounded-full w-10 h-10 focus:outline-none ${clicked ? 'border-black' : ''}`} w-10 h-10 ml-1 p-0.5 rounded-full object-cover border-2 border-gray-00 focus:outline-none"
                                    />
                                    <img
                                        onClick={() =>
                                            handleColorChange("Darkorange")
                                        }
                                        src="../src/assets/local-images/image2.webp"
                                        alt="Image"
                                        className="w-10 h-10 ml-1 p-0.5 rounded-full object-cover border-2 border-gray-300 focus:outline-none"
                                    />
                                    <img
                                        onClick={() =>
                                            handleColorChange("Cadetblue")
                                        }
                                        src="../src/assets/local-images/image4.webp"
                                        alt="Image"
                                        className="w-10 h-10 ml-1 p-0.5 rounded-full object-cover border-2 border-gray-300 focus:outline-none"
                                    />
                                </div>
                            </div>
                            {/* Size Section */}
                            <div className="flex">
                                <div className="flex flex-col mt-6 pb-3">
                                    <span className="mr-3">Size: {size}</span>
                                    <div className="flex mt-3 justify-between text-center item-center">
                                        <div
                                            onClick={() =>
                                                handleSizeChange("XS")
                                            }
                                            className="w-10 h-10 ml-1 p-1 object-cover border border-gray-300 focus:outline-none"
                                        >
                                            XS
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleSizeChange("S")
                                            }
                                            className="w-10 h-10 ml-1 p-1 object-cover border border-gray-00 focus:outline-none"
                                        >
                                            S
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleSizeChange("M")
                                            }
                                            className="w-10 h-10 ml-1 p-1 object-cover border border-gray-300 focus:outline-none"
                                        >
                                            M
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleSizeChange("L")
                                            }
                                            className="w-10 h-10 ml-1 p-1 object-cover border border-gray-300 focus:outline-none"
                                        >
                                            L
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleSizeChange("XL")
                                            }
                                            className="w-10 h-10 ml-1 p-1 object-cover border border-gray-300 focus:outline-none"
                                        >
                                            XL
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Quantity and Pop Up limit Message Section */}
                            <div>
                                <div className="flex flex-col">
                                    <span>Quantity:</span>
                                    <div className="h-12 w-28 my-3 p-1 flex justify-center text-center items-center border border-gray-300">
                                        <button
                                            onClick={handleDecrement}
                                            disabled={quantity === 1}
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
                                            onClick={handleIncrement}
                                            disabled={quantity === 4}
                                            className="w-16 h-10 text-base"
                                        >
                                            <div className="flex text-center justify-center">
                                                <GoPlus />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div>Subtotal: ${subtotal}</div>
                                {showLimitMessage && (
                                    <div
                                        style={{
                                            position: "fixed",
                                            bottom: 50,
                                            left: 0,
                                            width: "100%",
                                            backgroundColor: "red",
                                            color: "#fff",
                                            padding: "10px",
                                            textAlign: "center",
                                        }}
                                    >
                                        You can only add 4 of this product to
                                        your cart
                                    </div>
                                )}
                            </div>
                            {/* Size and Color Chart Section */}
                            <Popup />
                            {/* Add To Cart Section */}
                            <div className=" flex text-center items-center">
                                <div className="justify-center text-center">
                                    <button className="cursor-pointer font-bold py-2 w-72 mr-5 bg-black uppercase hover:bg-white hover:text-black text-white border border-transparent hover:border-black">
                                        add to cart
                                    </button>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="flex items-center justify-center rounded-full w-16 h-16 mr-5 uppercase cursor-pointer font-bold bg-white hover:text-white hover:bg-black text-black border hover:border-black">
                                        <div className="text-3xl">
                                            <HiOutlineHeart />
                                        </div>
                                    </button>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="flex items-center justify-center rounded-full font-bold">
                                        <ShareMainPopup />
                                    </button>
                                </div>
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
                                        className="dark:text-gray-500 hover:underline underline-offset-2"
                                    >
                                        terms and conditions
                                    </a>{" "}
                                </label>
                                .
                            </div>
                            <div className="flex flex-col justify-center text-center">
                                <div className="flex text-center justify-center items-center cursor-pointer font-bold text-sm text-white w-full h-16 border bg-purple-400">
                                    Buy With
                                    <h5 className="ml-3 text-2xl text">
                                        shop
                                        <span className="bg-white text-purple-400 text-sm ml-1 p-0.5 rounded">
                                            Pay
                                        </span>
                                    </h5>
                                </div>
                                <div className="my-2">
                                    <a
                                        className="hover:underline underline-offset-2 ms-2 text-xs font-medium text-gray-900 dark:text-gray-500"
                                        href="#"
                                    >
                                        More payment options
                                    </a>
                                </div>
                                <div className="flex text-center items-center gap-2">
                                    <span className="font-bold text-2xl">
                                        <GoEye />
                                    </span>
                                    <div className="text-sm">
                                        {112} customers are viewing this product
                                    </div>
                                </div>
                                <div className="flex justify-between gap-2 h-24 w-24 my-5">
                                    <img
                                        src="../src/assets/local-images/pay-logo1.jpg"
                                        alt="Image 1"
                                        className="object-cover h-full w-full"
                                    />
                                    <img
                                        src="../src/assets/local-images/pay-logo1.jpg"
                                        alt="Image 1"
                                        className="object-cover h-full w-full"
                                    />
                                    <img
                                        src="../src/assets/local-images/pay-logo1.jpg"
                                        alt="Image 1"
                                        className="object-cover h-full w-full"
                                    />
                                    <img
                                        src="../src/assets/local-images/pay-logo1.jpg"
                                        alt="Image 1"
                                        className="object-cover h-full w-full"
                                    />
                                </div>
                                <div className="flex flex-col justify-between text-center">
                                    <div className="flex justify-between gap-2 items-center w-48 mb-2">
                                        <span className="text-3xl">
                                            <TbTruckDelivery />
                                        </span>
                                        <h5 className="font-semibold">
                                            Free Shipping
                                        </h5>
                                        <span className="text-gray-400">
                                            <HiQuestionMarkCircle />
                                        </span>
                                    </div>
                                    <p className="text-sm font-normal whitespace-pre-line ml-10 w-3/4">
                                        Free standard shipping on orders over
                                        $99. Estimated delivery: 12/01/2022 -
                                        15/10/2022.
                                    </p>

                                    <div className="flex justify-between gap-2 items-center w-48 mb-2">
                                        <span className="text-3xl">
                                            <GoShieldCheck />
                                        </span>
                                        <h5 className="font-semibold">
                                            Free Returns
                                        </h5>
                                        <span className="text-gray-400">
                                            <HiQuestionMarkCircle />
                                        </span>
                                    </div>
                                    <p className="text-sm font-normal p-1 w-3/4">
                                        Learn More..
                                    </p>

                                    <div className="flex justify-between gap-2 items-center w-80 mb-2">
                                        <span className="text-3xl">
                                            <GoAlert />
                                        </span>
                                        <h5 className="font-semibold">
                                            Covid-19 Shipping Delay Notice
                                        </h5>
                                        <span className="text-gray-400">
                                            <HiQuestionMarkCircle />
                                        </span>
                                    </div>
                                    {/* <p className="text-sm font-normal whitespace-pre-line  p-1 ml-10 w-3/4">
                                            Free standard shipping on orders
                                            over $99. Estimated delivery:
                                            12/01/2022 - 15/10/2022.
                                        </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Frequenly Bought Together Section */}
            <Boughttogether />
            {/* Top Option Section Like Description review */}
            <div className="sub-container-2">
                <Accordion />
                {/* RELATED PRODUCTS SECTION */}
                <div>
                    <hr className="h-px border-1 dark:bg-gray-300 mx-12 my-10"></hr>
                    <Relatedproducts />
                </div>
                {/* RECENTLY VIEWED PRODUCTS SECTION */}
                <div>
                    <hr className="h-px border-1 dark:bg-gray-300 mx-12 my-10"></hr>
                    
                    <Viewdproducts />
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ProductDetails;
