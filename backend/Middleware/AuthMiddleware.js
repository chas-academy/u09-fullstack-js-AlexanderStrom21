const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authMiddleware = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(403).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.userId = decoded.userId; // Attach user ID to request
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
