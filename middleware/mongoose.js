import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
    if(mongoose.connections[0].readyState){
        return handler(req, res);
    }

    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI)
    return handler(req, res);
}

export default connectDB;