import { connectDB } from "@/config/db";
import { extractToken } from "@/helper/extractToken";
import Store from "@/models/Store";
import User from "@/models/User";
import { NextResponse } from "next/server";

connectDB();
export async function POST(req) {
    try {
        const userId = await extractToken(req);
        const { title, desc } = await req.json();

        let store = await Store({ title, desc, ownerId: userId });
        store = await store.save();
        await User.findOneAndUpdate(
            { _id: userId },
            {
                $push: { stores: store._id },
            }
        );

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

export async function PATCH(req) {
    try {
        const { id, product } = req.json();

        

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
