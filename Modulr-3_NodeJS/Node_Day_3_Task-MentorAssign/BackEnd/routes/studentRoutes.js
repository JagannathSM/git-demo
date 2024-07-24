const express = require("express");
const Student = require("../Models/student");
const Mentor = require("../Models/mentor");

const router = express.Router();

//CREATE NEW STUDENT
router.post("/add", async (req, res) => {
  try {
    const studentdata = req.body;
    const studentName = studentdata.studentName;
    const findStudent = await Student.findOne({ studentName });

    if (!findStudent) {
      const student = new Student(req.body);
      await student.save();
      res.status(200).send(student);
    } else {
      return res
        .status(400)
        .json({ message: "StudentName is already exisits" });
    }
  } catch (err) {
    res.status(400).json({ message: "Error while adding student", error: err });
  }
});

//GET ALL STUDENTS DETAILS
router.get("/show", async (req, res) => {
  try {
    const allstudents = await Student.find();
    const mentors = await Mentor.find();
    const finalresult = [];
    const allStudentResult = [];
    const mentorNameAndID = [];

    mentors.forEach((ele) => {
      mentorNameAndID.push({ name: ele.mentorName, id: ele._id.toString() });
    });

    allstudents.map((student) => {
      if (student.currentMentor) {
        mentorNameAndID.forEach((ele) => {
          if (ele.id == student.currentMentor.toString()) {
            const currentMentorName = ele.name;
            const student_name = student.studentName;
            const previousMentorsID = student.previousMentors;
            const changeToString = previousMentorsID.map((ele) =>
              ele.toString()
            );
            allStudentResult.push({
              studentName: student_name,
              currentMentor: currentMentorName,
              previousMentors: changeToString,
            });
          }
        });
      } else {
        allStudentResult.push(student);
      }
    });

    allStudentResult.map((student) => {
      if (student.previousMentors.length > 0) {
        studentName = student.studentName;
        currentMentor = student.currentMentor;
        const temparr = [];
        student.previousMentors.forEach((prevID) => {
          mentorNameAndID.forEach((nameID) => {
            if (prevID == nameID.id) {
              temparr.push(nameID.name);
            }
          });
        });
        finalresult.push({
          studentName,
          currentMentor,
          previousMentors: temparr,
        });
      } else {
        finalresult.push(student);
      }
    });

    res
      .status(200)
      .json({
        "Total Student Count": allstudents.length,
        allstudents: finalresult,
      });
  } catch (err) {
    res.status(400).send(err);
  }
});


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
router.get("/show/:studentID", async (req, res) => {
  try {
    const _id = req.params.studentID;
    const newStudent = await Student.findOne({ _id });
    const mentors = await Mentor.find();
    const allMentorsName = [];
    const result = [];
    const currentStudentMentor = [];

    const previousMentorsID = newStudent.previousMentors.map(
      (ele) => (ele = ele.toString())
    );

    mentors.forEach((ele) => {
      allMentorsName.push({ name: ele.mentorName, id: ele._id.toString() });
    });

    previousMentorsID.forEach((PrevMentor) => {
      allMentorsName.map((allMentor) => {
        if (allMentor.id == PrevMentor) {
          result.push(allMentor.name);
        }
      });
    });

    if (newStudent.currentMentor) {
      allMentorsName.forEach((allmentors) => {
        if (newStudent.currentMentor.toString() == allmentors.id) {
          currentStudentMentor.push(allmentors.name);
        }
      });
    }

    if (currentStudentMentor.length > 0) {
      res
        .status(200)
        .json({
          StudentName: newStudent.studentName,
          CurrentMentor: currentStudentMentor[0],
          TotalPrevMentor: result.length,
          PreviousMentors: result,
        });
    } else {
      res
        .status(200)
        .json({
          StudentName: newStudent.studentName,
          CurrentMentor: "",
          TotalPrevMentor: result.length,
          PreviousMentors: result,
        });
    }
  } catch (err) {
    res.status(400).json({ message: `Error \b ${err}` });
  }
});

//UPDATE SPECIFIC STUDENT TO ASSIGN A MENTOR
router.put("/update/:studentID", async (req, res) => {
  try {
    const _id = req.params.studentID;
    const {studentName, currentMentor } = req.body;
    const newStudent = await Student.findOne({ _id });
    const newMentor = await Mentor.findOne({ _id: currentMentor });
    const allMentor = await Mentor.find();

    allMentor.forEach(async (ele) => {
      if (ele._id.toString() != currentMentor) {
        const checkStudent = ele.assignedStudents;
        const arrStringStudentID = checkStudent.map((ele) => ele.toString());
        const arr_result = arrStringStudentID.filter((value) => value != _id);
        await Mentor.updateOne(
          { _id: ele._id },
          { assignedStudents: arr_result }
        );
      }
    });

    const mentorAssignedStudents = newMentor.assignedStudents;
    const checkForMentorAssign = mentorAssignedStudents.map((ele) =>
      ele.toString()
    );

    const result = checkForMentorAssign.filter((ele) => ele == _id);
    if (result.length == 0) {
      mentorAssignedStudents.push(_id);
      await Mentor.updateOne(
        { _id: currentMentor },
        { assignedStudents: mentorAssignedStudents }
      );
    }

    if (!newStudent.currentMentor) {
      await Student.updateOne({ _id }, { studentName, currentMentor});
    } else if (newStudent.currentMentor.toString() != currentMentor) {
      const prevMentor = newStudent.currentMentor;
      const prevMentorArray = newStudent.previousMentors;
      if (prevMentorArray.length == 0) {
        prevMentorArray.push(prevMentor);
        await Student.updateOne(
          { _id },
          {studentName, currentMentor, previousMentors: prevMentorArray }
        );
      } else {
        const checkArray = prevMentorArray.map((ele) => ele.toString());
        let check = checkArray.filter((ele) => ele == prevMentor.toString());
        if (check.length == 0) {
          prevMentorArray.push(prevMentor);
          await Student.updateOne(
            { _id },
            {studentName, currentMentor, previousMentors: prevMentorArray }
          );
        } else {
          await Student.updateOne({ _id }, {studentName, currentMentor });
        }
      }
    } else {
      return res.status(400).json({ message: "Already have" });
    }
    res.status(200).json({ message: "Successfull" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error while updating student data", error: err });
  }
});

//DELETE SPECIFIC STUDENT
router.delete("/delete/:studentID", async (req, res) => {
  try {
    const _id = req.params.studentID;
    const newStudent = await Student.findOne({ _id });
    await Student.deleteOne({ _id });
    res
      .status(200)
      .send(`Deleted ${newStudent.studentName} student data Successfully`);
  } catch {
    res.status(400), send(err);
  }
});

module.exports = router;
