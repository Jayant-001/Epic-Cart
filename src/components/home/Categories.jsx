import React from "react";
import {
    category_clothes,
    category_accessory,
    cateogry_electronics,
    category_beauty,
} from "@/assets/index";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
    const categories = [
        {
            title: "Electronics",
            image: cateogry_electronics,
        },
        {
            title: "Clothes",
            image: category_clothes,
        },
        {
            title: "Accessories",
            image: category_accessory,
        },
        {
            title: "Beauty",
            image: category_beauty,
        },
    ];

    return (
        <div className="my-10 flex jusitfy-center w-full items-center flex-col gap-5">
            <h1 className="text-6xl font-bold ">Categories</h1>
            <p className="text-gray-600">
                Explore our categories and find the best products for you
            </p>
            <div className="inline-grid md:grid grid-cols-1  md:grid-cols-2 justify-center items-center lg:grid-cols-4 w-full gap-5">
                {categories.map((item, id) => (
                    <Category key={id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Categories;

const Category = ({ item }) => {
    return (
        <Link
            href={`/products?category=${item.title.toLowerCase()}`}
            className="w-full max-w-[400px] cursor-pointer group flex justify-center items-center"
        >
            <div className="w-full h-52  relative group-hover:opacity-40 transition ease-in-out duration-500 hover:scale-110">
                <Image alt={item.title} src={item.image} fill={true} />
            </div>
            <p className="absolute text-slate-300 text-3xl font-bold z-5 group-hover:text-black">
                {item.title}
            </p>
        </Link>
    );
};
