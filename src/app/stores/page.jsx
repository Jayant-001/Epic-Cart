"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const StoresPage = () => {
    const [seller, setSeller] = useState(null);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["stores"],
        queryFn: async () => {
            return await axios.get("/api/stores");
        },
    });

    if (isLoading) {
        return (
            <div className="min-h-[100px] flex justify-center items-center">
                <h1 className="text-xl md:text-3xl tracking-widest font-semibold">
                    Loading...
                </h1>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="min-h-[100px] flex justify-center items-center">
                <h1 className="text-xl md:text-3xl tracking-widest font-semibold">
                    {error.message}
                </h1>
            </div>
        );
    }

    const sellers = [
        {
            title: "seller 1",
            id: 1,
        },
        {
            title: "seller 2",
            id: 2,
        },
        {
            title: "seller 3",
            id: 3,
        },
        {
            title: "seller 4",
            id: 4,
        },
        {
            title: "seller 5",
            id: 5,
        },
        {
            title: "seller 2",
            id: 6,
        },
        {
            title: "seller 3",
            id: 7,
        },
        {
            title: "seller 4",
            id: 8,
        },
    ];
    const selectSeller = (e) => {
        setSeller(e);
    };

    console.log(data.data.stores);
    
    return (
        <div className="flex h-full">
            <div className="w-fit border-r pr-4 max-h-screen overflow-auto">
                <h2 className="text-xl font-semibold">Top sellers</h2>
                <div className="space-y-2 mt-5 text-lg">
                    {sellers.map((item, id) => {
                        return (
                            <Link
                                href={`/stores?seller=${item.id}`}
                                key={item.id}
                                className="flex gap-1"
                            >
                                <input
                                    onChange={(e) => selectSeller(item.id)}
                                    type="checkbox"
                                    checked={item.id === seller}
                                />
                                <p>{item.title}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="flex-grow pl-4">
                <h2 className="text-xl font-semibold">All Stores</h2>
            </div>
        </div>
    );
};

export default StoresPage;
