const express = require("express");
const { registerUser, loginUser, resetPassToken, verifyResetPassToken } = require("../Controllers/authController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/reset-pass", resetPassToken);

router.post("/verify-pass/:token",verifyResetPassToken)

module.exports = router;