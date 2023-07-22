import mongoose, { Schema } from "mongoose";

const storeSchema = new Schema({
    title: {
        type: String,
        required: [true, "Store title is required"],
    },
    desc: {
        type: String,
        required: [true, "Store description is required"],
    },
    products: {
        type: Array,
        default: [],
    },
    ownerId: {
        type: ObjectId,
        default: null
    },
    orders: {
        type: Array,
        default: []
    },
    sold: {
        type: Array,
        default: []
    }
});

export default mongoose.models.Store || mongoose.model("Store", storeSchema);
