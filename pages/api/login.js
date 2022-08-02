import connectDB from "../../middleware/mongoose";
import User from "../../models/user";
import CryptoJS from 'crypto-js';
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            let bytes = CryptoJS.AES.decrypt(user.password, process.env.NEXT_PUBLIC_SECRET_KEY);
            let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            if (decryptedData == req.body.password) {
                let token = jwt.sign({email: user.email, name: user.name}, process.env.NEXT_PUBLIC_JWT_SECRET, {expiresIn: "2d"});
                res.status(200).json({ message: "User Logged In", success: true, token: token });
            }
            else {
                res.status(401).json({ message: "Invaild Credentials", success: false });
            }
        }
        else {
            res.status(401).json({ message: "Invaild Credentials", success: false });
        }
    }
    else {
        res.status(405).json({ msg: "Method is not allowed" });
    }
}

export default connectDB(handler);