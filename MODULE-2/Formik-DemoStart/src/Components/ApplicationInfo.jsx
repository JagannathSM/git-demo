import React from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function ApplicationInfo() {

    const navigate = useNavigate();

    const infoStyle = {
        textAlign:"justify",
        paddingLeft:"10px"
    }
    const listStyle= {
        marginLeft:"20px",
        marginBottom:"3px"
    }

  return (
    <>
    <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate(-1)}>
        Back
    </Button>
    <div>
        <h2 style={{display:"flex", justifyContent:"center"}}>Web Application Info and How to Use It</h2>
    </div>
    <div>
        <h2>Task Objective : </h2>
        <p style={infoStyle}>Create an admin dashboard for a library management system that allows users to manage book and author details. Use Formik for all form validations.</p>
    </div>
    <div>
        <h2>Requirements : </h2>
        <ol style={infoStyle}>
            <li style={listStyle}>Users should be able to add, edit, and delete book records.</li>
            <li style={listStyle}>Each book record should contain the title, author, ISBN number, and publication date.</li>
            <li style={listStyle}>Users should be able to add, edit, and delete author records.</li>
            <li style={listStyle}>Each author record should contain the author's name, birth date, and a short biography.</li>
            <li style={listStyle}>All forms used in the dashboard should be validated using Formik.</li>
            <li style={listStyle}>The dashboard should have a clean and responsive design that is easy to use and navigate.</li>
        </ol>
    </div>
    <div>
        <h2>How to Use : </h2>
        <ol style={infoStyle}>
            <li style={listStyle}>Login to get user name.</li>
            <li style={listStyle}>The login page is only for getting the dashboard experience, its not completely functional.</li>
            <li style={listStyle}>In dashboard user can see there Book details and Author details which they saved by clicking the respective fields.</li>
            <li style={listStyle}>User can able to edit / delete the exisitng details.</li>
            <li style={listStyle}>User can able to add more authors or book details by using the respective button that will show in drawer when clicking the menu icon which located top left in app bar</li>
            <li style={listStyle}>All the CRED operations were done by axios fetch using mock API</li>
        </ol>
    </div>
    </>
  )
}

export default ApplicationInfo
