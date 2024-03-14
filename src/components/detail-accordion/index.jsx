/** @format */

import React, { useState } from "react";
import ReviewUI from "../user-review";
import VideoPlayer from "../../components/video-player/index.jsx";

function Accordion() {
    // State to keep track of which item is clicked
    const [selectedItemId, setSelectedItemId] = useState(1); // Default selected item id is set to 1 (Description)

    // Function to handle click event on title
    const handleTitleClick = (itemId) => {
        setSelectedItemId(itemId); // Set selected item id when title is clicked
    };

    return (
        <section>
            <div className="flex flex-col h-full">
                {/* Head Titles */}
                <ul className="flex justify-center text-center pt-14 gap-10 font-semibold text-xl">
                    <li
                        className={`cursor-pointer ${
                            selectedItemId === 1
                                ? " underline-offset-[17px] border-b-2 border-black pb-4"
                                : ""
                        }`}
                        onClick={() => handleTitleClick(1)}
                    >
                        Description
                    </li>
                    <li
                        className={`cursor-pointer ${
                            selectedItemId === 2
                                ? " underline-offset-[17px] border-b-2 border-black pb-4"
                                : ""
                        }`}
                        onClick={() => handleTitleClick(2)}
                    >
                        Additional Information
                    </li>
                    <li
                        className={`cursor-pointer ${
                            selectedItemId === 3
                                ? " underline-offset-[17px] border-b-2 border-black pb-4"
                                : ""
                        }`}
                        onClick={() => handleTitleClick(3)}
                    >
                        Shipping & Return
                    </li>
                    <li
                        className={`cursor-pointer ${
                            selectedItemId === 4
                                ? " underline-offset-[17px] border-b-2 border-black pb-4"
                                : ""
                        }`}
                        onClick={() => handleTitleClick(4)}
                    >
                        Custom Tab
                    </li>
                    <li
                        className={`cursor-pointer ${
                            selectedItemId === 5
                                ? "underline-offset-[17px] border-b-2 border-black pb-4"
                                : ""
                        }`}
                        onClick={() => handleTitleClick(5)}
                    >
                        Review
                    </li>
                </ul>
                <hr className="h-px border-1 dark:bg-gray-200"></hr>
                {/* Add other content divs similarly */}
                <div className="flex justify-center items-center">
                    {/* Description */}
                    <div>
                        <div className={`${selectedItemId !== 1 && "hidden"}`}>
                            {selectedItemId === 1 && (
                                <div>
                                    {/* Additional content goes here */}
                                    <div className="py-5 mx-12">
                                        <p className="text-sm">
                                            Nam tempus turpis at metus
                                            scelerisque placerat nulla deumantos
                                            solicitud felis. Pellentesque diam
                                            dolor, elementum etos lobortis des
                                            mollis ut risus. Sedcus faucibus an
                                            sullamcorper mattis drostique des
                                            commodo pharetras loremos. Donec
                                            pretium egestas sapien et mollis.
                                            Vestibulum ante ipsum primis in
                                            faucibus orci luctus et ultrices
                                            posuere cubilia curae; Nulla in mi
                                            vel arcu convallis molestie et eget
                                            nulla. Donec laoreet daugue sit amet
                                            ornare rhoncus elit nisi luctus.
                                        </p>
                                    </div>
                                    {/* Card Section */}
                                    <div className="sub-container-3 mx-auto">
                                        <div className="flex justify-between h-screen gap-8 mx-12 my-5">
                                            <div className="w-1/2 bg-white flex justify-center items-center">
                                                <div className="image-card relative overflow-hidden w-full h-full">
                                                    <img
                                                        src="../src/assets/local-images/product-description-image-1.webp"
                                                        alt=""
                                                        className="object-cover w-full h-full transition-transform duration-1000 transform hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-1/2 bg-white flex flex-col justify-center text-center border border-black">
                                                <a
                                                    className="mb-4 text-sm underline underline-offset-4"
                                                    href="#"
                                                >
                                                    New Collection
                                                </a>
                                                <h2 className="font-extrabold tracking-wide text-2xl">
                                                    #METROPOLIS
                                                </h2>
                                                <hr className="w-11 h-0.5 mx-auto bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
                                                <p className="tracking-wide leading-relaxed text-sm px-10 mb-5">
                                                    Nullam daliquet vestibulum
                                                    augue non varius cras de
                                                    cosmopolis congue melito
                                                    duis tristique.
                                                </p>
                                                <div className="justify-center text-center">
                                                    <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                                                        SHOP THE LOOK
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between gap-8 mx-12 my-8 h-screen">
                                            <div className="w-1/2 bg-white flex flex-col justify-center text-center border border-black">
                                                <a
                                                    className="mb-4 text-sm underline underline-offset-4"
                                                    href="#"
                                                >
                                                    New Collection
                                                </a>
                                                <h2 className="font-extrabold tracking-wide text-2xl">
                                                    #METROPOLIS
                                                </h2>
                                                <hr className="w-11 h-0.5 mx-auto bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
                                                <p className="tracking-wide leading-relaxed text-sm px-10 mb-5">
                                                    Nullam daliquet vestibulum
                                                    augue non varius cras de
                                                    cosmopolis congue melito
                                                    duis tristique.
                                                </p>
                                                <div className="justify-center text-center">
                                                    <button className="bg-black hover:bg-white hover:text-black text-white border border-transparent hover:border-black cursor-pointer font-bold py-2 mt-4 px-4 w-48">
                                                        SHOP THE LOOK
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-1/2 bg-white flex justify-center items-center">
                                                <div className="image-card relative overflow-hidden w-full h-full">
                                                    <img
                                                        src="../src/assets/local-images/product-description-image-1.webp"
                                                        alt=""
                                                        className="object-cover w-full h-full transition-transform duration-1000 transform hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 flex justify-center items-center">
                                                        <VideoPlayer />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Items Section */}
                                    <div className="Ordered list mx-12">
                                        <div className="flex justify-between my-12 ">
                                            <div className="ml-5">
                                                <h2 className="font-semibold mb-4">
                                                    Sample Unordered List
                                                </h2>
                                                <ul className="text-sm list-disc leading-loose">
                                                    <li>
                                                        Comodous in tempor
                                                        ullamcorper miaculis.
                                                    </li>
                                                    <li>
                                                        Pellentesque vitae neque
                                                        mollis urna mattis
                                                        laoreet.
                                                    </li>
                                                    <li>
                                                        Divamus sit amet purus
                                                        justo.
                                                    </li>
                                                    <li>
                                                        Proin molestie egestas
                                                        orci ac suscipit risus
                                                        posuere.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mr-56">
                                                <h2 className="font-semibold mb-4">
                                                    Sample Ordered List
                                                </h2>
                                                <ul className="text-sm list-decimal leading-loose">
                                                    <li>
                                                        Comodous in tempor
                                                        ullamcorper miaculis.
                                                    </li>
                                                    <li>
                                                        Pellentesque vitae neque
                                                        mollis urna mattis
                                                        laoreet.
                                                    </li>
                                                    <li>
                                                        Divamus sit amet purus
                                                        justo.
                                                    </li>
                                                    <li>
                                                        Proin molestie egestas
                                                        orci ac suscipit risus
                                                        posuere.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <h2 className="font-semibold">
                                            Sample Block Quote
                                        </h2>
                                        <p className="bg-stone-100 text-sm leading-loose my-5 p-5">
                                            Praesent vestibulum congue tellus at
                                            fringilla. Curabitur vitae semper
                                            sem, eu convallis est. Cras felis
                                            nunc commodo eu convallis vitae
                                            interdum non nisl. Maecenas ac est
                                            sit amet augue pharetra convallis,
                                            nec danos dui vestibulum sit amet
                                            auctor ipsum.
                                        </p>
                                        <h2 className="font-semibold">
                                            Sample Paragraph Text
                                        </h2>
                                        <p className="text-sm leading-loose my-4">
                                            Praesent vestibulum congue tellus at
                                            fringilla. Curabitur vitae semper
                                            sem, eu convallis est. Cras felis
                                            nunc commodo eu convallis vitae
                                            interdum non nisl. Maecenas ac est
                                            sit amet augue pharetra convallis
                                            nec danos dui. Cras suscipit quam et
                                            turpis eleifend vitae malesuada
                                            magna congue. Damus id ullamcorper
                                            neque. Sed vitae mi a mi pretium
                                            aliquet ac sed elitos. Pellentesque
                                            nulla eros accumsan quis justo at
                                            tincidunt lobortis denimes,
                                            suspendisse vestibulum lectus in
                                            lectus volutpate.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Additional Information */}
                    <div
                        className={`bg-white ${
                            selectedItemId !== 2 && "hidden"
                        }`}
                    >
                        {selectedItemId === 2 && (
                            <div className="h-full">
                                <div className="pt-8 pb-2 mx-12">
                                    <p className="text-sm font-normal leading-loose">
                                        Nam tempus turpis at metus scelerisque
                                        placerat nulla deumantos solicitud
                                        felis. Pellentesque diam dolor,
                                        elementum etos lobortis des mollis ut
                                        risus. Sedcus faucibus an sullamcorper
                                        mattis drostique des commodo pharetras
                                        loremos.Donec pretium egestas sapien et
                                        mollis. Pellentesque diam dolor
                                        cosmopolis etos lobortis.
                                    </p>
                                </div>
                                {/* Additional content goes here */}
                                <div className="pb-5 mx-12">
                                    <div className="Ordered list">
                                        <div className="flex justify-start gap-10 font-medium text-gray-700">
                                            <div className="text-xs leading-loose">
                                                <ul>
                                                    <li className="my-2">
                                                        Comodous:
                                                    </li>
                                                    <li className="my-2">
                                                        Mattis laoreet:
                                                    </li>
                                                    <li className="my-2">
                                                        Divamus de ametos:
                                                    </li>
                                                    <li className="my-2">
                                                        Molestie:
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-xs leading-loose">
                                                <ul>
                                                    <li className="my-2">
                                                        Comodous in tempor
                                                        ullamcorper miaculis.
                                                    </li>
                                                    <li className="my-2">
                                                        Pellentesque vitae neque
                                                        mollis urna mattis
                                                        laoreet.
                                                    </li>
                                                    <li className="my-2">
                                                        Divamus sit amet purus
                                                        justo.
                                                    </li>
                                                    <li className="my-2">
                                                        Proin molestie egestas
                                                        orci ac suscipit risus
                                                        posuere loremous
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Shipping & Return */}
                    <div
                        className={`w-full h-full mx-12 ${
                            selectedItemId !== 3 && "hidden"
                        }`}
                    >
                        {selectedItemId === 3 && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 my-5">
                                    Returns Policy
                                </h3>

                                <div className="pb-5">
                                    <p className="text-sm mb-3 leading-loose">
                                        You may return most new, unopened items
                                        within 30 days of delivery for a full
                                        refund. We'll also pay the return
                                        shipping costs if the return is a result
                                        of our error (you received an incorrect
                                        or defective item, etc.).
                                    </p>
                                    <p className="text-sm mb-3 leading-loose">
                                        You should expect to receive your refund
                                        within four weeks of giving your package
                                        to the return shipper, however, in many
                                        cases you will receive a refund more
                                        quickly. This time period includes the
                                        transit time for us to receive your
                                        return from the shipper (5 to 10
                                        business days), the time it takes us to
                                        process your return once we receive it
                                        (3 to 5 business days), and the time it
                                        takes your bank to process our refund
                                        request (5 to 10 business days).
                                    </p>
                                    <p className="text-sm mb-3 leading-loose">
                                        If you need to return an item, simply
                                        login to your account, view the order
                                        using the "Complete Orders" link under
                                        the My Account menu and click the Return
                                        Item(s) button. We'll notify you via
                                        e-mail of your refund once we've
                                        received and processed the returned
                                        item.
                                    </p>

                                    <h3 className="text-xl font-bold text-gray-800 mb-5">
                                        Shipping
                                    </h3>
                                    <p className="text-sm mb-3 leading-loose">
                                        We can ship to virtually any address in
                                        the world. Note that there are
                                        restrictions on some products, and some
                                        products cannot be shipped to
                                        international destinations.
                                    </p>
                                    <p className="text-sm mb-3 leading-loose">
                                        When you place an order, we will
                                        estimate shipping and delivery dates for
                                        you based on the availability of your
                                        items and the shipping options you
                                        choose. Depending on the shipping
                                        provider you choose, shipping date
                                        estimates may appear on the shipping
                                        quotes page.
                                    </p>
                                    <p className="text-sm mb-3 leading-loose">
                                        Please also note that the shipping rates
                                        for many items we sell are weight-based.
                                        The weight of any such item can be found
                                        on its detail page. To reflect the
                                        policies of the shipping companies we
                                        use, all weights will be rounded up to
                                        the next full pound.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Custom Tab */}
                    <div
                        className={` w-full h-full mx-12 ${
                            selectedItemId !== 4 && "hidden"
                        }`}
                    >
                        {selectedItemId === 4 && (
                            <div>
                                <div class="flex flex-col space-y-4 mt-8 pb-20">
                                    <div class="flex justify-start items-start gap-x-40 bg-stone-100 px-4 py-3 text-sm font-normal">
                                        <div className="flex justify-start items-center w-full gap-28">
                                            <div className="w-40">
                                                {" "}
                                                <span class="font-semibold">
                                                    Drostique
                                                </span>
                                            </div>
                                            <div className="w-1/2">
                                                {" "}
                                                <p>
                                                    Nam tempus turpis at metus
                                                    scelerisque placerat nulla
                                                    deumantos
                                                </p>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-start items-start gap-x-40 bg-white px-4 text-sm font-normal">
                                        <div className="flex justify-start items-center w-full gap-28">
                                            <div className="w-40">
                                                {" "}
                                                <span class="font-semibold">
                                                    Pharetro Lorem
                                                </span>
                                            </div>
                                            <div className="w-1/2">
                                                {" "}
                                                <p>
                                                    Pellentesque diam dolor
                                                    elementum etos lobortis des
                                                    mollis
                                                </p>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-start items-start gap-x-40 bg-stone-100 px-4 py-3 text-sm font-normal">
                                        <div className="flex justify-start items-center w-full gap-28">
                                            <div className="w-40">
                                                {" "}
                                                <span class="font-semibold">
                                                    Milancelos
                                                </span>
                                            </div>
                                            <div className="1/2">
                                                {" "}
                                                <p>
                                                    Donec pretium egestas sapien
                                                    et mollis
                                                </p>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-start items-start gap-x-40 bg-white px-4 text-sm font-normal">
                                        <div className="flex justify-start items-center w-full gap-28">
                                            <div className="w-40">
                                                {" "}
                                                <span class="font-semibold">
                                                    Pellentesque
                                                </span>
                                            </div>
                                            <div className="w-1/2">
                                                {" "}
                                                <p>
                                                    Sedcus faucibus an
                                                    sullamcorper mattis
                                                    drostique des commodo
                                                    pharetras
                                                </p>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between bg-stone-100 px-4 py-3 text-sm font-normal">
                                        <div class="flex justify-start items-center w-full gap-28">
                                            <div className="w-40">
                                                {" "}
                                                <span class="font-semibold">
                                                    Proin Molestie
                                                </span>
                                            </div>
                                            <div className="w-1/2">
                                                {" "}
                                                <p>
                                                    Pellentesque diam dolor
                                                    elementum etos lobortis des
                                                    mollis
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-start items-start gap-x-40 bg-white px-4 text-sm font-normal">
                                        <div class="flex justify-start items-center w-full gap-28">
                                            <div className="w-40">
                                                <span class="font-semibold">
                                                    Cosmopolis
                                                </span>
                                            </div>
                                            <div className="w-1/2">
                                                <p>
                                                    Donec pretium egestas sapien
                                                    et mollis
                                                </p>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Review */}
                    <div
                        className={`w-full h-full mx-12 ${
                            selectedItemId !== 5 && "hidden"
                        }`}
                    >
                        {selectedItemId === 5 && (
                            <div>
                                <ReviewUI />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accordion;
