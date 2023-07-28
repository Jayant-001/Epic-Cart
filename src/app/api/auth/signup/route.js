import { connectDB } from "@/config/db";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/User";
import Cart from "@/models/Cart";

connectDB();

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        // check if user exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return NextResponse.json(
                { success: false, message: "Email already exists" },
                { status: 400 }
            );
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        const cart = new Cart({ userId: savedUser._id });
        cart.save();

        return NextResponse.json(
            {
                success: true,
                message: "User created successfully",
                user: savedUser,
            },
            { status: 201 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
