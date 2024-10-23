const express = require("express");
const userController = require("../contollers/UserController");
const authMiddleware = require("../Middleware/AuthMiddleware");
const router = express.Router();

// Register a user
router.post("/register", userController.register);
// Login user
router.post("/login", userController.login);
// Fetch user profile
router.get("/profile", authMiddleware, userController.getProfile);
// Get all users
router.get("/allUsers", userController.getAllUsers);

module.exports = router;
