import * as dao from "./dao.js";

export default function MealPlanRoutes(app) {
  const createMealPlan = async (req, res) => {
    try {
      const newMealPlan = await dao.createMealPlan(req.body);
      res.status(201).json(newMealPlan);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };



  app.get("/api/mealplans/:id", async (req, res) => {
    const mealplan = await dao.findMealPlanById(req.params.id);
    res.json(mealplan);
  });

  const findAllMealPlans = async (req, res) => {
    try {
      const mealPlans = await dao.findAllMealPlans();
      res.status(200).json(mealPlans);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const updateMealPlan = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await dao.updateMealPlan(id, req.body);
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Meal Plan not found" });
      }
      res.status(200).json({ message: "Meal Plan updated" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteMealPlan = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await dao.deleteMealPlan(id);
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Meal Plan not found" });
      }
      res.status(200).json({ message: "Meal Plan deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  app.post("/api/mealplans", createMealPlan);
  app.get("/api/mealplans", findAllMealPlans);
  app.put("/api/mealplans/:id", updateMealPlan);
  app.delete("/api/mealplans/:id", deleteMealPlan);
}
