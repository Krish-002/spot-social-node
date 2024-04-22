import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    songImageUrl: { type: String, required: true },
    songName: { type: String, required: true },
    artistName: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Array of user ObjectIds who liked the post
},
    { collection: "posts" }
);

export default postSchema;
