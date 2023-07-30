"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import { FiXCircle } from "react-icons/fi";

const StoreProductsList = ({ storeId, products }) => {
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
            <h1 className="text-gray-600 font-bold text-2xl my-2">Products</h1>
            {products.length > 0 ? (
                products.map((product, id) => (
                    <StoreProductItem
                        key={id}
                        storeId={storeId}
                        product={product}
                    />
                ))
            ) : (
                <h1 className="text-center text-lg">No Products listed</h1>
            )}
        </div>
    );
};

const StoreProductItem = ({ storeId, product }) => {
    const imageurl =
        "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg";
    const queryClient = useQueryClient();

    const productDeleteMutation = useMutation({
        mutationFn: async (id) =>
            await axios.delete(`/api/account/stores/${storeId}/products`, {
                data: { id },
            }),
        onSuccess: () => {
            queryClient.invalidateQueries(["account", "store", "details"]);
            toast.success("Item deleted");
        },
    });

    const deleteProduct = (e) => {
        e.preventDefault();

        productDeleteMutation.mutate(product._id);
    };

    const styles = {
        buttonAccept:
            "px-2 py-1 rounded-lg shadow bg-green-300 active:bg-green-400 cursor-pointer",
        buttonDecline:
            "px-2 py-1 rounded-lg shadow bg-red-300 active:bg-red-400 cursor-pointer",
    };

    return (
        <div className="px-5 py-2 flex items-center justify-between border-t">
            <div className="flex items-center relative">
                <Image
                    src={product?.images[0] || imageurl}
                    width={0}
                    alt="product image"
                    height={0}
                    sizes="100vw"
                    style={{ width: "50px", height: "auto" }} // optional
                />
                <div className="flex ml-2 flex-col h-full justify-center">
                    <h1 className="font-medium text-base sm:text-lg text-gray-600">
                        {product.name}
                    </h1>
                    <p>
                        ₹{product.price} | <span>{product.stock}</span> stocks
                    </p>
                </div>
            </div>
            <div className="space-x-2 text-sm sm:text-base">
                <button
                    className={styles.buttonDecline}
                    onClick={deleteProduct}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default StoreProductsList;
