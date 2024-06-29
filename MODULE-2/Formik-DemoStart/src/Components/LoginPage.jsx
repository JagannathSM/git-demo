import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'


const formValidationSchema = yup.object({
    name: yup
        .string()
        .min(5, "Name too short need atleast 5 chars")
        .max(10,"Name too long max 10 chars")
        .required("Please enter the user name")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    Password: yup 
        .string()
        .min(6,"password Should Be 6 digits")
        .max(6,"password Should Be 6 digits")
        .required("Please Fill the password")
        .matches(/^\d{6}$/, "Only numbers Allowed for password"),
    // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#$/&*!]).{8, 12}$/
  });


function LoginPage({setUserName}) {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { name : "" , Password : "" },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
          setUserName(values.name)
          navigate("/Dashboard")
        }
      });

    const styleErrorMsg = {
        color:"red",
        fontWeight:"bold"
      }

      const inputStyle = {
        margin:"5px",
        padding:"5px"
      }

      const formStyle = {
        display: "flex", 
        flexWrap:"wrap", 
        flexDirection: "column", 
        alignContent: "center",
        border: "1px solid black",
        maxWidth: "300px",
        boxShadow : "2px 2px 5px gray"
    }

    const headingStyle = {
        display:"flex",
        justifyContent:"center",
        textAlign: "center"
    }

  return (
    <>
    <div style={headingStyle}><h1>Welcome to  library management system </h1></div>
    <div style={headingStyle}><h3>Please provide required info to login</h3></div>
    <div style={headingStyle}><p><mark>Note : Loginpage is not fully functional // This webapplication was not build to check or save user logindetails while login. // Dont know this is also part of the task or not. Thank You</mark></p></div>
        <div style={{display:"flex", flexWrap:"wrap", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
        <Box component="form" sx={formStyle} autoComplete="off" onSubmit={formik.handleSubmit}>
            <Box component="section" sx={{ p: 2 }}>
                <label id='UserName'><b>User Name *</b></label><br/>
                <input type='text' htmlFor="UserName" name='name' style={inputStyle} placeholder='Ex: MohanRaj'
                    value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                    {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
                </Typography>
            </Box>

            <Box component="section" sx={{ p: 2 }}>
                <label id='Pass'><b>6 Digit Password *</b></label><br/>
                <input type='password' htmlFor="Pass" name='Password' style={inputStyle} placeholder='Ex: 123456'
                    value={formik.values.Password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                    {formik.touched.Password && formik.errors.Password ? formik.errors.Password : ""}
                </Typography>
            </Box>

            <Box component="section" sx={{ p: 2, display:"flex",justifyContent:"center" }}> 
                <Button variant="contained" type='submit'>Log In</Button>
            </Box>
           
        </Box>
        </div>
    </>
  )
}

export default LoginPage
