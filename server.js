import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";

// app config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// intializing routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => console.log("server Running At 8080"));
