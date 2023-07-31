import { connectDB } from "@/config/db";
import Store from "@/models/Store";
import { NextResponse } from "next/server";
import { parse } from "url";

connectDB();
export async function GET(req) {
    try {
        const { query } = parse(req.url, true);
        let { seller } = query;

        console.log(seller);
        let stores;
        if (
            seller !== null &&
            seller !== "null" &&
            seller !== undefined &&
            seller != "undefined"
        ) {
            stores = await Store.find(
                { ownerId: seller },
                { _id: 1, title: 1, desc: 1, ownerId: 1 }
            );
        } else {
            stores = await Store.find(
                {},
                { _id: 1, title: 1, desc: 1, ownerId: 1 }
            );
        }

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
