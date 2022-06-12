const jwt = require("jsonwebtoken");
const JWT_Secret = "edwhfkwoddjfoiwdjfoijwdofijww";
const mongoose = require("mongoose");
const user = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ error: "you must be logged in" });
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_Secret, (err, payload) => {
    if (err) return res.status(401).json({ error: "you must be logged in" });
    const { _id } = payload;
    user.findById(_id).then((user) => {
      req.user = user;
      next();
    });
  });
};
