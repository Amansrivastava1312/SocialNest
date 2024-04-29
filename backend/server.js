import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/ConnectDB.js";

dotenv.config();

connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
