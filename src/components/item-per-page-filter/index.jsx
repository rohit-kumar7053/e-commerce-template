/** @format */
// Ye Kahi Bhi use nahi hai agar use ho too use kar sakte call kar k kisi bhi component mai
import React, { useState } from "react";

// Dummy products array
const products = [
    { id: 1, name: "Product 1", price: 10.99, quantity: 100 },
    { id: 2, name: "Product 2", price: 12.99, quantity: 50 },
    { id: 3, name: "Product 3", price: 15.99, quantity: 25 },
    { id: 4, name: "Product 4", price: 17.99, quantity: 15 },
    { id: 5, name: "Product 5", price: 18.99, quantity: 5 },
    { id: 6, name: "Product 6", price: 18.99, quantity: 5 },
    { id: 7, name: "Product 7", price: 18.99, quantity: 5 },
    { id: 8, name: "Product 8", price: 18.99, quantity: 5 },
    { id: 9, name: "Product 9", price: 18.99, quantity: 5 },
    { id: 10, name: "Product 10", price: 18.99, quantity: 5 },
    { id: 11, name: "Product 11", price: 18.99, quantity: 5 },
    { id: 12, name: "Product 12", price: 18.99, quantity: 5 },
    { id: 13, name: "Product 13", price: 18.99, quantity: 5 },
    { id: 14, name: "Product 14", price: 18.99, quantity: 5 },
    { id: 15, name: "Product 15", price: 18.99, quantity: 5 },
    { id: 16, name: "Product 16", price: 18.99, quantity: 5 },
    { id: 17, name: "Product 17", price: 18.99, quantity: 5 },
    { id: 18, name: "Product 18", price: 18.99, quantity: 5 },
    { id: 19, name: "Product 19", price: 18.99, quantity: 5 },
    { id: 20, name: "Product 20", price: 18.99, quantity: 5 },
];

const ItemPerPageFilter = ({
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    totalProducts,
    setCurrentPage,
}) => {
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1); // Reset current page when changing items per page
    };

    // Calculate the range of items being shown
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalProducts);

    // Filter the products based on the selected items per page
    const displayedProducts = products.slice(startIndex - 1, endIndex);

    return (
        <section>
            <div className="">
                <div className="flex items-center justify-center">
                    <label
                        htmlFor="itemsPerPage"
                        className="mr-2 text-sm font-semibold text-gray-700"
                    >
                        ITEM PER PAGE
                    </label>
                    <select
                        id="itemsPerPage"
                        name="itemsPerPage"
                        className="border border-gray-300 text-xs w-24 px-5 py-4"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                    >
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>

                    <div className="ml-4 text-sm text-gray-600">
                        Showing items {startIndex} - {endIndex} from{" "}
                        {totalProducts}
                    </div>
                </div>
                <div>
                    {/* Display the filtered products */}
                    <ul className="space-y-2">
                        {displayedProducts.map((product) => (
                            <li
                                key={product.id}
                                className="bg-white p-4 rounded shadow"
                            >
                                <h3 className="text-xl font-bold">
                                    {product.name}
                                </h3>
                                <p>Price: ${product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalProducts = products.length;

    return (
        <div className="p-4">
            <ItemPerPageFilter
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                totalProducts={totalProducts}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default App;
