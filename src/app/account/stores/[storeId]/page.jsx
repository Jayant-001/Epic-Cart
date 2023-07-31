"use client";
import BreadCrumb from "@/components/BreadCrumb";
import StoreProductsList from "@/components/stores/ProductsList";
import UpdateStoreForm from "@/components/stores/UpdateStoreForm";
import StoreOrdersList from "@/components/stores/orders/StoreOrdersList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";

const StoreDetailsPage = ({ params }) => {
    const { storeId } = params;

    const links = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Account",
            url: "/account/profile",
        },
        {
            title: "Stores",
            url: "/account/stores",
        },
        {
            title: "storename",
            url: `/account/stores/${storeId}`,
        },
    ];

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["account", "store", "details"],
        queryFn: async () => {
            return await axios.get(`/api/account/stores/${storeId}`);
        },
    });

    const styles = "w-full text-center text-lg md:text-2xl my-10";

    if (isLoading) {
        return <h1 className={styles}>Store is loading...</h1>;
    }
    if (isError) {
        return <h1 className={styles}>{error.message}</h1>;
    }

    // console.log(data.data.store);
    const storeData = {
        storeId,
        title: data.data.store.title,
        desc: data.data.store.desc,
        orders: data.data.store.orders,
    };
    links.at(-1).title = storeData.title;

    return (
        <div>
            <BreadCrumb links={links} />
            <StoreAddProduct id={storeId} />
            <StoreProductsList
                storeId={storeId}
                products={data.data.store.products}
            />
            <StoreOrdersList orders={storeData.orders} />
            <UpdateStoreForm storeData={storeData} />
        </div>
    );
};

const StoreAddProduct = ({ id }) => {
    return (
        <div className="my-2 flex justify-center items-center flex-col gap-1 border rounded-lg py-2 w-full">
            <h3 className="text-xl lg:text-2xl font-semibold">
                Add more products
            </h3>
            <Link
                href={`/account/stores/${id}/addProduct`}
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
            >
                Add now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default StoreDetailsPage;
