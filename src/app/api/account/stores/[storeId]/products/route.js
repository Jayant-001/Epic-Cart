import { connectDB } from "@/config/db";
import { extractToken } from "@/helper/extractToken";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req) {
    try {
        const userId = await extractToken(req);
        const data = await req.json();
        data.ownerId = userId;

        console.log(data);

        let product = await Product(data);
        product = await product.save();

        return NextResponse.json(
            {
                message: "Product added to your store.",
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
    try {
        const {id} = await req.json();

        await Product.findByIdAndDelete(id);
        return NextResponse.json(
            {
                message: "Product deleted.",
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
