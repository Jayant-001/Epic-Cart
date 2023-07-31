"use client";
import StoresList from "@/components/stores/layout/StoresList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

const StoresPage = ({}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const seller = searchParams.get("seller");
    console.log(seller);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const [selectedSeller, setSelectedSeller] = useState(null);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["stores"],
        queryFn: async () => {
            return await axios.get(`/api/stores?seller=${seller}`);
        },
    });

    const sellersQuery = useQuery({
        queryKey: ["stores", "sellers"],
        queryFn: async () => {
            return await axios.get("/api/users");
        },
    });

    console.log(sellersQuery?.data?.data);

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

    const users = sellersQuery?.data?.data?.users;

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
        setSelectedSeller(e);
    };

    return (
        <div className="flex h-full">
            <div className="w-fit border-r pr-4 max-h-screen overflow-auto">
                <h2 className="text-xl font-semibold">Top sellers</h2>
                {isLoading ? (
                    <h1>Sellers are loading</h1>
                ) : isError ? (
                    <h1>{error.message}</h1>
                ) : (
                    <div className="space-y-2 mt-5 text-lg">
                        
                        {users.map((item) => {
                            return (
                                <Link
                                    href={`/stores?seller=${item._id}`}
                                    key={item.id}
                                    className="flex gap-1"
                                >
                                    <input
                                        id={item._id}
                                        onChange={(e) => {
                                            selectSeller(item._id);
                                            router.push(
                                                pathname +
                                                    "?" +
                                                    createQueryString(
                                                        "seller",
                                                        e.target.value.toLowerCase()
                                                    )
                                            );
                                        }}
                                        type="checkbox"
                                        checked={item._id === selectedSeller}
                                    />
                                    <label htmlFor={item._id}>
                                        {item.name}
                                    </label>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="flex-grow pl-4">
                <h2 className="text-xl font-semibold">All Stores</h2>
                <StoresList stores={data.data.stores} />
            </div>
        </div>
    );
};

export default StoresPage;
