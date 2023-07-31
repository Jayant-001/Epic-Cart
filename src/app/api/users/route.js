import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const users = await User.find({}, { name: 1, email: 1 });

        return NextResponse.json(
            {
                users,
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
