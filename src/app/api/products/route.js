import { connectDB } from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
    try {
        const products = await Product.find();

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
        const { name, description, price, stock, seller, images } =
            await req.json();

        const toAddProduct = {
            name,
            description,
            price,
            stock,
            seller,
            images,
        };

        let product = await Product(toAddProduct);
        product = await product.save();

        return NextResponse.json(
            {
                success: false,
                product,
            },
            { status: 201 }
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

export async function DELETE() {
    try {
        await Product.deleteMany();

        return NextResponse.json(
            {
                success: true,
                message: "All products deleted",
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
