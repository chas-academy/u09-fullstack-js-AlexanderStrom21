const threadService = require("../services/ThreadService");

// Get all threads
exports.getAllThreads = async (req, res) => {
  try {
    const allThreads = await threadService.getAllThreads();
    res.json(allThreads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get thread by id
exports.getThreadById = async (req, res) => {
  try {
    const threadId = req.params.id;
    const thread = await threadService.getThreadById(threadId);

    if (!thread) {
      return res.status(404).json({ message: "Thread not found" });
    }
    res.status(200).json({ message: "Thread fetched successfully", thread });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new thread
exports.createThread = async (req, res) => {
  const { title, content, author, forumType } = req.body;
  try {
    const savedThread = await threadService.createThread({
      title,
      content,
      author,
      forumType,
    });
    res.status(201).json(savedThread);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Create a comment by specific thread id
exports.createComment = async (req, res) => {
  const { author, comment } = req.body;
  try {
    const updatedThread = await threadService.addComment(req.params.id, {
      author,
      comment,
    });

    if (!updatedThread) {
      return res.status(404).json({ message: "Thread not found" });
    }

    res.status(201).json(updatedThread);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get thread comments
exports.getComments = async (req, res) => {
  try {
    const comments = await threadService.getComments(req.params.id);
    if (!comments) {
      return res.status(404).json({ message: "Thread not found" });
    }

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get threads by forumType
exports.getThreadsByForumType = async (req, res) => {
  const { forumType } = req.params;
  try {
    const threads = await threadService.getThreadsByForumType(forumType);
    res.json(threads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete thread by id
exports.deleteThread = async (req, res) => {
  try {
    const threadId = req.params.id;
    const deletedThread = await threadService.deleteThread(threadId);
    if (!deletedThread) {
      return res.status(404).json({ message: "Thread not found" });
    }

    res.status(200).json({ message: "Thread deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete thread comment by id
exports.deleteComment = async (req, res) => {
  const { threadId, commentId } = req.params;
  try {
    const updatedThread = await threadService.deleteComment(
      threadId,
      commentId
    );

    if (!updatedThread) {
      return res.status(404).json({ message: "Thread or comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
