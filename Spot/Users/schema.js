import mongoose from "mongoose";
import gymSplitSchema from "../GymSplit/schema.js";
import gymStatisticSchema from "../GymStatistic/schema.js";
import postSchema from "../Post/schema.js";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePictureUrl: { type: String, default: '' },
  gymSplits: [gymSplitSchema],
  mealPlans: [{ type: String }],
  gymStatistics: [gymStatisticSchema],
  posts: [postSchema]
},
  { collection: "users" }
);

export default userSchema;
