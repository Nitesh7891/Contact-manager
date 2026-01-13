import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./src/routes/auth.route.js";
import contactRoutes from "./src/routes/contact.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"));

app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
