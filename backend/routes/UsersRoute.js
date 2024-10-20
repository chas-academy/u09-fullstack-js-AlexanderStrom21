const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("../model/User");

const router = express.Router();

// Middleware to parse JSON and cookies
router.use(express.json());
router.use(cookieParser());

// CORS configuration
router.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true, 
  })
);

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

// Register an admin user
router.post("/register-admin", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin: true,
    });
    await newUser.save();

    res.status(201).json({ message: "Admin user registered successfully" });
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

    res
      .cookie("token", token, { httpOnly: true })
      .json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Logout user
router.post("/logout", (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, 
    })
    .json({ message: "Logout successful" });
});

// Middleware to authenticate
const authMiddleware = (req, res, next) => {
  // Read token from cookies instead of Authorization header
  const token = req.cookies.token; // Get token from cookie

  if (!token) {
    return res.status(403).json({ error: "No token, authorization denied" }); // Return 403 if no token
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
    res.json(user);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// get all users
router.get("/allUsers", authMiddleware, async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Get user info without password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//Get user by id
router.get("/users/:id", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password"); // Get user info without password
    res.json(user); // Respond with user data including isAdmin
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//Update User by id
router.put("/updateUser/:id", authMiddleware, async (req, res) => {
  const userId = req.params.id;
  const { email, password } = req.body;

  try {
    const requestingUser = await User.findById(req.userId);
    if (
      !requestingUser ||
      (!requestingUser.isAdmin && requestingUser._id.toString() !== userId)
    ) {
      return res.status(403).json({ message: "acces denied" });
    }

    const updatedFields = {};
    if (email) updatedFields.email = email;
    if (password) {
      updatedFields.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true,
      runValidators: true,
    }).select("-password");
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated Successfully", user: updatedUser });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//Delete users by id
router.delete("/users/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the requesting user is an admin
    const requestingUser = await User.findById(req.userId);
    if (!requestingUser || !requestingUser.isAdmin) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Delete the user
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
