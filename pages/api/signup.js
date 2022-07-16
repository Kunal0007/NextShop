import connectDB from "../../middleware/mongoose";
import User from "../../models/user";

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
        let user = new User(req.body);
        await user.save();
        res.status(200).json({message: "User account created successfully"});
    }
    else {
        res.status(405).json({ msg: "Method is not allowed" });
    }
}

export default connectDB(handler);