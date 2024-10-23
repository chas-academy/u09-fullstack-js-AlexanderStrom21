const userService = require("../services/UserService");

// Register user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await userService.registerUser(username, email, password);

    res
      .status(201)
      .json({ message: "User registered successfully", user: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await userService.loginUser(email, password);

    if (!token) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await userService.getUserProfile(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
