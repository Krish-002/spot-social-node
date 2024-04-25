import model from "./model.js";

export const createPost = (post) => model.create(post);
export const findAllPosts = () => model.find();
export const findPostById = (id) => model.findById(id);
export const updatePost = (id, post) => model.updateOne({_id: id}, post, { new: true });
export const deletePost = (id) => model.deleteOne({_id: id});
export const likePost = (postId, userId) => model.updateOne({_id: postId}, { $push: { likes: userId } }, { new: true });
export const findPostsLikedByUser = (userId) => {
    return model.find({ likes: userId });
};
export const dislikePost = (postId, userId) => {
    return model.updateOne({_id: postId}, { $pull: { likes: userId } }, { new: true });
};
