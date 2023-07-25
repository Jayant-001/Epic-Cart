import mongoose, { Schema, ObjectId } from "mongoose";

const storeSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Store title is required"],
        },
        desc: {
            type: String,
            required: [true, "Store description is required"],
        },
        ownerId: {
            type: ObjectId,
            required: [true, "Owner Id is required"]
        },
        products: {
            type: Array,
            default: [],
        },
        orders: {
            type: Array,
            default: [],
        },
        sold: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

export default mongoose.models.Store || mongoose.model("Store", storeSchema);
