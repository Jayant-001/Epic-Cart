import React from "react";

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
            <h1 className="text-gray-600 font-bold text-2xl my-2">
                Store products
            </h1>
            {demoOrders.map((order, id) => (
                <OrderListItem key={id} order={order} />
            ))}
        </div>
    );
};

const OrderListItem = ({ order }) => {
    return (
        <div>
            <h1>{order.title}</h1>
            <p>{order.quantity}</p>
            <p>{order.price}</p>
        </div>
    );
};

export default StoreOrdersList;
