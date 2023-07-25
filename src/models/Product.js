import mongoose, { ObjectId } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },
        description: {
            type: String,
            default: "This is default description",
        },
        price: {
            type: Number,
            required: [true, "Please enter product price"],
        },
        stock: {
            type: Number,
            default: 0,
        },
        ownerId: {
            type: ObjectId,
            default: null,
        },
        storeId: {
            type: ObjectId,
            default: null,
        },
        images: [
            {
                public_id: String,
                url: String,
            },
        ],
        category: {
            type: String,
            default: "all",
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product ||
    mongoose.model("Product", productSchema);
