const jwt = require("jsonwebtoken");
const User = require("../model/User"); // Adjust the path as necessary

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token; // Get token from cookie

  if (!token) {
    return res.status(403).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.userId = decoded.userId;

    // Fetch the user to check if they are an admin
    const user = await User.findById(req.userId);
    req.userIsAdmin = user.isAdmin; // Assuming isAdmin is a boolean field in your User model

    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
