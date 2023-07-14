import { connectDB } from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

connectDB();
export async function GET(req, { params }) {
    try {
        const { id } = await params; // 64aa8d50d2a9320d39999b33

        const user = await User.findById(id);
        if (user === null) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User not found",
                },
                { status: 404 }
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
