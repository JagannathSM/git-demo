const express = require("express");
const { getTest } = require('../Controller/TestController');

const router = express.Router();

router.get("/", getTest);

module.exports = router;
