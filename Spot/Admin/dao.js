import model from "./model.js";

export const createAdmin = (admin) => model.create(admin);
export const findAllAdmins = () => model.find();
export const findAdminById = (adminId) => model.findById(adminId);
export const updateAdmin = (adminId, admin) => model.updateOne({ _id: adminId }, { $set: admin });
export const deleteAdmin = (adminId) => model.deleteOne({ _id: adminId });
export const findAdminByCredentials = async (username, password) => {
  return model.findOne({ username, password });
};
