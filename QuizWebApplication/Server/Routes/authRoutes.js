const express = require("express");
const { userRegister, userlogin, resetPassToken, verifyResetPassToken, createNewPass } = require('../Controllers/authController');

const router = express.Router();

router.post('/register', userRegister);

router.post('/login', userlogin);

router.post('/resetPass', resetPassToken);

router.get('/resetPass-check/:passResetToken', verifyResetPassToken);

router.put('/updatePass/:passResetToken', createNewPass);

module.exports = router;