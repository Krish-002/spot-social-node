import mongoose from "mongoose";

const mealPlanSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true },
    calories: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value.'
        }
    },
},
    { collection: "mealPlans" }
);

export default mealPlanSchema;
