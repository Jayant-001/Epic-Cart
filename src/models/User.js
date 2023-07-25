import mongoose, { Schema, ObjectId } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        stores: {
            type: Array,
            default: [],
        },
        purchases: {
            type: Array,
            default: [],
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken: String,
        verifyTokenExpiry: Date,
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
