import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/project?directConnection=true',{})
        console.log("MongoDB Connected..")
    } catch (error) {
        console.error("Connect Error: ", error)
    }
}

export default connectDB