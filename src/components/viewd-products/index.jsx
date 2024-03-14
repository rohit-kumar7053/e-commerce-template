/** @format */

import React from "react";

const Viewdproducts = () => {
    const products = [
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image11.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image6.webp",
            hoverImage: "../src/assets/local-images/image12.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image7.webp",
            hoverImage: "../src/assets/local-images/image2.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image13.webp",
            hoverImage: "../src/assets/local-images/image4.webp",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            cutmoney: "$86.00",
            price: "$218.99",
        },

        // Add more product objects as needed
    ];
    return (
        <section>
            <h1 className="text-black flex justify-center font-semibold text-2xl">
                RECENTLY VIEWED PRODUCTS
            </h1>
            <div className="overflow-hidden mx-12 mt-8">
                <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative w-64 h-96 mb-48"
                        >
                            <div className="relative w-68 h-96 overflow-hidden transition-opacity duration-300 group">
                                <img
                                    src={product.defaultImage}
                                    alt="default"
                                    className="absolute h-full w-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                                />
                                <img
                                    src={product.hoverImage}
                                    alt="hover"
                                    className="absolute h-full w-full object-cover transition-opacity opacity-0 group-hover:opacity-100 hover:transition-transform duration-1000 transform hover:scale-105"
                                />
                                <div className="h-32 w-full absolute bottom-0 left-0 bg-white transition duration-700 opacity-0 group-hover:opacity-100">
                                    <button className="text-black font-bold py-2 px-4 w-full absolute bottom-16 left-0 bg-white hover:bg-black hover:text-white border-2 border-black transition duration-700 opacity-0 group-hover:opacity-100">
                                        {product.imagehoverbtnText}
                                    </button>
                                    {/* Compare Checkbox Card*/}
                                    <div className="flex justify-center mt-2 w-full absolute bottom-5 left-0">
                                        <input
                                            type="checkbox"
                                            id={`compare_${product.id}`}
                                            className="mr-2"
                                        />
                                        <label
                                            className="text-sm"
                                            htmlFor={`compare_${product.id}`}
                                        >
                                            Compare
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/*Card Bootom Product Details  */}
                            <div className="w-full h-auto mb-4 mt-4 text-black">
                                <h2 className="text-xs flex justify-center text-gray-500">
                                    {product.title}
                                </h2>
                                <div className="text-sm hover:underline underline-offset-4">
                                    <span className="block text-center">
                                        {" "}
                                        (Product {product.availProducts}){" "}
                                        {product.description}
                                    </span>
                                </div>
                                <div className="flex gap-5 justify-center text-center mt-2">
                                    <div className="relative inline-block">
                                        <span className="absolute inset-x-0 top-1/2 h-0.5 bg-stone-500 transform -translate-y-1/2"></span>
                                        <span className="text-lg text-stone-400">
                                            {product.cutmoney}
                                        </span>
                                    </div>
                                    <span className="block font-bold text-red-600">
                                        {product.price}
                                    </span>
                                </div>
                                <div className="flex justify-center gap-2 pt-3">
                                    <img
                                        src="https://www.snitch.co.in/cdn/shop/products/Matteus1498.jpg?v=1663163076"
                                        alt="Your Image"
                                        className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                    />
                                    <img
                                        src="https://www.snitch.co.in/cdn/shop/products/Matteus1498.jpg?v=1663163076"
                                        alt="Your Image"
                                        className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                    />
                                    <img
                                        src="https://www.snitch.co.in/cdn/shop/products/Matteus1498.jpg?v=1663163076"
                                        alt="Your Image"
                                        className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Viewdproducts;
