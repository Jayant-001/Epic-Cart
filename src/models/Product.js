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
    storeId: {
        type: ObjectId,
        default: null,
    },
    storeName: {
        type: String,
        default: "Unknown store"
    },
    images: [
        {
            public_id: String,
            url: String,
        },
    ],
    category: {
        type: String,
        default: 'all'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Product ||
    mongoose.model("Product", productSchema);
