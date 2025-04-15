import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ratna:ratnamala@cluster0.q62eymj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}