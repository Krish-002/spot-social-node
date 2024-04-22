import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Spot/Users/routes.js";
import PostRoutes from "./Spot/Post/routes.js";
import GymStatisticRoutes from "./Spot/GymStatistic/routes.js";
import GymSplitRoutes from "./Spot/GymSplit/routes.js";
import cors from "cors";
mongoose.connect("mongodb+srv://sreekar:mongo@cluster79962.trmwwmq.mongodb.net/spot_social");
const app = express();
app.use(cors());
app.use(express.json());
PostRoutes(app);
GymStatisticRoutes(app);
GymSplitRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000)
