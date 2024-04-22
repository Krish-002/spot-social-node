import mongoose from "mongoose";

const gymStatisticSchema = new mongoose.Schema({
    exercise: { type: String, required: true },
    weight: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value.'
        }
    },
    unit: {
        type: String,
        required: true,
        default: 'lbs'
    }
},
    { collection: "gymStatistics" }
);

export default gymStatisticSchema;
