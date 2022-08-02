import connectDB from "../../middleware/mongoose";
import Product from "../../models/product";

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
        for (let i = 0; i < req.body.length; i++) {
            let product = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
        }
        res.status(200).json({message: "Products updated successfully"});
    }
    else {
        res.status(405).json({ msg: "Method is not allowed" });
    }
}

export default connectDB(handler);
