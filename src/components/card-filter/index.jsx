/** @format */

import React, { useState } from "react";
import SortingSelector from "../shorting-filter";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGripLinesVertical } from "react-icons/fa";

const FilterableCard = () => {
    // Option-1 Defult
    const [viewOption, setViewOption] = useState("option1");
    // Array Of Data
    const products = [
        {
            id: 1,
            defaultImage: "../src/assets/local-images/image1.webp",
            hoverImage: "../src/assets/local-images/image2.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Add To Cart",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",
            price: "$218.99",
        },
        {
            id: 2,
            defaultImage: "../src/assets/local-images/image2.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",

            imagehoverbtnText: "Notify ME",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 3,
            defaultImage: "../src/assets/local-images/image3.webp",
            hoverImage: "../src/assets/local-images/image4.webp",
            btnText: "Notify ME",

            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 4,
            defaultImage: "../src/assets/local-images/image2.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",

            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 5,
            defaultImage: "../src/assets/local-images/image2.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",

            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 6,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",

            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 7,
            defaultImage: "../src/assets/local-images/image2.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",

            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            price: "$218.99",
        },
        {
            id: 8,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 9,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 10,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 11,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 12,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 13,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 14,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 15,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 16,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 17,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 18,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 19,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 20,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 21,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 22,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 23,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 24,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 25,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 26,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 27,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 28,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 29,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 30,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 31,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 32,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 33,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 34,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 35,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 36,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 37,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 38,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 39,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        {
            id: 40,
            defaultImage: "../src/assets/local-images/image4.webp",
            hoverImage: "../src/assets/local-images/image1.webp",
            btnText: "Notify ME",
            imagehoverbtnText: "Quick View",
            title: "MODERN AMUSEMENT",
            availProducts: "5",
            description: " Sample - Clothing And Accessory Boutiques For Sale",
            productDetails:
                "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper...",

            cutmoney: "$86.00",
            price: "$218.99",
        },
        // Add more product objects as needed
    ];
    // Option-2 Per Item
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalProducts = products.length;

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
            <section className="container">
                <div className="flex justify-between items-center text-center mb-10">
                    {/* VIEW AS */}
                    <div className="flex items-center justify-start gap-2">
                        <div className="mr-2 text-xs font-semibold text-gray-700">
                            VIEW AS
                        </div>
                        <div className="my-4 flex justify-start gap-x-1">
                            <button
                                className={`p-1 border border-black ${
                                    viewOption === "option1"
                                        ? "bg-white text-black"
                                        : "bg-white text-gray-500"
                                }`}
                                onClick={() => setViewOption("option1")}
                            >
                                <GiHamburgerMenu className="text-xl" />
                            </button>
                            <button
                                className={`p-1 border border-black ${
                                    viewOption === "option2"
                                        ? "bg-white text-black"
                                        : "bg-white text-gray-500"
                                }`}
                                onClick={() => setViewOption("option2")}
                            >
                                <FaGripLinesVertical className="text-xl" />
                            </button>
                            <button
                                className={`p-1 border border-black ${
                                    viewOption === "option3"
                                        ? "bg-white text-black"
                                        : "bg-white text-gray-500"
                                }`}
                                onClick={() => setViewOption("option3")}
                            >
                                <GiHamburgerMenu className="transform rotate-90 text-xl" />
                            </button>
                        </div>
                    </div>
                    {/* ItemPerPageFilter and SortingSelector*/}
                    <div className="flex justify-center items-center text-center gap-5">
                        <div className="flex items-center justify-center">
                            <label
                                htmlFor="itemsPerPage"
                                className="mr-2 text-xs font-semibold text-gray-700"
                            >
                                ITEM PER PAGE
                            </label>
                            <select
                                id="itemsPerPage"
                                name="itemsPerPage"
                                className="text-xs border border-black focus:border-black w-24 px-5 py-4"
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
                        </div>
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
                                className="px-4 py-4 w-36 text-xs border border-black focus:border-black"
                            >
                                <option
                                    className="py-2 tracking-wide"
                                    value="Featured"
                                >
                                    Featured
                                </option>
                                <option
                                    className="py-2 tracking-wide"
                                    value="BestSelling"
                                >
                                    Best Selling
                                </option>
                                <option
                                    className="py-2 tracking-wide"
                                    value="AZ"
                                >
                                    Alphabetically, A-Z
                                </option>
                                <option
                                    className="py-2 tracking-wide"
                                    value="ZA"
                                >
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
                                <option
                                    className="py-2 tracking-wide"
                                    value="DateOldToNew"
                                >
                                    Date, old to new
                                </option>
                                <option
                                    className="py-2 tracking-wide"
                                    value="DateNewToOld"
                                >
                                    Date, new to old
                                </option>
                            </select>
                        </div>
                        {/* <div>
                            {" "}
                            <SortingSelector />
                        </div> */}
                    </div>
                </div>
                {/* Display the filtered products */}
                <div className="flex justify-between items-start text-start">
                    <div className="container">
                        {viewOption === "option1" && (
                            <section>
                                <div className="overflow-hidden">
                                    <div className="grid grid-cols-1">
                                        {displayedProducts.map((product) => (
                                            <div
                                                key={product.id}
                                                className="flex h-full"
                                            >
                                                {/* Image Container */}
                                                <div className="w-80 h-80">
                                                    {/* Increased width and height  */}
                                                    <div className="relative w-full h-80 overflow-hidden transition-opacity duration-300 group">
                                                        <img
                                                            src={
                                                                product.defaultImage
                                                            }
                                                            alt="default"
                                                            className="absolute h-full w-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                                                        />
                                                        <img
                                                            src={
                                                                product.hoverImage
                                                            }
                                                            alt="hover"
                                                            className="absolute h-full w-full object-cover transition-opacity opacity-0 group-hover:opacity-100 hover:transition-transform duration-1000 transform hover:scale-105"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Content Container */}
                                                <div className="w-full h-96 px-8 text-black">
                                                    <h2 className="mb-3 text-xs text-gray-500 font">
                                                        {product.title}
                                                        {product.id}
                                                    </h2>
                                                    <div className="flex justify-between text-center items-center mb-4 text-base hover:underline underline-offset-4">
                                                        <span className="">
                                                            (Product{" "}
                                                            {
                                                                product.availProducts
                                                            }
                                                            )
                                                            {
                                                                product.description
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="text-sm font-normal text-gray-600">
                                                        {product.productDetails}
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="relative inline-block">
                                                            <span className="absolute inset-x-0 top-1/2 h-0.5 bg-stone-500 transform -translate-y-1/2"></span>
                                                            <span className="text-lg text-stone-400">
                                                                {
                                                                    product.cutmoney
                                                                }
                                                            </span>
                                                        </div>
                                                        <span className="font-bold">
                                                            <span className=" text-red-600">
                                                                {product.price}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    {/* Product Options */}
                                                    <div className="flex justify-start gap-2 pt-3">
                                                        <img
                                                            src="../src/assets/local-images/image5.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-8 w-8 border-stone-500 border-2"
                                                        />
                                                        <img
                                                            src="../src/assets/local-images/image2.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-8 w-8 border-stone-500 border-2"
                                                        />
                                                        <img
                                                            src="../src/assets/local-images/image4.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-8 w-8 border-stone-500 border-2"
                                                        />
                                                    </div>
                                                    <button className="text-black font-bold py-2 px-4 mt-5 w-52 bg-white hover:bg-black hover:text-white border border-black">
                                                        {product.btnText}
                                                    </button>
                                                    {/* Compare Checkbox */}
                                                    <div className="mt-2">
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
                                        ))}
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center items-center mt-10">
                                    <div class="ml-4 text-sm text-gray-600">
                                        Showing {startIndex} - {endIndex} of{" "}
                                        {totalProducts} total
                                    </div>
                                    <button
                                        class="text-black font-bold text-sm py-3 px-4 mt-5 w-72 uppercase bg-white hover:bg-black hover:text-white border border-black"
                                        onclick="showMoreItems()"
                                    >
                                        Show More
                                    </button>
                                </div>
                            </section>
                            // <NewinProducts />
                        )}
                        {viewOption === "option2" && (
                            <section>
                                <div className="overflow-hidden">
                                    <div className="grid grid-cols-2 gap-x-10 gap-y-12 place-items-center">
                                        {displayedProducts.map((product) => (
                                            <div
                                                key={product.id}
                                                className="w-68 h-full"
                                            >
                                                <div className="relative w-full h-screen overflow-hidden transition-opacity duration-300 group">
                                                    <img
                                                        src={
                                                            product.defaultImage
                                                        }
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
                                                            {
                                                                product.imagehoverbtnText
                                                            }
                                                        </button>
                                                        {/* Compare Checkbox */}
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
                                                <div className=" w-full h-auto px-2 my-4 text-black">
                                                    <h2 className="text-xs flex justify-center my-3 text-gray-500">
                                                        {product.title}
                                                    </h2>
                                                    <div className="flex justify-between text-center items-center px-8 text-xs hover:underline underline-offset-4">
                                                        <span className="">
                                                            (Product{" "}
                                                            {
                                                                product.availProducts
                                                            }
                                                            )
                                                            {
                                                                product.description
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-5 justify-center text-center mt-2">
                                                        <div className="relative inline-block">
                                                            <span className="absolute inset-x-0 top-1/2 h-0.5 bg-stone-500 transform -translate-y-1/2"></span>
                                                            <span className="text-lg text-stone-400">
                                                                {
                                                                    product.cutmoney
                                                                }
                                                            </span>
                                                        </div>
                                                        <span className="block font-bold text-red-600">
                                                            {product.price}
                                                        </span>
                                                    </div>
                                                    {/* Product Options */}
                                                    <div className="flex justify-center gap-2 pt-3">
                                                        <img
                                                            src="../src/assets/local-images/image5.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                                        />
                                                        <img
                                                            src="../src/assets/local-images/image2.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                                        />
                                                        <img
                                                            src="../src/assets/local-images/image4.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center items-center mt-10">
                                    <div class="ml-4 text-sm text-gray-600">
                                        Showing {startIndex} - {endIndex} of{" "}
                                        {totalProducts} total
                                    </div>
                                    <button
                                        class="text-black font-bold text-sm py-3 px-4 mt-5 w-72 uppercase bg-white hover:bg-black hover:text-white border border-black"
                                        onclick="showMoreItems()"
                                    >
                                        Show More
                                    </button>
                                </div>
                            </section>
                        )}
                        {viewOption === "option3" && (
                            <section>
                                <div className="overflow-hidden">
                                    <div className="grid grid-cols-3 gap-x-10 place-items-center">
                                        {displayedProducts.map((product) => (
                                            <div
                                                key={product.id}
                                                className="relative w-68 h-96 mb-48"
                                            >
                                                <div className="relative w-68 h-96 overflow-hidden transition-opacity duration-300 group">
                                                    <img
                                                        src={
                                                            product.defaultImage
                                                        }
                                                        alt="default"
                                                        className="absolute h-full w-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                                                    />
                                                    <img
                                                        src={product.hoverImage}
                                                        alt="hover"
                                                        className="absolute h-full w-full object-cover transition-opacity opacity-0 group-hover:opacity-100 hover:transition-transform duration-1000 transform hover:scale-105"
                                                    />
                                                    {/* Image Hover Btn */}
                                                    <div className="h-24 w-full absolute bottom-0 left-0 bg-white transition duration-700 opacity-0 group-hover:opacity-100">
                                                        <button className="text-black font-bold py-2 px-4 w-full absolute bottom-10 left-0 bg-white hover:bg-black hover:text-white border-2 border-black transition duration-700 opacity-0 group-hover:opacity-100">
                                                            {
                                                                product.imagehoverbtnText
                                                            }
                                                        </button>
                                                        {/* Compare Checkbox */}
                                                        <div className="flex justify-center mt-2 w-full absolute bottom-2 left-0">
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
                                                <div className=" w-full h-auto px-2 my-4 text-black">
                                                    <h2 className="text-xs flex justify-center my-3 text-gray-500">
                                                        {product.title}
                                                    </h2>
                                                    <div className="flex justify-between text-center items-center px-8 text-xs hover:underline underline-offset-4">
                                                        <span className="">
                                                            (Product{" "}
                                                            {
                                                                product.availProducts
                                                            }
                                                            )
                                                            {
                                                                product.description
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-5 justify-center text-center mt-2">
                                                        <div className="relative inline-block">
                                                            <span className="absolute inset-x-0 top-1/2 h-0.5 bg-stone-500 transform -translate-y-1/2"></span>
                                                            <span className="text-lg text-stone-400">
                                                                {
                                                                    product.cutmoney
                                                                }
                                                            </span>
                                                        </div>
                                                        <span className="block font-bold text-red-600">
                                                            {product.price}
                                                        </span>
                                                    </div>
                                                    {/* Product Options */}
                                                    <div className="flex justify-center gap-2 pt-3">
                                                        <img
                                                            src="../src/assets/local-images/image5.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                                        />
                                                        <img
                                                            src="../src/assets/local-images/image2.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                                        />
                                                        <img
                                                            src="../src/assets/local-images/image4.webp"
                                                            alt="Your Image"
                                                            className="rounded-3xl h-9 w-9 border-stone-500 border-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center items-center mt-10">
                                    <div class="ml-4 text-sm text-gray-600">
                                        Showing {startIndex} - {endIndex} of{" "}
                                        {totalProducts} total
                                    </div>
                                    <button
                                        class="text-black font-bold text-sm py-3 px-4 mt-5 w-72 uppercase bg-white hover:bg-black hover:text-white border border-black"
                                        onclick="showMoreItems()"
                                    >
                                        Show More
                                    </button>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </section>
        );
    };

    // Option-3 Sorting
    const [selectedOption, setSelectedOption] = useState("Featured");

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onChange(selectedValue);
    };

    return (
        <section className="container">
            <div className="flex justify-between items-center text-center">
                <ItemPerPageFilter
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    currentPage={currentPage}
                    totalProducts={totalProducts}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </section>
    );
};

export default FilterableCard;
