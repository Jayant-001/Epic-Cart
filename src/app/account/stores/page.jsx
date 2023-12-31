"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import StoresList from "@/components/stores/layout/StoresList";
import Link from "next/link";
import { FaStoreAlt } from "react-icons/fa";

const StorePage = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["account", "stores"],
        queryFn: async () => {
            return await axios.get("/api/account/stores");
        },
    });

    const styles = "w-full text-center text-lg md:text-2xl my-10";

    return (
        <div className="">
            <h1 className="text-xl md:text-3xl font-medium md:font-bold ">
                Manage your stores
            </h1>
            <CreateStore />

            {isLoading ? (
                <h1 className={styles}>Loading data...</h1>
            ) : isError ? (
                <h1 className={styles}>{error.message}</h1>
            ) : (
                // <h1>{JSON.stringify(data?.data?.stores)}</h1>
                <StoresList stores={data?.data?.stores} />
            )}
        </div>
    );
};

const CreateStore = () => {
    return (
        <div className="w-full flex flex-col sm:flex-row justify-center gap-5 items-center py-5 mx-2 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaStoreAlt className="text-white w-8 h-8" />
            <Link
                href={`/account/stores/create`}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Create a new one
            </Link>
        </div>
    );
};

export default StorePage;
