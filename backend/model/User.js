const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 6, // Min length username
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+..+/, "Invalid email address"], // verify email
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});
const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
