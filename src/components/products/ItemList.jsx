"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";

const ItemList = ({ product }) => {
    const queryClient = useQueryClient();

    const addToCartMutation = useMutation({
        mutationKey: ["cart", "add"],
        mutationFn: async (payload) => {
            return await axios.post("/api/account/cart", payload);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["account", "cart"]);
        },
    });

    const addToCart = async (e) => {
        e.preventDefault();

        addToCartMutation.mutate({
            id: product?._id,
            name: product?.name,
            quantity: 1,
            price: product?.price,
            storeId: product?.storeId,
        });

        const { isError, error } = addToCartMutation;

        if (isError) {
            toast.error(error.message);
            return;
        }
        toast.success("Added to cart");
    };

    const demoImageUrl =
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg";

    return (
        <div key={product._id} className="group relative border rounded-lg">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={product.images[0] || demoImageUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 px-2">
                <h4 className="text-lg font-semibold text-gray-800">
                    {/* <Link href={`products/${product._id}`}> */}
                    {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                    {product.name}
                    {/* </Link> */}
                </h4>

                <p className=" font-medium text-gray-900">₹{product.price}</p>
                <div className="flex justify-evenly gap-2 w-full my-2">
                    <Link
                        href={`products/${product._id}`}
                        className="text-sm flex items-center justify-center py-2 px-2 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg w-full"
                    >
                        Preview
                    </Link>
                    <button
                        onClick={addToCart}
                        className="text-sm flex items-center justify-center py-2 px-2 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg w-full"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemList;
