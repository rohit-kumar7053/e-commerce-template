/** @format */

import React from "react";

const Pagination = ({
    currentPage,
    totalProducts,
    itemsPerPage,
    onPageChange,
}) => {
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // Generate an array of page numbers
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center mt-4">
            <ul className="flex space-x-2">
                <li>
                    <button
                        className="px-2 py-1 border border-gray-300 rounded"
                        onClick={() => onPageChange(1)}
                        disabled={currentPage === 1}
                    >
                        First
                    </button>
                </li>
                <li>
                    <button
                        className="px-2 py-1 border border-gray-300 rounded"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                </li>
                {pages.map((page) => (
                    <li key={page}>
                        <button
                            className={`px-2 py-1 border border-gray-300 rounded ${
                                currentPage === page ? "bg-gray-200" : ""
                            }`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className="px-2 py-1 border border-gray-300 rounded"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
                <li>
                    <button
                        className="px-2 py-1 border border-gray-300 rounded"
                        onClick={() => onPageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        Last
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;

// ye dusare jagha call ho ga as component ager use ho too

{
    /* Bottom Pagination If you want at last of Products (Component) */
}
{
    /* <Pagination
                currentPage={currentPage}
                totalProducts={totalProducts}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            /> */
}
