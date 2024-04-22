import model from "./model.js";

export const createGymStatistic = (gymStatistic) => model.create(gymStatistic);
export const findAllGymStatistics = () => model.find();
export const findGymStatisticById = (id) => model.findById(id);
export const updateGymStatistic = (id, gymStatistic) => model.updateOne({_id: id}, gymStatistic, { new: true });
export const deleteGymStatistic = (id) => model.deleteOne({_id: id});
