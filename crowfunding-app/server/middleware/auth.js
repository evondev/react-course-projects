require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  // [Bearers,token]
  const token = authHeader && authHeader.split(" ")[1];
  console.log("verifyToken ~ token", token);

  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};
module.exports = verifyToken;
