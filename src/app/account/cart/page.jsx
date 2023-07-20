"use client";

import CartList from "@/components/cart/CartList";
import CartDetails from "@/components/cart/CartDetails";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const CartPage = () => {
    // const [dataa, setDataa] = useState(null);
    // useEffect(() => {
    //     fetchCart();
    // }, []);

    const cartData = useQuery({
        queryFn: async () => {
            return await axios.get("/api/account/cart");
        },
        queryKey: ["account", "cart"],
    });

    // const product = {
    //     id: "64ae46e8375ce63650a75390",
    //     name: "Demo product 1",
    //     price: 2390,
    //     quantity: 2,
    // };

    // const sendData = async () => {
    //     const { data, error } = await axios.post("/api/account/cart", {
    //         product,
    //     });
    //     if (error) {
    //         console.log(error);
    //         throw new Error(error.message);
    //     }
    //     console.log(data);
    // };

    // const fetchCart = async () => {
    //     const { data, error } = await axios.get("/api/account/cart");

    //     if (error) {
    //         console.log(error);
    //         throw new Error(error.message);
    //     }
    //     setDataa(data.cartData);
    // };

    if (cartData.isLoading) {
        return (
            <h1 className="text-3xl font-bold tracking-widest">Loading...</h1>
        );
    }

    if (cartData.isError) {
        return (
            <h1 className="text-3xl font-bold tracking-widest">
                Error: {JSON.stringify(cartData.error.message)}
            </h1>
        );
    }

    const products = cartData?.data.data.cart.products;
    const details = cartData?.data.data.cart;

    return (
        <>
            <h1 className="text-3xl font-bold tracking-widest">Cart Products</h1>
            <div className="flex justify-evenly flex-col lg:flex-row relative gap-5">
                <CartList products={products} />
                <CartDetails details={details} />
            </div>
        </>
    );
};

export default CartPage;
