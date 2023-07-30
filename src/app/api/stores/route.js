import { connectDB } from "@/config/db";
import Store from "@/models/Store";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
    try {
        const stores = await Store.find(
            {},
            { _id: 1, title: 1, desc: 1, ownerId: 1 }
        );

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
                error: error.message,
            },
            { status: 500 }
        );
    }
}
