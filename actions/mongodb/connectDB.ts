import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connected")
//        if(mongoose.connection.readyState === 0 ) {
//          await mongoose.connect(process.env.MONGODB_URI)
//            console.log("db connected")
//        }
    } catch(e) {
        console.log(`Error connect DB: ${e}`)
    }
}

export default connectDB;



