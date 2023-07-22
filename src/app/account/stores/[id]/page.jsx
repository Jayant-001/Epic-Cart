import BreadCrumb from "@/components/BreadCrumb";
import ListProducts from "@/components/products/ListProducts";
import CreateStoreForm from "@/components/stores/CreateStoreForm";
import React from "react";

const StoreDetailsPage = ({ params }) => {
    const { id } = params;
    console.log(id);

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
        <div>
            <BreadCrumb />
            <CreateStoreForm />
            <ListProducts products={demoProducts} />
        </div>
    );
};

export default StoreDetailsPage;
