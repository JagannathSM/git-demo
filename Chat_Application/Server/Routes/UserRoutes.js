const express = require('express');
const { auth } = require('../MiddleWare/authMiddleWare');

const { register, login, allUsers } = require('../Controller/UserControllers');

const router = express.Router();

router.post('/register', register);
router.post('/', login);
router.get('/', auth, allUsers);

module.exports = router;