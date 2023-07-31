import { connectDB } from "@/config/db";
import { extractToken } from "@/helper/extractToken";
import Store from "@/models/Store";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req) {
    try {
        const userId = await extractToken(req);

        const stores = await Store.find({ ownerId: userId });
        return NextResponse.json(
            {
                stores: stores,
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

export async function POST(req) {
    try {
        const userId = await extractToken(req);
        const { title, desc } = await req.json();

        // console.log(title, desc, userId);

        const store = await Store({ title, desc, ownerId: userId });
        store.save();

        return NextResponse.json(
            {
                message: "Store created",
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

