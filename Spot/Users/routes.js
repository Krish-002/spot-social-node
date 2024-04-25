import * as dao from "./dao.js";
let currentUser = null;
import multer from "multer";
import { uploadImageToStorage } from "../Post/Utils/gcsUpload.js";


export default function UserRoutes(app) {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } 
  });

  const updateUserImage = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await dao.findUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!req.file) {
            return res.status(400).json({ message: "No image file provided" });
        }
        const imageUrl = await uploadImageToStorage(req.file);
        const updatedUser = await dao.updateUser(userId, { profilePictureUrl: imageUrl });
        res.status(200).json({ message: "Profile image updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  // Create a new user
  const createUser = async (req, res) => {
    try {
      const newUser = await dao.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete a user by ID
  const deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const result = await dao.deleteUser(userId);
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Find all users or search by username
  const findAllUsers = async (req, res) => {
    try {
      const { username } = req.query;
      let users;
      if (username) {
        users = await dao.findUsersByUsername(username);
      } else {
        users = await dao.findAllUsers();
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  app.get("/api/users", findAllUsers);

  const findUserByUsername = async (req, res) => {
    try {
      const { username } = req.params;
      const user = await dao.findUserByUsername(username);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  app.get("/api/users/:username", findUserByUsername);


  // Find a user by ID
  const findUserById = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await dao.findUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Update a user by ID
  const updateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const result = await dao.updateUser(userId, req.body);
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User updated" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // User signup
  const signup = async (req, res) => {
    try {
      const existingUser = await dao.findUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(409).json({ message: "Username already taken" });
      }
      const newUser = await dao.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // User signin
  const signin = async (req, res) => {
    try {
      const user = await dao.findUserByCredentials(req.body.username, req.body.password);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      currentUser = user; // Simulating session
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // User signout
  const signout = (req, res) => {
    currentUser = null; // Simulating session end
    res.status(200).json({ message: "Successfully signed out" });
  };

  // User profile (assuming this is for the current session user)
  const profile = async (req, res) => {
    if (!currentUser) {
      return res.status(401).json({ message: "No user signed in" });
    }
    res.status(200).json(currentUser);
  };

  app.put('/api/users/:userId/image', upload.single('image'), updateUserImage);
  app.post("/api/users", createUser);
  app.get("/api/users/:userId", findUserById);
  app.get("/api/users", findAllUsers);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
