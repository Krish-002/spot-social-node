import * as dao from "./dao.js";

export default function GymSplitRoutes(app) {
    app.post("/api/gymSplits", async (req, res) => {
        const gymSplit = await dao.createGymSplit(req.body);
        res.json(gymSplit);
    });

    app.get("/api/gymSplits", async (req, res) => {
        const gymSplits = await dao.findAllGymSplits();
        res.json(gymSplits);
    });

    app.get("/api/gymSplits/:id", async (req, res) => {
        const gymSplit = await dao.findGymSplitById(req.params.id);
        res.json(gymSplit);
    });

    app.put("/api/gymSplits/:id", async (req, res) => {
        const gymSplit = await dao.updateGymSplit(req.params.id, req.body);
        res.json(gymSplit);
    });

    app.delete("/api/gymSplits/:id", async (req, res) => {
        const gymSplit = await dao.deleteGymSplit(req.params.id);
        res.json(gymSplit);
    });
}
