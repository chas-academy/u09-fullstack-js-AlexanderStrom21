const Thread = require("../models/Thread");

// Get all threads
exports.getAllThreads = async () => {
  return await Thread.find();
};

// Get thread by id
exports.getThreadById = async (threadId) => {
  return await Thread.findById(threadId);
};

// Create a new thread
exports.createThread = async (threadData) => {
  const thread = new Thread(threadData);
  return await thread.save();
};

// Add a comment to a thread
exports.addComment = async (threadId, commentData) => {
  const thread = await Thread.findById(threadId);
  if (!thread) return null;

  thread.comments.push(commentData);
  return await thread.save();
};

// Get comments of a thread
exports.getComments = async (threadId) => {
  const thread = await Thread.findById(threadId);
  return thread ? thread.comments : null;
};

// Get threads by forumType
exports.getThreadsByForumType = async (forumType) => {
  return await Thread.find({ forumType });
};

// Delete a thread by id
exports.deleteThread = async (threadId) => {
  return await Thread.findByIdAndDelete(threadId);
};

// Delete a comment from a thread
exports.deleteComment = async (threadId, commentId) => {
  const thread = await Thread.findById(threadId);
  if (!thread) return null;

  const commentIndex = thread.comments.findIndex(
    (comment) => comment._id.toString() === commentId
  );
  if (commentIndex === -1) return null;

  thread.comments.splice(commentIndex, 1);
  return await thread.save();
};
