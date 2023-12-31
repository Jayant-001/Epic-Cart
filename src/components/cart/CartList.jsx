import CartItem from "./CartItem";

const CartList = ({products}) => {

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
        <div className="w-full">
            {products?.map((product, id) => (
                <CartItem product={product} key={id} />
            ))}
        </div>
    );
};

export default CartList;
