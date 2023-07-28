"use client";

import CartList from "@/components/cart/CartList";
import CartDetails from "@/components/cart/CartDetails";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const CartPage = () => {

    const cartData = useQuery({
        queryFn: async () => {
            return await axios.get("/api/account/cart");
        },
        queryKey: ["account", "cart"],
    });

    if (cartData.isLoading) {
        return (
            <h1 className="text-3xl font-bold tracking-widest">Loading...</h1>
        );
    }

    if (cartData.isError) {
        return (
            <h1 className="text-3xl font-bold tracking-widest">
                Error: {JSON.stringify(cartData.error.message)}
            </h1>
        );
    }

    const products = cartData?.data.data.cart.products;
    const details = cartData?.data.data.cart;

    return (
        <>
            <h1 className="text-3xl font-bold tracking-widest">Cart Products</h1>
            <div className="flex justify-evenly flex-col lg:flex-row relative gap-5">
                <CartList products={products} />
                <CartDetails details={details} />
            </div>
        </>
    );
};

export default CartPage;
