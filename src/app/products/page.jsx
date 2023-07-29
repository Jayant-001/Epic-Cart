import Filters from "@/components/products/Filters";
import ListProducts from "@/components/products/ListProducts";
import axios from "axios";

const fetchProducts = async (category, limit, order) => {
    const { data, error } = await axios.get(
        `${process.env.API_URL}/api/products?category=${category}&limit=${limit}&order=${order}`
    );

    if (error) return [];
    // console.log("Data ", data)
    // console.log("Error ", error)

    return data.products;
};

const ProductsPage = async ({ searchParams }) => {
    const { category, limit, order } = searchParams;

    // console.log(category, limit, order);
    const products = await fetchProducts(category, limit, order);

    const demoProducts = [
        {
            id: 1,
            name: "Basic Tee",
            href: "products/productid",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: "$35",
            color: "Black",
        },
        {
            id: 2,
            name: "Basic Tee",
            href: "products/product",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: "$35",
            color: "Black",
        },
        {
            id: 3,
            name: "Basic Tee",
            href: "#",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: "$35",
            color: "Black",
        },
        {
            id: 4,
            name: "Basic Tee",
            href: "#",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: "$35",
            color: "Black",
        },
        {
            id: 5,
            name: "Basic Tee",
            href: "#",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: "$35",
            color: "Black",
        },
    ];

    return (
        <>
            <h2 className="mt-10 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider text-gray-900">
                All Products
            </h2>
            <Filters />
            {products.length > 0 ? (
                <ListProducts products={products} />
            ) : (
                <h1 className="text-center text-[4vw] my-5">No products found</h1>
            )}
        </>
    );
};

export default ProductsPage;
