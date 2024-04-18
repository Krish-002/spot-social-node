import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import cors from "cors";
mongoose.connect("mongodb+srv://krish:mongo@cluster79962.trmwwmq.mongodb.net/spot_social");
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);
app.listen(process.env.PORT || 4000)
