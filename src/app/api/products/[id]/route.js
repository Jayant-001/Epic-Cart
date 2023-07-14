
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/config/db";

connectDB();

export async function GET(req, { params }) {
    try {
        const { id } = await params; // 64ae46f0375ce63650a75392
        const isValidId = mongoose.isValidObjectId(id);
        if (isValidId === false) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid Product Id",
                },
                { status: 400 }
            );
        }

        const product = await Product.findById(id);
        if (product === null) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Product not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                product,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log(error.message);
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const isValidId = mongoose.isValidObjectId(id);
        if (isValidId === false) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid Product Id",
                },
                { status: 400 }
            );
        }

        const { name, description, price, stock, seller, images } =
            await req.json();
        const toUpdateProduct = {
            name,
            description,
            price,
            stock,
            seller,
            images,
        };

        const res = await Product.findByIdAndUpdate(id, toUpdateProduct);

        if (res === null)
            return NextResponse.json(
                { success: false, msg: "Invalid update request" },
                { status: 400 }
            );

        return NextResponse.json(
            { success: true, updatedProduct: res },
            { status: 204 }
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

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        const isValidId = mongoose.isValidObjectId(id);
        if (isValidId === false) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid Product Id",
                },
                { status: 400 }
            );
        }

        await Product.findByIdAndDelete(id);

        return NextResponse.json(
            {
                success: true,
                message: "Product Deleted",
            },
            { status: 204 }
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
