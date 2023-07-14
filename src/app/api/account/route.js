import { connectDB } from "@/config/db";
import { extractToken } from "@/helper/extractToken";
import User from "@/models/User";
import { NextResponse } from "next/server";

connectDB();
export async function GET(req) {
    try {
        const userId = await extractToken(req);

        // console.log(userId)
        // return NextResponse.json(
        //     {
        //         success: true,
        //         message: "test"
        //     },
        //     { status: 200 }
        // );

        const user = await User.findById(userId).select("-password -isAdmin");

        if (user === null) {
            return NextResponse.json(
                {
                    success: false,
                    user: null,
                },
                { status: 440 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                user,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log("Route ", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 400 }
        );
    }
}
