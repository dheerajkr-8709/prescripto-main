import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined in environment variables!");
    process.exit(1);
  }

  mongoose.connection.on("connected", () => console.log("Database Connected"));

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
