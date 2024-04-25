import GymSplitModel from "./model.js";

export const createGymSplit = (gymSplit) => GymSplitModel.create(gymSplit);
export const findAllGymSplits = () => GymSplitModel.find();
export const findGymSplitById = (id) => GymSplitModel.findById(id);
export const updateGymSplit = (id, gymSplit) => GymSplitModel.updateOne({_id: id}, gymSplit, { new: true });
export const deleteGymSplit = (id) => GymSplitModel.deleteOne({_id: id});
