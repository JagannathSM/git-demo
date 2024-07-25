import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Button from "@mui/material/Button";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Dashboard() {
  const [studentName, setStudentName] = useState("");
  const [mentorName, setMentorName] = useState("");

  const [studentsData, setStudentsData] = useState("");
  const [mentorsData, setMentorsData] = useState("");

  const getStudentData = async () => {
    const { data } = await axios.get(
      "https://assign-mentor-backend-pws4.onrender.com/student/show"
    );
    setStudentsData(
      data.allstudents.filter((ele) => ele.currentMentorName.length == 0)
    );
  };

  const getMentorData = async () => {
    const { data } = await axios.get(
      "https://assign-mentor-backend-pws4.onrender.com/mentor/show"
    );
    setMentorsData(data.allmentors);
  };

  const showStudent = async () => {
    console.log(studentName);
    try {
      await axios.post(
        "https://assign-mentor-backend-pws4.onrender.com/student/add",
        { studentName }
      );
      setStudentName("");
      getStudentData();
    } catch (err) {
      alert(`${err.response.data.message}. Student Name already Exist`);
    }
  };

  const showMentor = async () => {
    console.log(mentorName);
    try {
      await axios.post(
        "https://assign-mentor-backend-pws4.onrender.com/mentor/add",
        { mentorName }
      );
      setMentorName("");
      getMentorData();
    } catch (err) {
      console.log(err);
      alert(`${err.response.data.name}. Mentor Name already Exist`);
    }
  };

  useEffect(() => {
    getStudentData();
    getMentorData();
  }, []);

  return (
    <>
      <div className="centered">
        <h2>Add Student</h2>
        <Box sx={{ paddingBottom: "10px", display:"flex",justifyContent: "space-evenly",    alignItems: "center"}}>
          <TextField
            id="studentName"
            label="Student Name"
            variant="outlined"
            onChange={(e) => setStudentName(e.target.value)}
          />
          <Button variant="contained" onClick={showStudent}>Add Student</Button>
        </Box>
        <div className="Table">
          {studentsData.length > 0 ? (
            <div>
              <div className="WarningText">
                Students not having current mentors shown in this Table
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Student Name</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentsData.map((ele) => (
                      <TableRow key={ele._id}>
                        <TableCell component="th" scope="row">
                          {ele.studentName[0]}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="outlined"
                            startIcon={<PersonAddAlt1Icon />}
                          >
                            Assign Mentor
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ) : (
            <div className="WarningText">All Students were assigned to a mentor. Add more Students</div>
          )}
        </div>
      </div>

      <div className="centered">
        <h2>Add Mentor</h2>
        <Box sx={{ paddingBottom: "10px", display:"flex", justifyContent: "space-evenly",    alignItems: "center"}}>
          <TextField
            id="mentorName"
            label="Mentor Name"
            variant="outlined"
            onChange={(e) => setMentorName(e.target.value)}
          />
          <Button variant="contained" onClick={showMentor}>Add Mentor</Button>
        </Box>
        <div className="Table">
          <div>
            {mentorsData.length > 0 ? (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Mentor Name</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mentorsData.map((ele) => (
                      <TableRow key={ele._id}>
                        <TableCell component="th" scope="row">
                          {ele.mentorName[0]}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="outlined"
                            startIcon={<GroupAddIcon />}
                          >
                            Assign Students
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              "Add mentor to shoe table"
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
