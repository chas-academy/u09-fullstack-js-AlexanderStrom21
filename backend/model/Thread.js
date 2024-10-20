const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  author: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const ThreadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  forumType: { type: String, required: true },
  comments: [CommentSchema],
  date: { type: Date, default: Date.now },
});

const Thread = mongoose.model("Thread", ThreadSchema);

module.exports = Thread;
