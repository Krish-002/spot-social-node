import * as dao from "./dao.js";

export default function PostRoutes(app) {
    app.post("/api/posts", async (req, res) => {
        const post = await dao.createPost(req.body);
        res.json(post);
    });

    app.get("/api/posts", async (req, res) => {
        const posts = await dao.findAllPosts();
        res.json(posts);
    });

    app.get("/api/posts/:id", async (req, res) => {
        const post = await dao.findPostById(req.params.id);
        res.json(post);
    });

    app.put("/api/posts/:id", async (req, res) => {
        const post = await dao.updatePost(req.params.id, req.body);
        res.json(post);
    });

    app.delete("/api/posts/:id", async (req, res) => {
        const post = await dao.deletePost(req.params.id);
        res.json(post);
    });
}
