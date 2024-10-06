const express = require('express')
const { auth } = require('../MiddleWare/authMiddleWare');
const { sendMessage, allMessages } = require('../Controller/MessageControllers');

const router = express.Router();

router.post('/', auth, sendMessage);
router.get('/:chatId', auth, allMessages);

module.exports = router;