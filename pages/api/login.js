import connectDB from "../../middleware/mongoose";
import User from "../../models/user";

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
        let user = await User.findOne({email: req.body.email});
        if(user){
            if(user.password == req.body.password){
                res.status(200).json({message: "User Logged In", success: true});
            }
            else {
                res.status(401).json({message: "Invaild Credentials", success: false});
            } 
        }
        else {
            res.status(401).json({message: "Invaild Credentials", success: false}); 
        }              
    }
    else {
        res.status(405).json({ msg: "Method is not allowed" });
    }
}

export default connectDB(handler);