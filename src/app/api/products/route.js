import { connectDB } from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import { parse } from "url";

connectDB();

export async function GET(req) {
    try {
        const { query } = parse(req.url, true);
        let { category, limit, order } = query;

        console.log("Server ", category, typeof limit, order);
        // return NextResponse.json(
        //     {
        //         success: true,
        //         products: [],
        //     },
        //     { status: 200 }
        // );

        if (limit === undefined || limit === "undefined" || limit === "all")
            limit = 100000000;
        else limit = parseInt(limit);

        let products;
        if (
            category !== null &&
            category !== undefined &&
            category !== "undefined" &&
            category !== "all"
        ) {
            products = await Product.find({
                category: category,
                price: { $lt: limit },
            });
        } else products = await Product.find({ price: { $lt: limit } });

        if (order === "older") products.reverse();

        // if (!isNaN(limit)) {
        //     products = products.slice(0, limit);
        // }

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
        const { name, description, price, stock, seller, images, category } =
            await req.json();

        const toAddProduct = {
            name,
            description,
            price,
            stock,
            seller,
            images,
            category,
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
