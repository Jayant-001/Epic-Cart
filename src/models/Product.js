import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    description: {
        type: String,
        default: "THis is default description",
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
    },
    stock: {
        type: Number,
        default: 10,
    },
    seller: {
        type: String,
        default: "Jayant",
    },
    images: [
        {
            public_id: String,
            url: String,
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Product ||
    mongoose.model("Product", productSchema);
