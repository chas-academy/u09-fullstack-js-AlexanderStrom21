const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

// Initialize dotenv to read .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Get PORT from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// MongoDB connection using mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Simple route to test JWT authentication
app.post('/login', (req, res) => {
  // Normally you'd verify user credentials in a real app
  const user = { id: 1, username: 'testuser' };

  // Generate JWT token
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Protected route using JWT
app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Token is required');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }
    res.json({ message: 'Welcome to the protected route!', user: decoded });
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});