import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/donaciones");
        console.log('db conected')
    } catch (error) {
        
        console.log(error)
    }
} 
