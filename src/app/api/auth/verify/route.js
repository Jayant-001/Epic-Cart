import { extractToken } from "@/helper/extractToken";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const userId = await extractToken(req);

        if (userId === null) {
            const response = NextResponse.json(
                { success: false, message: "Session expired" },
                { status: 401 }
            );

            response.cookies.set("token", "", {
                expires: new Date(0),
                httpOnly: true,
            });

            return response;
        }

        return NextResponse.json(
            {
                success: true,
                message: "User is authrosized",
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
