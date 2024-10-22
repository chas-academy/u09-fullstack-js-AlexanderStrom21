const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // For parsing cookies
const usersRoute = require("./routes/UsersRoute");
const threadRoutes = require("./routes/Threads");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser()); // Include cookie-parser to handle cookies

// CORS Configuration
app.use(
  cors({
    origin: ["https://purposecoder.netlify.app", "http://localhost:3000"], // Frontend URLs
    credentials: true, // Allow cookies to be sent
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/", threadRoutes);
app.use("/", usersRoute);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
