import mongoose from "mongoose";

const connectToDB = async ()=>{
    try {
        mongoose.connect(process.env.DB_URI)
        console.log('Connected to DB ... ');
    } catch (error) {
        console.log('Could not to connected to db ');
    }
}

export default connectToDB