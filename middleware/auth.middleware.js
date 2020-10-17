const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  //ipi method check server availability
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    // "Bearer TOKEN" take first element by split
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No authorization!" });
    }
    // decoded by secret key
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "No authorization!" });
  }
};
