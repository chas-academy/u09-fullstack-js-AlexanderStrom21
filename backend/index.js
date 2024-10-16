const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const usersRoute = require("./routes/UsersRoute"); // Import your users route
const threadRoutes = require("./routes/Threads");

// Initialize dotenv to read .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Allow your frontend URL
    credentials: true, // Allow credentials
  })
);

// MongoDB connection using mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use("/", threadRoutes);
// Register Users Route
app.use("/", usersRoute); // Register the routes under the base URL

// Get PORT from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
