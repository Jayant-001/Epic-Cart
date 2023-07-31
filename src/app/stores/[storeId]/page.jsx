"use client";
import ListProducts from "@/components/products/ListProducts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StoreDetailsPage = ({ params }) => {
    const { storeId } = params;

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["stores", "store"],
        queryFn: async () => {
            return await axios.get(`/api/stores/${storeId}`);
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

    const { storeDetails, products } = data.data;

    return (
        <div>
            <div className="">
                <h1 className="text-3xl ">
                    Welcome to{":= "}
                    <span className="font-bold">{storeDetails.name}</span>
                </h1>
                <p className="text-lg">
                    About us:={" "}
                    <span className="font-medium">{storeDetails.desc}</span>
                </p>
                <hr />
                <p className="text-lg">
                    Managed by:={" "}
                    <span className="font-semibold">
                        {storeDetails.ownerName}
                    </span>
                </p>
                <p>
                    Contact Email:={" "}
                    <span className="italic font-semibold">
                        {storeDetails.ownerEmail}
                    </span>
                </p>
            </div>
            <hr />
            <div>
                <ListProducts products={products} />
            </div>
        </div>
    );
};

export default StoreDetailsPage;
