import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    songImageUrl: { type: String, required: true },
    songName: { type: String, required: true },
    artistName: { type: String, required: true },
    likes: [{ type: String}],
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},
    { collection: "posts" }
);

export default postSchema;
