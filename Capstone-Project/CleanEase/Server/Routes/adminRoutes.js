const express = require("express");
const { getUserBookingsAdmin, updateUserBookingsAdmin } = require('../Contorllers/AdminController');
const admin = require('../MiddleWare/admin');

const router = express.Router();

router.get('/get-bookings', admin, getUserBookingsAdmin);

router.put('/update-booking/:_id', admin, updateUserBookingsAdmin);

module.exports = router;