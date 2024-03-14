/** @format */

import React, { useState } from "react";

const SortingSelector = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState("Featured");

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onChange(selectedValue);
    };

    const dummyData = [
        { id: 1, title: "Product 1", price: 20, sold: 50, date: "2022-01-01" },
        { id: 2, title: "Product 2", price: 30, sold: 30, date: "2022-01-02" },
        { id: 3, title: "Product 3", price: 25, sold: 40, date: "2022-01-03" },
    ];

    // Function to sort products based on the selected option
    const sortProducts = () => {
        switch (selectedOption) {
            case "BestSelling":
                return dummyData.sort((a, b) => a.sold - b.sold);
            case "AZ":
                return dummyData.sort((a, b) => a.title.localeCompare(b.title));
            case "ZA":
                return dummyData.sort((a, b) => b.title.localeCompare(a.title));
            case "PriceLowToHigh":
                return dummyData.sort((a, b) => a.price - b.price);
            case "PriceHighToLow":
                return dummyData.sort((a, b) => b.price - a.price);
            case "DateOldToNew":
                return dummyData.sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                );
            case "DateNewToOld":
                return dummyData.sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
            default:
                return dummyData;
        }
    };

    // Get sorted products
    const sortedProducts = sortProducts();

    return (
        <section>
            <div className="flex items-center justify-start">
                <label
                    htmlFor="itemsPerPage"
                    className="mr-2 text-xs font-semibold text-gray-700"
                >
                    SHORT BY
                </label>
                <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="px-4 py-2 w-36 text-xs border border-black focus:border-black appearance-none"
                >
                    <option className="py-2 tracking-wide" value="Featured">
                        Featured
                    </option>
                    <option className="py-2 tracking-wide" value="BestSelling">
                        Best Selling
                    </option>
                    <option className="py-2 tracking-wide" value="AZ">
                        Alphabetically, A-Z
                    </option>
                    <option className="py-2 tracking-wide" value="ZA">
                        Alphabetically, Z-A
                    </option>
                    <option
                        className="py-2 tracking-wide"
                        value="PriceLowToHigh"
                    >
                        Price, low to high
                    </option>
                    <option
                        className="py-2 tracking-wide"
                        value="PriceHighToLow"
                    >
                        Price, high to low
                    </option>
                    <option className="py-2 tracking-wide" value="DateOldToNew">
                        Date, old to new
                    </option>
                    <option className="py-2 tracking-wide" value="DateNewToOld">
                        Date, new to old
                    </option>
                </select>
            </div>

            <div className="overflow-hidden mx-12">
                <h1 className="flex justify-center items-center text-2xl font-bold my-10">
                    Sorting
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    {sortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border border-gray-300 p-4 rounded-md"
                        >
                            <h2 className="text-lg font-semibold">
                                {product.title}
                            </h2>
                            <p className="text-gray-500">${product.price}</p>
                            <p className="text-gray-500">
                                Sold: {product.sold}
                            </p>
                            <p className="text-gray-500">
                                Date: {product.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SortingSelector;
