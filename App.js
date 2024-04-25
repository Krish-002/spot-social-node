import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Spot/Users/routes.js";
import PostRoutes from "./Spot/Post/routes.js";
import GymStatisticRoutes from "./Spot/GymStatistic/routes.js";
import GymSplitRoutes from "./Spot/GymSplit/routes.js";
import MealPlanRoutes from "./Spot/MealPlan/routes.js";
import AdminRoutes from "./Spot/Admin/routes.js";
import cors from "cors";

// MongoDB connection
mongoose.connect("mongodb+srv://sreekar:mongo@cluster79962.trmwwmq.mongodb.net/spot_social");

const app = express();

// Define CORS options
const corsOptions = {
    origin: 'http://localhost:3000', // This should match the URL of your front-end app
    credentials: true, // Allowing credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Use CORS with the specified options
app.use(cors(corsOptions));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Apply routes
PostRoutes(app);
GymStatisticRoutes(app);
GymSplitRoutes(app);
UserRoutes(app);
MealPlanRoutes(app);
AdminRoutes(app);

// Start server
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on port ${process.env.PORT || 4000}`);
});
