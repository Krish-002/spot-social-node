import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("GymSplitModel", schema);
export default model;
