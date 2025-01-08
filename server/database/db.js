import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Dhun",
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error :: ", error);
  }
};

export default connectDB;