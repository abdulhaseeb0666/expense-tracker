import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config()

export default function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    })
}