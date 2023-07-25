import { connectDB } from "@/config/db";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // check if user exists
        const existUser = await User.findOne({ email });
        if (!existUser) {
            return NextResponse.json(
                { success: false, message: "Email not exists" },
                { status: 400 }
            );
        }

        // check password
        const validPassword = await bcryptjs.compare(
            password,
            existUser.password
        );
        if (!validPassword) {
            return NextResponse.json(
                { success: false, message: "Wrong password" },
                { status: 400 }
            );
        }

        // create token
        const tokenData = {
            id: existUser._id,
            name: existUser.name,
            password: existUser.password,
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({
            message: true,
            message: "Login successfully",
        });

        response.cookies.set("token", token, { httpOnly: true });

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
