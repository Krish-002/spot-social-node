import mongoose from "mongoose";

const gymSplitSchema = new mongoose.Schema({
    dayOfWeek: {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: true
    },
    musclesTrained: [{ type: String, required: true }]
},
    { collection: "gymSplits" }
);

export default gymSplitSchema;
