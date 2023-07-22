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
    // console.log(id);

    const product = await fetchProduct(id);

    return (
        <>
            <BreadCrumb />
            <ProductDetails product={product} />
        </>
    );
};

export default ProductDetailsPage;
