import { connectDB } from "@/config/db";
import { extractToken } from "@/helper/extractToken";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req) {
    try {
        const userId = await extractToken(req);

        const products = await Cart.findOne({ userId });

        return NextResponse.json(
            {
                success: true,
                products,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const userId = await extractToken(req);
        const { product } = await req.json();
        const { id, name } = product;
        const price = parseInt(product.price);
        const quantity = parseInt(product.quantity);

        // console.log(userId)
        // console.log(product);

        // return NextResponse.json(
        //     {
        //         message: "Cart updated.",
        //     },
        //     { status: 201 }
        // );

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId });
        }

        // Check if the product already exists in the cart
        const existingProduct = cart.products.find(
            (prd) => prd.id.toString() === id
        );

        if (existingProduct) {
            // If the product already exists, update its quantity, total price, and the cart's total price
            existingProduct.quantity += quantity;
            existingProduct.totalPrice += quantity * price;
            cart.totalPrice += quantity * price;
        } else {
            // If the product doesn't exist, add it to the cart's products array and update the cart's total price
            cart.products.push({
                id,
                name,
                quantity,
                price,
                totalPrice: quantity * price,
            });
            cart.totalPrice += quantity * price;
            cart.productsCount += 1;
        }

        // Save the updated cart
        await cart.save();

        return NextResponse.json(
            {
                message: "Cart updated.",
                cart,
            },
            { status: 201 }
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

export async function DELETE(req) {
    const userId = await extractToken(req);
    const { productId } = await req.json();

    try {
        // Find the cart for the user
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        // Find the index of the product in the products array
        const productIndex = cart.products.findIndex(
            (product) => product.id.toString() === productId
        );

        if (productIndex === -1) {
            return res
                .status(404)
                .json({ error: "Product not found in the cart" });
        }

        // Get the product details before removing it
        const { quantity, price } = cart.products[productIndex];

        // Update the cart's total price and products count
        cart.totalPrice -= quantity * price;
        cart.productsCount -= 1;

        // Remove the product from the products array
        cart.products.splice(productIndex, 1);

        // Save the updated cart
        await cart.save();

        res.status(200).json({ message: "Cart product deleted successfully" });
    } catch (err) {
        res.status(500).json({
            error: "An error occurred while deleting cart product",
        });
    }
}
