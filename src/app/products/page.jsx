import ListProducts from "@/components/products/ListProducts";
import axios from "axios";

const fetchProducts = async () => {
    const { data, error } = await axios.get(
        `${process.env.API_URL}/api/products`
    );

    if (error) return [];
    // console.log("Data ", data)
    // console.log("Error ", error)

    return data.products;
};

const page = async () => {
    const products = await fetchProducts();

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

    if (products.length === 0) {
        return <h1>No products found</h1>;
    }

    return <ListProducts products={products} />;
};

export default page;
