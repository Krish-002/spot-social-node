import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePictureUrl: { type: String, default: '' },
  gymSplitIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'gymSplits' }],
  mealPlanIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MealPlanModel'}],
  gymStatisticIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GymStatisticModel' }],
  postIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PostModel' }]
},
  { collection: "users" }
);

export default userSchema;
