const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Thread = require("../model/Thread");
const authMiddleware = require("../Middleware/AuthMiddleware");

const router = express.Router();

router.use(express.json());
router.use(cookieParser());

router.use(
  cors({
    origin: "http://localhost:3000", // Update this to your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
// Get all threads
router.get("/threads", async (req, res) => {
  try {
    const allThreads = await Thread.find();
    res.json(allThreads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new thread
router.post("/thread", async (req, res) => {
  const { title, content, author, forumType } = req.body;
  const thread = new Thread({
    title,
    content,
    author,
    forumType,
  });

  try {
    const savedThread = await thread.save();
    res.status(201).json(savedThread);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get threads by forumType
router.get("/threads/:forumType", async (req, res) => {
  const { forumType } = req.params;
  try {
    const threads = await Thread.find({ forumType }); // Find threads with specific forumType
    res.json(threads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete Thread by id
router.delete("/thread/:id", async (req, res) => {
  try {
    const threadId = req.params.id;

    const deletedThread = await Thread.findByIdAndDelete(threadId); // Change Threads to Thread
    if (!deletedThread) {
      return res.status(404).json({ message: "Thread not found" }); // Corrected the message
    }

    res.status(200).json({ message: "Thread deleted successfully" });
  } catch (err) {
    console.error("Error deleting thread:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
