const express = require('express')
const Student = require('../Models/student');
const Mentor = require("../Models/mentor");

const router = express.Router()

//CREATE NEW STUDENT
router.post("/add", async (req,res)=>{
    try{
        const studentdata = req.body;
        const studentName = studentdata.studentName
        const findStudent = await Student.findOne({studentName})

        if(!findStudent){
            const student = new Student(req.body);
            await student.save();
            res.status(200).send(student)
        }
        else{
            return res.status(400).json({message:"StudentName is already exisits"})
        }
    } catch (err) {
        res.status(400).json({message:"Error while adding student",error:err})
    }
})

//GET ALL STUDENTS DETAILS
router.get("/show", async (req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json({"Total Student Count":students.length,students})
    }catch (err) {
        res.status(400).send(err)
    }
})

//GET SPECIFIC STUDENT DETAILS
// router.get("/show/:studentID", async(req,res)=>{
//     try{
//         const _id = req.params.studentID
//         const newStudent = await Student.findOne({_id});
//         res.status(200).json(newStudent)
//     } catch (err){
//         res.status(400).send(err)
//     }
// })

//SHOW THE PARTICULAR STUDNET PREVIOUS MENTORS
router.get("/show/:studentID",async(req,res)=>{
    try{
        const _id = req.params.studentID
        const newStudent = await Student.findOne({_id});
        const mentors = await Mentor.find();
        const allMentorsName = [];
        const result = [];

        const previousMentorsID = newStudent.previousMentors.map((ele)=>ele=ele.toString());
        
        mentors.forEach((ele)=>{
            allMentorsName.push({name:ele.mentorName,id:ele._id.toString()})
        })

        previousMentorsID.forEach((PrevMentor)=>{
            allMentorsName.map((allMentor)=>{
                if(allMentor.id == PrevMentor){
                    result.push(allMentor.name);
                }
            })
        })

        res.status(200).json({StudentName:newStudent.studentName,
                            TotalPrevMentor:result.length,
                            PreviousMentors:result})

    } catch (err) {
        res.status(400).json({message:`Error \b ${err}`})
    }
})


//UPDATE SPECIFIC STUDENT TO ASSIGN A MENTOR
router.put("/update/:studentID",async(req,res)=>{
    try{
        const _id = req.params.studentID;
        const {currentMentor} = req.body;
        // console.log(currentMentor)
        const newStudent = await Student.findOne({_id});
        const newMentor = await Mentor.findOne({_id:currentMentor})
        const allMentor = await Mentor.find();

        allMentor.forEach(async (ele)=>{
            if(ele._id.toString() != currentMentor){
                const checkStudent = ele.assignedStudents;
                const arrStringStudentID = checkStudent.map((ele)=>ele.toString())
                const arr_result = arrStringStudentID.filter((value)=> value != _id)
                await Mentor.updateOne({_id:ele._id},{assignedStudents:arr_result})
            }
        })
        
        const mentorAssignedStudents = newMentor.assignedStudents
        const checkForMentorAssign = mentorAssignedStudents.map((ele)=>ele.toString());

        const result = checkForMentorAssign.filter((ele)=>ele==_id)
        if(result.length == 0){
            mentorAssignedStudents.push(_id)
            await Mentor.updateOne({_id:currentMentor},{assignedStudents:mentorAssignedStudents})
        }

        if(!newStudent.currentMentor){
            await Student.updateOne({_id},{currentMentor})
        } else if(newStudent.currentMentor.toString() != currentMentor){
            const prevMentor = newStudent.currentMentor;
            const prevMentorArray = newStudent.previousMentors;
            // console.log(prevMentorArray);
            // console.log(prevMentor.toString());
            if(prevMentorArray.length == 0){
                // console.log(2323)
                prevMentorArray.push(prevMentor)
                await Student.updateOne({_id},{currentMentor,previousMentors:prevMentorArray}) 
            } else {
                const checkArray = prevMentorArray.map((ele)=> ele.toString())
                let check = checkArray.filter((ele)=>ele == prevMentor.toString())
                if(check.length == 0){
                    prevMentorArray.push(prevMentor)
                    await Student.updateOne({_id},{currentMentor,previousMentors:prevMentorArray}) 
                } else {
                    await Student.updateOne({_id},{currentMentor})
                }
            }
        } else {
            return res.status(400).json({message:"Already have"})
        }
        res.status(200).json({message:"Successfull"})
    } catch (err){
        res.status(400).json({message:"Error while updating student data",error:err})
    }
})


//DELETE SPECIFIC STUDENT
router.delete("/delete/:studentID", async(req,res)=>{
    try{
        const _id = req.params.studentID;
        const newStudent = await Student.findOne({_id});
        await Student.deleteOne({_id})
        res.status(200).send(`Deleted ${newStudent.studentName} student data Successfully`)
    } catch {
        res.status(400),send(err)
    }
})

module.exports = router;