const express = require("express");
const { getQuestions } = require('../Controllers/questionController')

const auth = require("../MiddleWare/auth");

const router = express.Router();

router.get('/questions', auth, getQuestions);

module.exports = router;
