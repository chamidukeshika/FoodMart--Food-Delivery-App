import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodmart:foodmart123@mernauth.krcy15d.mongodb.net/food-mart').then(() => console.log("DB Connected"));
}