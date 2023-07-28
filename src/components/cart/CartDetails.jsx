"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

const CartDetails = ({ details }) => {
    const queryClient = useQueryClient();
    const checkoutQuery = useMutation({
        mutationFn: async () => {
            return await axios.post("/api/account/checkout");
        },
        onError: (error) => {
            toast.error("Error ", error.message);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["account", "cart"]);
            toast.success("Order sent successfully");
        },
    });

    const onCheckout = async (e) => {
        e.preventDefault();
        checkoutQuery.mutate();
    };

    return (
        <div className="bg-gray-100 space-y-2 py-10 px-2 shadow  w-full lg:w-[70%] lg:sticky top-24 h-fit">
            <h1>Cart Details </h1>
            <h4>Total product quantity {details?.productsCount}</h4>
            <h4>Total cart amount {details?.totalPrice}</h4>
            <button
                onClick={onCheckout}
                title="Buy now"
                className="flex mx-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            >
                Checkout
            </button>
        </div>
    );
};

export default CartDetails;
