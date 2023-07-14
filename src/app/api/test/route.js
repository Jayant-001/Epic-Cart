import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        {
            message: "This is test route",
        },
        { status: 200 }
    );
}
