import { connectDB } from "@/config/db";
import Product from "@/models/Product";
import Store from "@/models/Store";
import User from "@/models/User";
import { NextResponse } from "next/server";

connectDB();
export async function GET(req, { params }) {
    try {
        const { storeId } = await params;
        const store = await Store.findById(storeId);
        const owner = await User.findById(store.ownerId, { name: 1, email: 1 });
        const products = await Product.find({ storeId: storeId });
        const storeDetails = {
            name: store.title,
            desc: store.desc,
            ownerName: owner.name,
            ownerEmail: owner.email,
        };
        return NextResponse.json(
            {
                storeDetails,
                products,
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
