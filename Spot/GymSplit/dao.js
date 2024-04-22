import model from "./model.js";

export const createGymSplit = (gymSplit) => model.create(gymSplit);
export const findAllGymSplits = () => model.find();
export const findGymSplitById = (id) => model.findById(id);
export const updateGymSplit = (id, gymSplit) => model.updateOne({_id: id}, gymSplit, { new: true });
export const deleteGymSplit = (id) => model.deleteOne({_id: id});
