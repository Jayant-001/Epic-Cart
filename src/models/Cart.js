import mongoose, { Schema, ObjectId } from "mongoose";

const cartSchema = new Schema(
    {
        userId: {
            type: ObjectId,
            required: [true, "User ID is required"],
            unique: true,
        },
        products: [
            {
                id: ObjectId,
                name: String,
                quantity: Number,
                price: Number,
                totalPrice: Number,
            },
        ],
        productsCount: {
            type: Number,
            default: 0,
        },
        totalPrice: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
