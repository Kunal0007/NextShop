import connectDB from "../../middleware/mongoose";
import Product from "../../models/product";

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
        for (let i = 0; i < req.body.length; i++) {
            let product = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                catogory: req.body[i].catogory,
                size: req.body[i].size,
                price: req.body[i].price,
                color: req.body[i].color,
                availableQty: req.body[i].availableQty,
            });

            await product.save();
        }
        res.status(200).json({message: "Products added successfully"});
    }
    else {
        res.status(405).json({ msg: "Method is not allowed" });
    }
}

export default connectDB(handler);