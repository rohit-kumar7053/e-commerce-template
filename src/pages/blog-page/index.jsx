/** @format */

import React from "react";
import Navbar from "../../components/navbar";
import Featuredproducts from "../../components/featured-products";
const BlogCard = ({ title, image, date, categories, description }) => {
    return (
        // <div className="flex justify-center">
        //     <div className="flex justify-between items-center text-center gap-12 mx-12 p-6 border-2 border-black shadow-md">
        //         <div className="">
        //             <img
        //                 src="../src/assets/local-images/blog1.jpg"
        //                 alt=""
        //                 className="object-cover hover:transition duration-500 scale-105"
        //             />
        //         </div>

        //         <div className="flex flex-col items-start justify-start">
        //             <h1 className="font-semibold text-2xl">
        //                 Deumanto Sollicitudin Delo
        //             </h1>
        //             <div className="flex justify-center gap-5 text-xs my-3">
        //                 <span>Feb 24, 2022</span>
        //                 <span>Halo Themes </span>
        //                 <span>0 Comments</span>
        //             </div>
        //             <p className="items-start text-start text-gray-600 text-sm">
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                 Duis risus leo, elementum in malesuada an darius ut
        //                 augue. Cras sit amet lectus et justo feugiat euismod sed
        //                 non erat. Nulla non felis id metus bibendum iaculis quis
        //                 sit amet eros. Nam suscipit mollis tellus vel malesuada.
        //                 Duis danos an molestie, sem in sollicitudin sodales...
        //             </p>
        //             <button className="bg-white hover:bg-black hover:text-white text-black border border-black hover:border-black cursor-pointer font-semibold text-sm py-2 mt-5 px-1 w-32">
        //                 VIEW DETAILS
        //             </button>
        //         </div>
        //     </div>
        //     <div className="Catogory"></div>
        // </div>
        <section className="">
            <Navbar />
            {/* Bread Crumbs Section */}
            <div className="mx-12 my-8">
                <div className="flex justify-start gap-2 py-2 text-sm text-gray-400">
                    <h4>Home</h4>
                    <span>{">"}</span>
                    <h2>About Us 1</h2>
                </div>
            </div>
            <h1 className="font-bold text-xl my-10 mx-12">BLOG LIST</h1>
            <div className="flex justify-between ga-3 mx-12">
                <div className="grid grid-cols-1 gap-10 w-3/4">
                    <div className="flex justify-start items-center text-center gap-8">
                        <div className="w-1/3">
                            <img
                                src="../src/assets/local-images/blog1.jpg"
                                alt=""
                                className=""
                            />
                        </div>

                        <div className="flex flex-col items-start justify-start w-3/5">
                            <h1 className="font-semibold text-2xl">
                                Deumanto Sollicitudin Delo
                            </h1>
                            <div className="flex justify-center gap-5 text-xs my-3">
                                <span>Feb 24, 2022</span>
                                <span>Halo Themes </span>
                                <span>0 Comments</span>
                            </div>
                            <p className="items-start text-start text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis risus leo, elementum in
                                malesuada an darius ut augue. Cras sit amet
                                lectus et justo feugiat euismod sed non erat.
                                Nulla non felis id metus bibendum iaculis quis
                                sit amet eros. Nam suscipit mollis tellus vel
                                malesuada. Duis danos an molestie, sem in
                                sollicitudin sodales...
                            </p>
                            <button className="bg-white hover:bg-black hover:text-white text-black border border-black hover:border-black cursor-pointer font-semibold text-sm py-2 mt-5 px-1 w-32">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                    <hr className="flex-grow border-t border-gray-300"></hr>
                    <div className="flex justify-start items-center text-center gap-8">
                        <div className="w-1/3">
                            <img
                                src="../src/assets/local-images/blog3.jpg"
                                alt=""
                                className=""
                            />
                        </div>

                        <div className="flex flex-col items-start justify-start w-3/5">
                            <h1 className="font-semibold text-2xl">
                                Deumanto Sollicitudin Delo
                            </h1>
                            <div className="flex justify-center gap-5 text-xs my-3">
                                <span>Feb 24, 2022</span>
                                <span>Halo Themes </span>
                                <span>0 Comments</span>
                            </div>
                            <p className="items-start text-start text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis risus leo, elementum in
                                malesuada an darius ut augue. Cras sit amet
                                lectus et justo feugiat euismod sed non erat.
                                Nulla non felis id metus bibendum iaculis quis
                                sit amet eros. Nam suscipit mollis tellus vel
                                malesuada. Duis danos an molestie, sem in
                                sollicitudin sodales...
                            </p>
                            <button className="bg-white hover:bg-black hover:text-white text-black border border-black hover:border-black cursor-pointer font-semibold text-sm py-2 mt-5 px-1 w-32">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                    <hr className="flex-grow border-t border-gray-300"></hr>
                    <div className="flex justify-start items-center text-center gap-8">
                        <div className="w-1/3">
                            <img
                                src="../src/assets/local-images/blog2.jpg"
                                alt=""
                                className=""
                            />
                        </div>

                        <div className="flex flex-col items-start justify-start w-3/5">
                            <h1 className="font-semibold text-2xl">
                                Deumanto Sollicitudin Delo
                            </h1>
                            <div className="flex justify-center gap-5 text-xs my-3">
                                <span>Feb 24, 2022</span>
                                <span>Halo Themes </span>
                                <span>0 Comments</span>
                            </div>
                            <p className="items-start text-start text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis risus leo, elementum in
                                malesuada an darius ut augue. Cras sit amet
                                lectus et justo feugiat euismod sed non erat.
                                Nulla non felis id metus bibendum iaculis quis
                                sit amet eros. Nam suscipit mollis tellus vel
                                malesuada. Duis danos an molestie, sem in
                                sollicitudin sodales...
                            </p>
                            <button className="bg-white hover:bg-black hover:text-white text-black border border-black hover:border-black cursor-pointer font-semibold text-sm py-2 mt-5 px-1 w-32">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                    <hr className="flex-grow border-t border-gray-300"></hr>
                    <div className="flex justify-start items-center text-center gap-8">
                        <div className="w-1/3">
                            <img
                                src="../src/assets/local-images/blog1.jpg"
                                alt=""
                                className=""
                            />
                        </div>

                        <div className="flex flex-col items-start justify-start w-3/5">
                            <h1 className="font-semibold text-2xl">
                                Deumanto Sollicitudin Delo
                            </h1>
                            <div className="flex justify-center gap-5 text-xs my-3">
                                <span>Feb 24, 2022</span>
                                <span>Halo Themes </span>
                                <span>0 Comments</span>
                            </div>
                            <p className="items-start text-start text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis risus leo, elementum in
                                malesuada an darius ut augue. Cras sit amet
                                lectus et justo feugiat euismod sed non erat.
                                Nulla non felis id metus bibendum iaculis quis
                                sit amet eros. Nam suscipit mollis tellus vel
                                malesuada. Duis danos an molestie, sem in
                                sollicitudin sodales...
                            </p>
                            <button className="bg-white hover:bg-black hover:text-white text-black border border-black hover:border-black cursor-pointer font-semibold text-sm py-2 mt-5 px-1 w-32">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                </div>
                {/* Side feture Section */}
                <div className="Category bg-white p-10 w-1/4">
                    <div className="flex flex-col">
                        {/* Categories */}
                        <div className="py-1">
                            <h1 className="text-xl font-semibold">
                                Categories
                            </h1>
                            <hr className="flex-grow my-2 border-t border-gray-800"></hr>
                            <ul className="flex flex-col gap-4 text-sm ">
                                <li>Bibendumetos</li>
                                <li>Pellentes Habitanto</li>
                                <li>Senectus</li>
                                <li>Consequatod</li>
                                <li>Scelerisque Yurnas</li>
                                <li>Loremouticas</li>
                            </ul>
                        </div>
                        {/* RECENT ARTICLES */}
                        <div className="py-1">
                            <h1 className="text-xl font-semibold">
                                RECENT ARTICLES
                            </h1>
                            <hr className="flex-grow mt-5 border-t border-gray-800"></hr>
                            <ul>
                                <li className="flex flex-col  my-2">
                                    <p className="text-sm my-2 hover:underline underline-offset-4">
                                        Deumanto Sollicitudin Delo Milancelos
                                    </p>
                                    <span className="text-xs font-medium text-stone-500">
                                        24 February 2022
                                    </span>
                                </li>
                                <hr className="flex-grow border-t border-gray-300"></hr>
                                <li className="flex flex-col my-2">
                                    <p className="text-sm my-3 hover:underline underline-offset-4">
                                        Deumanto Sollicitudin Delo Milancelos
                                    </p>
                                    <span className="text-xs font-medium text-stone-500">
                                        24 February 2022
                                    </span>
                                </li>
                                <hr className="flex-grow border-t border-gray-300"></hr>
                                <li className="flex flex-col my-2">
                                    <p className="text-sm my-2 hover:underline underline-offset-4">
                                        Deumanto Sollicitudin Delo Milancelos
                                    </p>
                                    <span className="text-xs font-medium text-stone-500">
                                        24 February 2022
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* FEATURED PRODUCTS */}
                        <div className="py-1">
                            <h1 className="text-xl font-semibold">
                                FEATURED PRODUCTS
                            </h1>
                            <hr className="flex-grow my-5 border-t border-gray-800"></hr>
                            <div className="flex flex-col gap-5 text-sm mb-5 ">
                                <img
                                    src="../src/assets/local-images/blog-sidebar-1.avif"
                                    alt=""
                                />
                                <img
                                    src="../src/assets/local-images/blog-sidebar-2.avif"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* CUSTOM BLOCK */}
                        <div className="py-1">
                            <h1 className="text-xl font-semibold">
                                CUSTOM BLOCK
                            </h1>
                            <hr className="flex-grow my-5 border-t border-gray-800"></hr>
                            <div className="flex flex-col gap-5 text-sm ">
                                <p>
                                    Custom CMS block displayed at the left
                                    sidebar on the Catalog Page. Put your own
                                    content here: text, html, images, media...
                                    whatever you like.
                                </p>
                                <p>
                                    There are many similar sample content
                                    placeholders across the store. All editable
                                    from admin panel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Featuredproducts />
        </section>
    );
};

export default BlogCard;
