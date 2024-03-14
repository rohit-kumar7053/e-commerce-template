/** @format */

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import NewinProducts from "../../components/new-in-products";
import Categories from "../../components/side-categories";
import PriceFilter from "../../components/price-filter";
import ProductTypes from "../../components/product-types";
import ColorFilter from "../../components/color-filter";
import SideSize from "../../components/side-size";
import BrendList from "../../components/brend-lists";
import ProductAvailability from "../../components/product-abilibilty";
import CustomBlock from "../../components/custom-block";
import SideFeaturedProducts from "../../components/side-featured-products";
import FilterableCard from "../../components/card-filter";
import SortingSelector from "../../components/shorting-filter";
import Viewdproducts from "../../components/viewd-products";
const Newin = () => {
    const [selectedSorting, setSelectedSorting] = useState("Featured");

    const handleSortingChange = (selectedValue) => {
        setSelectedSorting(selectedValue);
        // You can perform any action based on the selected value here
    };

    return (
        <section>
            <Navbar />
            {/* Bread Crumbs Section */}
            <div className="mx-12 my-4">
                <div className="flex justify-start gap-2 py-2 text-sm text-gray-400">
                    <h4>Home</h4>
                    <span>{">"}</span>
                    <h2> New In</h2>
                </div>
            </div>
            <div className="flex justify-center gap-x-5 mx-12">
                {/* Side feture Section */}
                <div className="pr-5 w-1/5">
                    <div className="flex flex-col">
                        {/* Categories Section */}
                        <Categories />
                        {/* Price Section */}
                        <PriceFilter />
                        {/* ProductTypes Section */}
                        <ProductTypes />
                        {/* BRAND Section*/}
                        <BrendList />
                        {/* AVAILABILITY Section */}
                        <ProductAvailability />
                        {/* COLOR Section */}
                        <ColorFilter />
                        {/* Size Section */}
                        <SideSize />
                        {/* FEATURED PRODUCTS Section */}
                        <SideFeaturedProducts />
                        {/* CUSTOM BLOCK Section */}
                        <CustomBlock />
                    </div>
                </div>
                {/* Products Listing */}
                <div className="w-3/4">
                    <div className="overflow-hidden">
                        <img
                            src="../src/assets/local-images/newIn-banner.webp"
                            alt=""
                            className="h-full w-full hover:transition-transform duration-300 transform hover:scale-105"
                        />
                    </div>
                    <h1 className="font-bold text-xl my-5">NEW IN</h1>
                    <p className="text-sm font-normal text-gray-500">
                        Nullam aliquet vestibulum augue non varius. Cras cosmo
                        congue an melitos. Duis tristique del ante le maliquam
                        praesent murna de tellus laoreet cosmopolis. Quisque
                        hendrerit nibh an purus
                    </p>
                    <hr className="flex-grow border-t border-gray-300 my-8"></hr>
                    <FilterableCard />
                    {/* <NewinProducts /> */}
                    {/* Sorting By */}
                    <div className="container mx-auto p-4">
                        <h1 className="text-2xl font-bold mb-4">
                            Product Sorting
                        </h1>
                        <SortingSelector onChange={handleSortingChange} />
                        <p className="mt-4">
                            Selected Sorting: {selectedSorting}
                        </p>
                    </div>
                </div>
            </div>
            {/* Horizontal Line */}
            <hr className="my-10 mx-12 border-gray-300" />
            {/* RECENTLY VIEWED PRODUCTS SECTION */}
            <div className="my-10">
                <Viewdproducts />
            </div>
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Newin;
