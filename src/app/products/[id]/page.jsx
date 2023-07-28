import BreadCrumb from "@/components/BreadCrumb";
import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";
import React from "react";

const fetchProduct = async (id) => {
    try {
        const { data, error } = await axios.get(
            `${process.env.API_URL}/api/products/${id}`
        );
        if (error) return null;
        return data.product;
    } catch (error) {
        return null;
    }
};

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    const product = await fetchProduct(id);
    const links = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "All products",
            url: "/products",
        },
        {
            title: product.name,
            url: `/products/${product._id}`,
        },
    ];

    return (
        <>
            <BreadCrumb links={links} />
            <ProductDetails product={product} />
        </>
    );
};

export default ProductDetailsPage;
