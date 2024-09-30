const express = require('express');
const router = express.Router();
const Thread = require('../model/Thread');

// Get all threads
router.get('/', async (req, res) => {
  try {
    const threads = await Thread.find();
    res.json(threads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new thread
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  const thread = new Thread({
    title,
    content,
    author,
  });

  try {
    const savedThread = await thread.save();
    res.status(201).json(savedThread);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
