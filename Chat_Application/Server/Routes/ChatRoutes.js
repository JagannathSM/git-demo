const express = require('express');
const { auth } = require('../MiddleWare/authMiddleWare');
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require('../Controller/ChatControllers');

const router = express.Router();

// router.route('/').post(auth, accessChat).get(auth, fetchChats);
router.post('/', auth, accessChat);
router.get('/', auth, fetchChats);
router.post('/group', auth, createGroupChat);
router.put('/rename', auth, renameGroup);
router.put('/addgroup', auth, addToGroup);
router.put('/groupremove', auth, removeFromGroup);


module.exports = router;
