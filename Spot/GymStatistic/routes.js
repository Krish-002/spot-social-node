import * as dao from "./dao.js";

export default function GymStatisticRoutes(app) {
    app.post("/api/gymStatistics", async (req, res) => {
        const gymStatistic = await dao.createGymStatistic(req.body);
        res.json(gymStatistic);
    });

    app.get("/api/gymStatistics", async (req, res) => {
        const gymStatistics = await dao.findAllGymStatistics();
        res.json(gymStatistics);
    });

    app.get("/api/gymStatistics/:id", async (req, res) => {
        const gymStatistic = await dao.findGymStatisticById(req.params.id);
        res.json(gymStatistic);
    });

    app.put("/api/gymStatistics/:id", async (req, res) => {
        const gymStatistic = await dao.updateGymStatistic(req.params.id, req.body);
        res.json(gymStatistic);
    });

    app.delete("/api/gymStatistics/:id", async (req, res) => {
        const gymStatistic = await dao.deleteGymStatistic(req.params.id);
        res.json(gymStatistic);
    });
}
