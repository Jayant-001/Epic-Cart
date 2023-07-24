"use client";
import Image from "next/image";
import React from "react";
import { FiXCircle } from "react-icons/fi";

const StoreProductsList = () => {

    const demoProducts = [
        {
            _id: "64b8da47f0ef140b2606b692",
            name: "Paint ",
            description: "Paint is hello new",
            price: 3322,
            stock: 103,
            seller: "Jaya tech for men",
            images: [],
            category: "men",
            createdAt: "2023-07-20T06:55:03.832Z",
            __v: 0,
        },
        {
            _id: "64b8da7df0ef140b2606b699",
            name: "Clothes 1 ",
            description: "Clothes for women",
            price: 3322,
            stock: 103,
            seller: "Momen store",
            images: [],
            category: "women",
            createdAt: "2023-07-20T06:55:57.550Z",
            __v: 0,
        },
        {
            _id: "64b8da88f0ef140b2606b69b",
            name: "Clothes 2",
            description: "Clothes for women and ",
            price: 332,
            stock: 103,
            seller: "Momen store",
            images: [],
            category: "women",
            createdAt: "2023-07-20T06:56:08.051Z",
            __v: 0,
        },
        {
            _id: "64b8da8cf0ef140b2606b69d",
            name: "Clothes 3",
            description: "Clothes for women and ",
            price: 332,
            stock: 103,
            seller: "Momen store",
            images: [],
            category: "women",
            createdAt: "2023-07-20T06:56:12.051Z",
            __v: 0,
        },
        {
            _id: "64b8da88f0ef140b2606b69b",
            name: "Clothes 2",
            description: "Clothes for women and ",
            price: 332,
            stock: 103,
            seller: "Momen store",
            images: [],
            category: "women",
            createdAt: "2023-07-20T06:56:08.051Z",
            __v: 0,
        },
        {
            _id: "64b8da8cf0ef140b2606b69d",
            name: "Clothes 3",
            description: "Clothes for women and ",
            price: 332,
            stock: 103,
            seller: "Momen store",
            images: [],
            category: "women",
            createdAt: "2023-07-20T06:56:12.051Z",
            __v: 0,
        },
    ];

    return (
        <div className="mt-5">
            <h1 className="text-gray-600 font-bold text-2xl my-2">Store products</h1>
            {demoProducts.map((product, id) => (
                <StoreProductItem key={id} product={product} />
            ))}
        </div>
    );
};

const StoreProductItem = ({ product }) => {
    const imageurl =
        "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg";

    const removeCartProduct = (e) => {
        e.preventDefault();
    };

    return (
        <div className="px-5 py-2 flex items-center border-t gap-10 relative">
            <Image
                src={imageurl}
                width={0}
                alt="product image"
                height={0}
                sizes="100vw"
                style={{ width: "50px", height: "auto" }} // optional
            />
            <div className="flex flex-col h-full justify-center">
                <h1 className="font-medium text-gray-600">{product.name}</h1>
                <p>
                    ₹{product.price} | <span>{product.stock}</span> stocks
                </p>
            </div>
            <FiXCircle
                onClick={removeCartProduct}
                className="absolute right-5 text-2xl hover:text-red-600 hover:cursor-pointer top-5"
            />
        </div>
    );
};

export default StoreProductsList;
