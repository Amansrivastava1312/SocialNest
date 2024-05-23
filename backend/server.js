import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/ConnectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();

connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 3000;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({ limit: "50mb" })); // Parse JSON bodies
app.use(express.urlencoded({ limit: "5mb", extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
