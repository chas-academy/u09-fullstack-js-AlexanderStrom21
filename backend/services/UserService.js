const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

// Register user service
exports.registerUser = async (username, email, password) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  return await newUser.save();
};

// Login user service
exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User does not exist");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return null;
  }

  return jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
};

// Logout user service
exports.logoutUser = async () => {};

// Get user profile service
exports.getUserProfile = async (userId) => {
  return await User.findById(userId).select("-password");
};

// Get all users service
exports.getAllUsers = async () => {
  return await User.find({}, "-password");
};

//update User Profile
exports.updateUserProfile = async (userId, updateData) => {
  const user = await User.findById(userId);
  if (!user) {
    return null;
  }
  if (updateData.password) {
    const salt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(updateData.password, salt);
  }

  return await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  }).select("-password");
};

// Delete a user
exports.deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  return user;
};
