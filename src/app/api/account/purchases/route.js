import { connectDB } from "@/config/db";
import { extractToken } from "@/helper/extractToken";
import User from "@/models/User";
import { NextResponse } from "next/server";

connectDB();
export async function GET(req) {
    try {
        const userId = await extractToken(req);
        const user = await User.findById(userId);

        return NextResponse.json(
            {
                purchases: user.purchases,
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
