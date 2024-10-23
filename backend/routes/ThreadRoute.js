const express = require("express");
const threadController = require("../contollers/ThreadController");
const authMiddleware = require("../Middleware/AuthMiddleware");
const router = express.Router();

// Get all threads
router.get("/threads", threadController.getAllThreads);
// Get thread by id
router.get("/thread/:id", threadController.getThreadById);
// Create a new thread
router.post("/thread", threadController.createThread);
// Create a comment by specific thread id
router.post("/thread/:id/comment", threadController.createComment);
// Get thread comments
router.get("/thread/:id/comments", threadController.getComments);
// Get threads by forumType
router.get("/threads/:forumType", threadController.getThreadsByForumType);
// Delete thread by id
router.delete("/thread/:id", threadController.deleteThread);
// Delete thread comment by id
router.delete(
  "/thread/:threadId/comment/:commentId",
  threadController.deleteComment
);

module.exports = router;
