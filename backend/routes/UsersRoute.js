const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const cors = require("cors");
const router = express.Router();

router.use(
  cors({
    origin: "https://purposecoder.netlify.app", // Your frontend origin
    credentials: true, // Allow sending cookies
  })
);

// Middleware to parse JSON
router.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Register a user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send the token in the response body
    res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Middleware to authenticate
const authMiddleware = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(403).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify token
    req.userId = decoded.userId; // Attach user ID to request
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" }); // Return 403 if token is invalid
  }
};

// Fetch user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password"); // Get user info without password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Other routes remain unchanged...

// Example: Get all users
router.get("/allUsers", async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
