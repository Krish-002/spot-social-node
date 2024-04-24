import model from "./model.js";

export const createMealPlan = (mealPlan) => model.create(mealPlan);
export const findAllMealPlans = () => model.find();
export const findMealPlanById = (id) => model.findById(id);
export const updateMealPlan = (id, mealPlan) => model.updateOne({_id: id}, mealPlan, { new: true });
export const deleteMealPlan = (id) => model.deleteOne({_id: id});
