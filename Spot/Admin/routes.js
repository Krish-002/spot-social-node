import * as dao from "./dao.js";
let currentAdmin = null;

export default function AdminRoutes(app) {
  // Create a new admin
  const createAdmin = async (req, res) => {
    try {
      const newAdmin = await dao.createAdmin(req.body);
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Find all admins
  const findAllAdmins = async (req, res) => {
    try {
      const admins = await dao.findAllAdmins();
      res.status(200).json(admins);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Find admin by ID
  const findAdminById = async (req, res) => {
    try {
      const { adminId } = req.params;
      const admin = await dao.findAdminById(adminId);
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Update an admin by ID
  const updateAdmin = async (req, res) => {
    try {
      const { adminId } = req.params;
      const result = await dao.updateAdmin(adminId, req.body);
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Admin not found" });
      }
      res.status(200).json({ message: "Admin updated" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Delete an admin by ID
  const deleteAdmin = async (req, res) => {
    try {
      const { adminId } = req.params;
      const result = await dao.deleteAdmin(adminId);
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Admin not found" });
      }
      res.status(200).json({ message: "Admin deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  app.post("/api/admins", createAdmin);
  app.get("/api/admins", findAllAdmins);
  app.get("/api/admins/:adminId", findAdminById);
  app.put("/api/admins/:adminId", updateAdmin);
  app.delete("/api/admins/:adminId", deleteAdmin);
}
