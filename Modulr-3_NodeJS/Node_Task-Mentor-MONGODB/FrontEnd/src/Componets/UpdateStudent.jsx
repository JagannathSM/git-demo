import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function UpdateStudent() {
  const navigat = useNavigate();
  const { _id } = useParams();
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState("");
  const [currentMentorID, setCurrentMentorID] = useState("");
  const [studentName, setStudentName] = useState("");

  const getValues = async (_id) => {
    if (!studentName || !currentMentorID) {
      alert("Need to fill all Required Fields");
    } else {
      try {
        await axios.put(
          `https://assign-mentor-backend-pws4.onrender.com/student/update/${_id}`,
          { studentName, currentMentor: currentMentorID }
        );
        navigat(-1);
      } catch (err) {
        alert(
          `Warning message : ${err.response.data.message}. Only studentName will update`
        );
      }
    }
  };

  const getStudentData = async (_id) => {
    try {
      const { data } = await axios.get(
        `https://assign-mentor-backend-pws4.onrender.com/student/show/${_id}`
      );
      if (data.StudentData.currentMentorID.length == 1) {
        setCurrentMentorID(data.StudentData.currentMentorID[0]);
      }
      setStudentName(data.StudentData._id);
    } catch (err) {
      setError(`Error While getting Student Data ${err.response.data.message}`);
    }
  };

  const getMentorsData = async () => {
    try {
      const { data } = await axios.get(
        "https://assign-mentor-backend-pws4.onrender.com/mentor/show"
      );
      setMentors(data.allmentors);
    } catch (err) {
      setError(`Error While getting Mentors Data ${err.response.data.message}`);
    }
  };

  const handleChangeSelect = (e) => {
    setCurrentMentorID(e.target.value);
  };

  useEffect(() => {
    getStudentData(_id);
    getMentorsData();
  }, []);

  if (!mentors || !studentName)
    return <div>Loading Mentor Assign Page for Selected Student</div>;

  if (error) return <div>{error}</div>;

  return (
    <>
      <div>
        <p>Update Student / Assign Mentor to Student - {studentName}.</p>
        {/* <button onClick={getValues}>get</button> */}
        <Box component="form" sx={{ m: 1, width: "25ch" }} noValidate>
          <TextField
            id="StudentName"
            label="Student Name"
            value={studentName}
            variant="outlined"
            required
            onChange={(e) => setStudentName(e.target.value)}
          />

          <InputLabel id="Select_Mentor_Name">Current Mentor</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={currentMentorID}
            label="Select_Mentor_Name"
            onChange={handleChangeSelect}
            input={<OutlinedInput label="Name" />}
            required
          >
            {mentors.map((ele) => (
              <MenuItem key={ele._id} value={ele._id}>
                {ele.mentorName[0]}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            onClick={() => {
              getValues(_id);
            }}
          >
            Get Values
          </Button>
        </Box>
      </div>
    </>
  );
}

export default UpdateStudent;
