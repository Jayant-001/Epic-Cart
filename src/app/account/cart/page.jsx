"use client";

import axios from "axios";

const CartPage = () => {
    const product = {
        id: "64ae46e8375ce63650a75390",
        name: "Demo product 1",
        price: 2390,
        quantity: 2,
    };

    const sendData = async () => {
        const { data, error } = await axios.post("/api/account/cart", {
            product,
        });
        if (error) {
            console.log(error);
            throw new Error(error.message);
        }
        console.log(data);
    };

    const fetchCart = async () => {
        const { data, error } = await axios.get("/api/account/cart");

        if (error) {
            console.log(error);
            throw new Error(error.message);
        }
        console.log(data);
    };

    return (
        <div>
            <button className="p-2 m-2 bg-green-700 text-white rounded-lg shadow" onClick={sendData}>Send </button>
            <button className="p-2 m-2 bg-red-700 text-white rounded-lg shadow" onClick={fetchCart}>Get </button>
        </div>
    );
};

export default CartPage;
