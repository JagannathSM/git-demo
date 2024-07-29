const express = require("express");
const { registerUser, loginUser, resetPassToken, verifyResetPassToken } = require("../Controllers/authController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/resetPass", resetPassToken);

router.post("/verifyPass/:token",verifyResetPassToken)

module.exports = router;