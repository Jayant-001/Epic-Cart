"use client";
import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filters = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
 
    const categories = [
        "All",
        "Electronics",
        "Accessories",
        "Beauty",
        "Men",
        "Women",
        "Kids",
    ];
    const prices = [
        {
            name: "All",
            value: "all",
        },
        {
            name: "Less than 50000",
            value: 50000,
        },
        {
            name: "Less than 25000",
            value: 25000,
        },
        {
            name: "Less than 10000",
            value: 10000,
        },
        {
            name: "Less than 5000",
            value: 5000,
        },
    ];
    const orders = [
        {
            name: "All",
            value: "all",
        },
        {
            name: "Newer",
            value: "newer",
        },
        {
            name: "Older",
            value: "older",
        },
    ];

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    return (
        <div>
            <div className="flex space-x-3">
                <div className="sm:col-span-3">
                    <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium  "
                    >
                        Select category
                    </label>
                    <select
                        onChange={(e) =>
                            router.push(
                                pathname +
                                    "?" +
                                    createQueryString(
                                        "category",
                                        e.target.value.toLowerCase()
                                    )
                            )
                        }
                        name="category"
                        id="category"
                        // value={category}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
                    >
                        {categories.map((cat, id) => (
                            <option key={id}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="sm:col-span-3">
                    <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium  "
                    >
                        Select Price
                    </label>
                    <select
                        onChange={(e) => {
                            router.push(
                                pathname +
                                    "?" +
                                    createQueryString(
                                        "price",
                                        e.target.value.toLowerCase()
                                    )
                            );
                        }}
                        name="price"
                        id="price"
                        // value={price}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
                    >
                        {prices.map((item, id) => (
                            <option key={id} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="sm:col-span-3">
                    <label
                        htmlFor="order"
                        className="block mb-2 text-sm font-medium  "
                    >
                        Select Order
                    </label>
                    <select
                        onChange={(e) => {
                            router.push(
                                pathname +
                                    "?" +
                                    createQueryString(
                                        "order",
                                        e.target.value.toLowerCase()
                                    )
                            );
                        }}
                        name="order"
                        id="order"
                        // value={order}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
                    >
                        {orders.map((item, id) => (
                            <option key={id} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filters;
