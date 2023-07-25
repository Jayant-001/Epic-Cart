"use client";
import React from "react";
import { toast } from "react-hot-toast";

const StoreOrdersList = () => {
    const demoOrders = [
        {
            title: "Mobile 64gb",
            quantity: 482,
            price: 2903,
        },
        {
            title: "Order 2",
            quantity: 42,
            price: 2948,
        },
        {
            title: "Order 3",
            quantity: 2,
            price: 293,
        },
        {
            title: "Mac book",
            quantity: 10,
            price: 24839,
        },
    ];

    return (
        <div className="mt-5">
            <h1 className="text-gray-600 font-bold text-2xl my-2">Orders</h1>
            {demoOrders.map((order, id) => (
                <OrderListItem key={id} order={order} />
            ))}
        </div>
    );
};

const OrderListItem = ({ order }) => {
    const onAcceptOrder = (e) => {
        e.preventDefault();

        toast.success("Order accepted");
    };

    const onDeclineOrder = (e) => {
        e.preventDefault();

        toast.error("Order declined");
    };

    const styles = {
        buttonAccept:
            "px-2 py-1 rounded-lg shadow bg-green-300 active:bg-green-400 cursor-pointer",
        buttonDecline:
            "px-2 py-1 rounded-lg shadow bg-red-300 active:bg-red-400 cursor-pointer",
    };

    return (
        <div className="px-5 py-2 flex items-center justify-between border-t gap-10 relative">
            <div className="flex flex-col h-full justify-center">
                <h1 className="font-medium text-base sm:text-lg text-gray-600">
                    {order.title}
                </h1>
                <p className="text-sm">
                    <span>{order.quantity}</span> stocks | ₹{order.price}
                </p>
            </div>
            <div className="space-x-2 text-sm sm:text-base">
                <button className={styles.buttonAccept} onClick={onAcceptOrder}>
                    Accept
                </button>
                <button
                    className={styles.buttonDecline}
                    onClick={onDeclineOrder}
                >
                    Decline
                </button>
            </div>
        </div>
    );
};

export default StoreOrdersList;
