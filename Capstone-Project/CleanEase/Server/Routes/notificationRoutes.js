const express = require("express");
const { createNotification, getNotification, deleteNotification, autoEditUserBookings } = require('../Contorllers/NotificationController')
const auth = require("../MiddleWare/auth");

const router = express.Router();

router.post('/create',auth, createNotification)

router.get('/get', auth, getNotification);

router.delete('/delete/:_id', auth, deleteNotification);

router.put('/auto-edit/:serviceID', autoEditUserBookings);

module.exports = router;
