import { connectDB } from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
    try {
        // await User.deleteMany();

        return NextResponse.json(
            {
                message: "all users deleted",
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

    return NextResponse.json(
        {
            message: "This is test route",
        },
        { status: 200 }
    );
}
