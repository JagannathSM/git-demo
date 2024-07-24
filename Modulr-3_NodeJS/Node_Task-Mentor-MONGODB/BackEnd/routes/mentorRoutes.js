const express = require("express");
const Mentor = require("../Models/mentor");
const Student = require("../Models/student");

const router = express.Router();

// CREATE NEW MENTOR
router.post("/add", async (req, res) => {
  try {
    const mentordata = req.body;
    const mentorName = mentordata.mentorName;
    const findMentor = await Mentor.findOne({ mentorName });

    if (!findMentor) {
      const mentor = new Mentor(req.body);
      await mentor.save();
      res.status(200).send(mentor);
    } else {
      return res.status(400).send("MentorName is already exisits");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET ALL MENTOR DETAILS
router.get("/show", async (req, res) => {
  try {
    const allmentors = await Mentor.aggregate([
        {
            $lookup:{
                from:"students",
                localField:"assignedStudents",
                foreignField:"_id",
                as:"result"
            }
        },
        {
            $unwind:{
                path:"$result",
                preserveNullAndEmptyArrays:true
            }
        },
        {
            $project:{
                "mentorName":1,
                "assignedStudents":"$result.studentName"
            }
        },
        {
            $group:{
                _id:"$mentorName",
                "assignedStudents":{$addToSet:"$assignedStudents"}
            }
        }
    ]);

    res
      .status(200)
      .json({ "Total Mentors Count": allmentors.length, allmentors });
  } catch (err) {
    res.status(400).send(err);
  }
});


//GET SPECIFIC MENTOR ASSIGNED STUDENT LIST
router.get("/show/:mentorID", async (req, res) => {
  try {
    const _id = req.params.mentorID;
    const newMentor = await Mentor.findOne({ _id });

    const MentorData = await Mentor.aggregate([
        {
            $match:{
                _id : newMentor._id
            }
        },
        {
            $lookup:{
                from:"students",
                localField:"assignedStudents",
                foreignField:"_id",
                as:"result"
            }
        },
        {
            $unwind:{
                path:"$result",
                preserveNullAndEmptyArrays:true
            }
        },
        {
            $project:{
                "mentorName":1,
                "assignedStudents":"$result.studentName"
            }
        },
        {
            $group:{
                _id:"$mentorName",
                "assignedStudents":{$addToSet:"$assignedStudents"}
            }
        }
    ]);

    res.status(200).json(MentorData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//UPDATE SPECIFIC MENTOR TO ASSIGN MULTIPLE STUDENTS
router.put("/update/:mentorID", async (req, res) => {
  try {
    const _id = req.params.mentorID;
    const { mentorName, assignedStudents } = req.body;
    const updateMentor = await Mentor.findOne({ _id });

    if (!assignedStudents || assignedStudents.length == 0) {
      await Mentor.updateOne({ _id }, { mentorName });
    } else {
      await Mentor.updateOne(
        { _id },
        { mentorName, assignedStudents: assignedStudents }
      );

      const mentors = await Mentor.find();
      const dataMentor = mentors.filter((ele) => ele._id != _id);
      dataMentor.forEach(async (ele) => {
        const arr = ele.assignedStudents;
        const arr1 = arr.map((ele) => ele.toString());
        const arr2 = assignedStudents;
        const difference = arr1.filter((x) => !arr2.includes(x));
        await Mentor.updateOne(
          { _id: ele._id },
          { assignedStudents: difference }
        );
      });
      assignedStudents.forEach(async (student) => {
        const studentData = await Student.find({ _id: student });
        if (!studentData[0].currentMentor) {
          await Student.updateOne({ _id: student }, { currentMentor: _id });
          return;
          // return res.status(200).json({message:`Successfully Updated ${updateMentor.mentorName}`})
        } else if (studentData[0].currentMentor == _id) {
          return;
          // return res.status(500).json({message:`Student ${studentData[0].studentName} already assigned for this memtor`})
        } else {
          const preMentor = studentData[0].currentMentor;
          const preArrayMenotors = studentData[0].previousMentors;
          if (preArrayMenotors.length == 0) {
            preArrayMenotors.push(preMentor);
            await Student.updateOne(
              { _id: student },
              { currentMentor: _id, previousMentors: preArrayMenotors }
            );
          } else {
            const checkArray = preArrayMenotors.map((ele) => ele.toString());
            let check = checkArray.filter((ele) => ele == preMentor.toString());
            if (check.length == 0) {
              preArrayMenotors.push(preMentor);
              await Student.updateOne(
                { _id: student },
                { currentMentor: _id, previousMentors: preArrayMenotors }
              );
            } else {
              await Student.updateOne({ _id: student }, { currentMentor: _id });
            }
          }
          // res.status(200).json({message:`Successfully Updated ${updateMentor.mentorName}`})
        }
      });
    }

    res
      .status(200)
      .json({ message: `Successfully Updated ${updateMentor.mentorName}` });
  } catch (err) {
    res.status(400).json({ message: "Error while update mentor", error: err });
  }
});

//DELETE SPECIFIC MENTOR
// router.delete("/delete/:mentorID", async (req, res) => {
//   try {
//     const _id = req.params.mentorID;
//     const newMentor = await Mentor.findOne({ _id });
//     await Mentor.deleteOne({ _id });
//     res
//       .status(200)
//       .send(`Deleted ${newMentor.mentorName} mentor data Successfully`);
//   } catch {
//     res.status(400), send(err);
//   }
// });

module.exports = router;
