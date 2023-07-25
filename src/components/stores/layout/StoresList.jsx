"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaStoreAlt } from "react-icons/fa";
import Link from "next/link";
import StoreCard from "../StoreCard";

const StoresList = () => {
    const demoStores = [
        {
            _id: 1,
            title: "Store 1",
            productsCount: 19,
        },
        {
            _id: 2,
            title: "Store 2",
            productsCount: 19,
        },
        {
            _id: 3,
            title: "Store 3",
            productsCount: 19,
        },
        {
            _id: 4,
            title: "Store 4",
            productsCount: 19,
        },
    ];

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["account", "stores"],
        queryFn: async () => {
            return await axios.get("/api/account/stores");
        },
    });

    const styles = "w-full text-center text-lg md:text-2xl my-10";

    if (isError) {
        return <h1 className={styles}>{error.message}</h1>;
    }
    if (isLoading) {
        return <h1 className={styles}>Loading data...</h1>;
    }

    const stores = data?.data?.stores;
    return (
        <div>
            <div className="flex flex-wrap my-5">
                {stores?.map((store) => (
                    <StoreCard key={store._id} data={store} />
                ))}
            </div>
        </div>
    );
};


export default StoresList;
