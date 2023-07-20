"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ListProducts from "../products/ListProducts";
import Link from "next/link";

const FeaturedProducts = () => {
    const limit = 8;
    const getQuery = useQuery({
        queryFn: async () => {
            return await axios.get(`/api/products?limit=${limit}`);
        },
        queryKey: ["home", "featured"],
    });

    const { data, error, isLoading, isError } = getQuery;

    return (
        <div className="space-y-5">
            <div className="flex justify-between w-full items-center">
                <h4 className="text-xl md:text-3xl font-semibold tracking-wider">
                    Featured products
                </h4>
                <Link href="/products">
                    <button className="bg-gray-800 text-white py-2 px-4 shadow font-medium text-sm md:text-base duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg ">
                        View all
                    </button>
                </Link>
            </div>
            <div className="border rounded-lg">
                {isLoading ? (
                    <div className="min-h-[100px] flex justify-center items-center">
                        <h1 className="text-xl md:text-3xl tracking-widest font-semibold">
                            Loading...
                        </h1>
                    </div>
                ) : isError ? (
                    <div className="min-h-[100px] flex justify-center items-center flex-col p-2">
                        <h1 className="sm:text-xl md:text-2xl tracking-widest font-semibold text-center">
                            {error.message} 😁
                        </h1>
                        <p>Please refresh the page</p>
                    </div>
                ) : (
                    <ListProducts products={data.data.products} />
                )}
            </div>
        </div>
    );
};

export default FeaturedProducts;
