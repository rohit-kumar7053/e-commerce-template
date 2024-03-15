/** @format */

import React from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./authentication/login";
import SignUp from "./authentication/Sign-up";
import Home from "./pages/home-page";
import About from "./pages/about-page";
import Contact from "./pages/contect-page";
import Products from "./pages/products-page";
import ProductDetails from "./pages/Detail-page";
import Collections from "./pages/collection-page";
import BlogCard from "./pages/blog-page";
import Newin from "./pages/newIn-page";
const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/Sign-Up",
        element: <SignUp />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/product",
        element: <Products />,
    },
    {
        path: "/product-details",
        element: <ProductDetails />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/collections",
        element: <Collections />,
    },
    {
        path: "/blog",
        element: <BlogCard />,
    },
    {
        path: "/new-in",
        element: <Newin />,
    },
]);

const App = () => {
    // Yaha API Ka Main Link Aaye Ga Baki page ki api choti ho jayegi
    axios.defaults.baseURL = "https://admintest.kiomoi.com/api/v1";
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
export default App;
