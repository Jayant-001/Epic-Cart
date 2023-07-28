import { connectDB } from "@/config/db";
import Product from "@/models/Product";
import Store from "@/models/Store";
import { NextResponse } from "next/server";

connectDB();
export async function GET(req, { params }) {
    try {
        const { storeId } = await params;

        const store = await Store.findById(storeId);
        const products = await Product.find({ storeId: storeId });
        store.products = products;

        return NextResponse.json({ store }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(req, { params }) {
    try {
        const { storeId } = await params;
        const { title, desc } = await req.json();

        await Store.findByIdAndUpdate(storeId, { title, desc });

        return NextResponse.json(
            {
                message: "Store updated",
            },
            { status: 204 }
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

export async function PATCH(req, { params }) {
    try {
        const { storeId } = await params;
        const { title, desc } = await req.json();

        await Store.findByIdAndUpdate(storeId, {
            $set: { title: title, desc: desc },
        });

        return NextResponse.json(
            {
                message: "Store updated",
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
