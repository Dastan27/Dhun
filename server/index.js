import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
});

const app = express();

// Using Middleware
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT;

// Importing Routes
import userRoutes from "./routes/userRoutes.js";
import songRoutes from "./routes/songRoutes.js";

// Using Routes
app.use("/api/user", userRoutes);
app.use("/api/song", songRoutes);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
  connectDB();
});
