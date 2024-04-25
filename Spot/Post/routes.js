import * as dao from "./dao.js";
import express from 'express';
import multer from 'multer';
import { uploadImageToStorage } from './Utils/gcsUpload.js';



export default function PostRoutes(app) {
    const upload = multer({
        storage: multer.memoryStorage(),
        limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    });
    
    app.post('/api/posts', upload.single('image'), async (req, res) => {
        try {
            const imageUrl = await uploadImageToStorage(req.file);
            const post = await dao.createPost({ ...req.body, imageUrl });
            res.json(post);
        } catch (error) {
            res.status(500).json({ message: error.message});
        }
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

    app.post("/api/posts/like/:postId/:userId", async (req, res) => {
        const post = await dao.likePost(req.params.postId, req.params.userId);
        res.json(post);
    });
}
