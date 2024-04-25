import mongoose from "mongoose";
import schema from "./schema.js";

const GymSplitModel = mongoose.model("GymSplitModel", schema);
export default GymSplitModel;
