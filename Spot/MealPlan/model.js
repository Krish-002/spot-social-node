import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("MealPlanModel", schema);
export default model;
