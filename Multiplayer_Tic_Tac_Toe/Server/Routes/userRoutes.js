const express = require("express");
const { getUserData, updateUserData, AddUserRoundDetails, GetUserRoundDetails } = require('../Controllers/userController')

const auth = require("../MiddleWare/auth");

const router = express.Router();

router.get('/getUserData', auth, getUserData);

router.put('/updateUserData', auth, updateUserData);

router.post('/addUserRoundDetails', auth, AddUserRoundDetails);

router.get('/getUserRoundDetails', auth, GetUserRoundDetails);

module.exports = router;
