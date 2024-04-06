// database.js
import dotenv from 'dotenv';
dotenv.config({path: "/Users/abhople/Desktop/20240319_capstone_HangarBay/05_Backend/.env" });
import mongoose from "mongoose";

export function connectDatabase() {
    return mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch(error => {
            console.error("Error connecting to database:", error);
            throw error; // Re-throw the error to be caught by the caller
        });
}