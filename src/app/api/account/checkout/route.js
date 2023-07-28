import { connectDB } from "@/config/db";
import { extractToken } from "@/helper/extractToken";
import Cart from "@/models/Cart";
import Store from "@/models/Store";
import User from "@/models/User";
import { NextResponse } from "next/server";

connectDB();
export async function POST(req) {
    try {
        const userId = await extractToken(req);

        // get the users cart
        const cart = await Cart.findOne({ userId: userId });

        // traverse through all products in cart
        cart.products.forEach(async (product) => {
            const orderData = {
                title: product.name,
                quantity: product.quantity,
                price: product.totalPrice,
                buyerId: userId,
                orderid: product._id,
            };

            // push product to users purchases array
            await User.findByIdAndUpdate(userId, {
                $push: { purchases: orderData },
            });

            // push product to store's orders array
            await Store.findByIdAndUpdate(product.storeId, {
                $push: { orders: orderData },
            });
        });

        // delete entries from cart 
        await Cart.findOneAndUpdate(
            { userId: userId },
            {
                $pull: { products: {} },
                $set: { productsCount: 0, totalPrice: 0 },
            },
            { multi: true }
        );

        return NextResponse.json(
            {
                message: "Order sent",
            },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: error.message,
            },
            { status: 500 }
        );
    }
}
