import connectDB from "../../middleware/mongoose";
import Product from "../../models/product";

const handler = async (req, res) => {
    let products = await Product.find();
    res.status(200).json({products});
}

export default connectDB(handler);