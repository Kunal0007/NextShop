import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [{
        productID: {type: String, required: true},
        quantity: {type: Number, default: 1},
    }],
    address: {type: String, required: true},
    total: {type: Number, required: true},
    status: {type: String, default: "pending", required: true},
}, {timestamps: true});

export default mongoose.models.Order ||  mongoose.model("Order", OrderSchema);