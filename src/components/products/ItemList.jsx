import Link from "next/link";
import React from "react";

const ItemList = ({ product }) => {
    const demoImageUrl =
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg";
    return (
        <div key={product._id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={product.images[0] || demoImageUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={`products/${product._id}`}>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0"
                            />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Seller {product.seller}
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    ₹{product.price}
                </p>
            </div>
        </div>
    );
};

export default ItemList;