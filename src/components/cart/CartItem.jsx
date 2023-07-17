"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiXCircle } from "react-icons/fi";
import Router from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const CartItem = ({ product }) => {
    const queryClient = useQueryClient();

    const demoImageUrl =
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg";
    const imageurl =
        "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg";

    const router = useRouter();

    const removeProduct = useMutation({
        mutationFn: async () => {
            const { data } = axios.delete("/api/account/cart", {
                data: { productId: product.id },
            });
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["account", "cart"]);
        },
    });

    const demoProduct = {
        id: "64ae46e8375ce63650a75390",
        name: "Demo product 1",
        price: 2390,
        quantity: 6,
        totalPrice: 14070,
        _id: "64aff378a28b0e536369913a",
    };

    const removeCartProduct = async () => {
        // const { data, error } = await axios.delete("/api/account/cart", {
        //     data: { productId: product.id },
        // });
        // router.replace('/account/cart');
        // Router.reload(window.location.pathname);
        // router.refresh();
        // console.log(data);
        // console.log(error);
    };

    return (
        <div className="p-5 flex border-t gap-10 relative">
            <Image
                src={imageurl}
                width={0}
                alt="product image"
                height={0}
                sizes="100vw"
                style={{ width: "150px", height: "auto" }} // optional
            />
            <div className="">
                <h1>{product.name}</h1>
                <p>Quantity: {product.quantity}</p>
                <p>Price per unit: {product.price}</p>
                <p>Total: {product.totalPrice}</p>
            </div>
            <FiXCircle
                onClick={removeCartProduct}
                className="absolute right-5 text-2xl hover:text-red-600 hover:cursor-pointer top-5"
            />
        </div>
    );
};

export default CartItem;
