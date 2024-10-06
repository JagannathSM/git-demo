const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (id) => {
  const jwtData = {
    id: id,
  };
  return jwt.sign(jwtData, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = generateToken;