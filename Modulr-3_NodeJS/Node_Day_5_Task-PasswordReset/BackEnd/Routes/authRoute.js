const express = require("express");
const { registerUser, loginUser, resetPassToken, verifyResetPassToken, createNewPass } = require("../Controllers/authController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/reset-pass", resetPassToken);

router.get("/verify-pass/:passResetToken",verifyResetPassToken)

router.put("/update-pass", createNewPass)

module.exports = router;