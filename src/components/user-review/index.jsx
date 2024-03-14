/** @format */

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

// Component for displaying star ratings on top
const StarRating = ({ totalReviews }) => {
    // Calculate filled and empty stars based on total reviews
    const filledStars = totalReviews > 5 ? 5 : totalReviews;
    const emptyStars = 5 - filledStars;

    return (
        <div className="text-center">
            <div className="flex justify-center items-center">
                {/* Render filled stars */}
                <div className="flex">
                    {[...Array(filledStars)].map((_, index) => (
                        <IoMdStar
                            key={index}
                            className="h-6 w-6 fill-current text-black"
                        />
                    ))}
                    {/* Render empty stars */}
                    {[...Array(emptyStars)].map((_, index) => (
                        <IoMdStar
                            key={index + filledStars}
                            className="h-6 w-6 fill-current text-gray-300"
                        />
                    ))}
                </div>
            </div>
            {/* Display total reviews */}
            <div className="mt-2 text-sm text-gray-600">
                Based on {totalReviews} review
            </div>
        </div>
    );
};

// Component for the review form
const WriteReviewForm = ({ isOpen, onClose }) => {
    // State variables for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewBody, setReviewBody] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", {
            name,
            email,
            rating,
            reviewTitle,
            reviewBody,
        });
    };

    // Render form only if isOpen is true
    if (!isOpen) return null;

    // Review Form Section
    return (
        <form onSubmit={handleSubmit} className="w-3/5 mt-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-base font-bold">Write A Review</h2>
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <IoCloseOutline className="h-6 w-6" />
                </button>
            </div>
            {/* Form fields */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="name"
                >
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="enter your name"
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 font-medium text-sm px-4 py-2 w-full"
                />
            </div>
            {/* email Section  */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="email"
                >
                    Email:
                </label>
                <input
                    type="text"
                    id="name"
                    value={email}
                    placeholder="john.smith@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 font-medium text-sm px-4 py-2 w-full"
                />
            </div>
            {/* Other form fields */}
            {/* Rating stars */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                    Rating:
                </label>
                {[...Array(5)].map((_, index) => (
                    <IoMdStar
                        key={index}
                        className={`inline-block h-6 w-6 cursor-pointer ${
                            index < rating ? "text-yellow-300" : "text-gray-300"
                        }`}
                        onClick={() => setRating(index + 1)}
                    />
                ))}
            </div>
            {/* Review title */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="reviewTitle"
                >
                    Review Title:
                </label>
                <input
                    type="text"
                    id="reviewTitle"
                    value={reviewTitle}
                    placeholder="give your review a title"
                    onChange={(e) => setReviewTitle(e.target.value)}
                    className="border border-gray-300 text-sm font-medium px-4 py-2 w-full"
                />
            </div>
            {/* Review body */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="reviewBody"
                >
                    Body of Review:
                </label>
                <textarea
                    id="reviewBody"
                    value={reviewBody}
                    onChange={(e) => setReviewBody(e.target.value)}
                    placeholder="write your Review here"
                    className="border border-gray-300 text-sm font-medium px-4 py-2 w-full h-32"
                ></textarea>
                {/* Character count */}
                <div className="text-gray-500 text-right mt-2">
                    {reviewBody.length}/1500
                </div>
            </div>
            {/* Submit button */}
            <button
                type="submit"
                className="cursor-pointer font-bold px-5 py-2 w-56 h-12 bg-gray-900 hover:bg-white hover:text-gray-900 text-white border border-black hover:border-black"
            >
                Submit Review
            </button>
        </form>
    );
};

// Component for displaying user reviews
const UserReviewCard = ({ userReview }) => {
    // Dummy star rating (replace with actual data)
    const starRating = 5; // For example, replace this with actual star rating

    return (
        <div className="bg-white p-4 mt-8 border border-black">
            {/* Star rating */}
            <div className="flex items-center mb-2">
                {/* Render filled stars */}
                {[...Array(starRating)].map((_, index) => (
                    <IoMdStar
                        key={index}
                        className="h-5 w-5 fill-current text-yellow-300"
                    />
                ))}
                {/* Render empty stars */}
                {[...Array(5 - starRating)].map((_, index) => (
                    <IoMdStar
                        key={index + starRating}
                        className="h-5 w-5 fill-current text-gray-300"
                    />
                ))}
            </div>
            <div className="flex justify-between items-center my-2">
                <div className="font-semibold">{userReview.user}</div>
                {/* Report as Inappropriate link */}
                <div className="mt-2">
                    <a href="#" className="underline text-red-500 text-sm">
                        Report As Inappropriate
                    </a>
                </div>
            </div>

            {/* Review content */}
            <div className="text-gray-500 text-xs my-1">
                Heavy on{userReview.date}
            </div>
            <div className="text-gray-700">{userReview.review}</div>
        </div>
    );
};

// Main component
const ReviewUI = () => {
    // Total reviews (replace with actual data)
    const totalReviews = 3;
    // User reviews data (replace with actual data)
    const userReviews = [
        {
            user: "Cosmo De Milancelos",
            date: "March 1, 2024",
            review: "Great product, highly recommended!",
        },
        {
            user: "Jane Smith Milancelos",
            date: "February 28, 2024",
            review: "Awesome experience, loved it!",
        },
    ];

    // State for controlling review form visibility
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Function to toggle review form visibility
    const toggleForm = () => {
        setIsFormOpen((prevState) => !prevState);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Star rating component */}
            <StarRating totalReviews={totalReviews} />
            {/* Button to toggle review form visibility */}
            <div className="text-center">
                <button
                    onClick={toggleForm}
                    className="cursor-pointer font-bold py-3 mt-8 mb-5 px-5 w-56 bg-white hover:bg-black hover:text-white text-black border border-black hover:border-black"
                >
                    {isFormOpen ? "Write A Review" : "Write A Review"}
                </button>
            </div>
            {/* Review form */}
            <WriteReviewForm isOpen={isFormOpen} onClose={toggleForm} />

            {userReviews.map((review, index) => (
                <UserReviewCard key={index} userReview={review} />
            ))}
        </div>
    );
};

export default ReviewUI;
