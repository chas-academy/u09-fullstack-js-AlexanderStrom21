const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const usersRoute = require("./routes/UsersRoute");
const threadRoutes = require("./routes/Threads");

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://purposecoder.netlify.app", // Allow your frontend URL
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use("/", threadRoutes);
app.use("/", usersRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
