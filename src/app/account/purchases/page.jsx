"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PurchasesPage = () => {
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["account", "purchases"],
        queryFn: async () => {
            return await axios("/api/account/purchases"); 
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

    const purchases = data.data.purchases;

    return (
        <div>
            <h1 className="text-xl md:text-3xl tracking-widest font-semibold my-2">
                Past purchases
            </h1>
            {purchases.map((product, id) => {
                return <PurchaseItem key={id} product={product} />;
            })}
        </div>
    );
};

const PurchaseItem = ({ product }) => {
    console.log(product);

    return (
        <div className="px-5 py-2 flex items-center justify-between border-t">
            <div className="flex items-center relative">
                <div className="flex flex-col h-full justify-center">
                    <h1 className="font-medium text-base sm:text-lg text-gray-600">
                        {product.title}
                    </h1>
                    <p>
                        ₹{product.price} | <span>{product.quantity}</span>{" "}
                        quantity
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PurchasesPage;
