"use client";

import axios from "axios";
import Image from "next/image";
import { FiXCircle } from "react-icons/fi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CartItem = ({ product }) => {
    const queryClient = useQueryClient();
    const [quantity, setQuantity] = useState(product.quantity);

    const demoImageUrl =
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg";
    const imageurl =
        "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg";

    const removeProductQuery = useMutation({
        mutationFn: async (productId) => {
            const {data} = await axios.patch("/api/account/cart", { productId });
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
        removeProductQuery.mutate(product.id);
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
                <p>Price per unit: {product.price}</p>
                <p>Total: {product.totalPrice}</p>
                <div className="flex items-center">
                    <span className="mr-3">Quantity</span>
                    <div className="flex space-x-1">
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(e.target.value);
                            }}
                            className=" w-16 text-center  h-10 flex items-center justify-center rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base"
                        />

                        <div className="flex flex-col text-white rounded">
                            <button
                                onClick={(e) => setQuantity(quantity + 1)}
                                className="border border-green-400 rounded-t text-green-400 w-10 h-5 flex items-center justify-center"
                            >
                                <AiFillCaretUp />
                            </button>
                            <button
                                onClick={(e) =>
                                    setQuantity(Math.max(1, quantity - 1))
                                }
                                className="border border-red-400 rounded-b text-red-400 w-10 h-5 flex items-center justify-center"
                            >
                                <AiFillCaretDown />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FiXCircle
                onClick={removeCartProduct}
                className="absolute right-5 text-2xl hover:text-red-600 hover:cursor-pointer top-5"
            />
        </div>
    );
};

export default CartItem;
