import connectDB from "../../middleware/mongoose";
import User from "../../models/user";
import CryptoJS from 'crypto-js';

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { name, email} = req.body;
        // Encrypt
        let ciphertext = CryptoJS.AES.encrypt(req.body.password, 'secret0007').toString();
        let user = new User({ name, email, password: ciphertext });
        await user.save();
        res.status(200).json({ message: "User account created successfully" });
    }
    else {
        res.status(405).json({ msg: "Method is not allowed" });
    }
}

export default connectDB(handler);