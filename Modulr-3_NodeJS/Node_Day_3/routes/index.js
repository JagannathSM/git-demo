const express = require('express')
const Mentor = require("../models/mentor")
const Student = require('../models/student')

const router = express.Router()

//POST MENTOR DETAILS API CRETETING
router.post("/mentor", async (req,res)=>{
    try{
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(200).send(mentor)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post("/student", async (req,res)=>{
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(200).send(student)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get("/mentor", async (req,res)=>{
    try{
        const mentors = await Mentor.find();
        res.status(200).json({"Total Mentors Count":mentors.length,mentors})
    }catch (err) {
        res.status(400).send(err)
    }
})

router.get("/student", async (req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json({"Total Students Count":students.length,students})
    }catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;