import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Author_Data_API from '../Author_Data_API';

const formValidationSchema = yup.object({
    name: yup
        .string()
        .min(5, "Name too short need atleast 5 chars")
        .required("Please enter the author name")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    DOB: yup
        .string()
        .required("Please enter the author DOB"),
    bio: yup 
        .string()
        .min(20,"Bio too short, need atleast 20 chars")
        .required("Please fill the author's Bio")
    // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#$/&*!]).{8, 12}$/
  });


function FormikAuthor() {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: { name: "", DOB: "", bio:""},
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
          handleAddAuthor(values);
        },
      });

      const handleAddAuthor = async (values) =>{
        try{
            await axios.post(`${Author_Data_API}`,values)
            navigate("/Authorlist")

        } catch (error){
            console.log("Error while Adding Author data", error)
        }
      }

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
        alignContent: "center"
    }

  return (
    <>
    <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} onClick={()=>navigate(-1)}>
        Back
    </Button>
    <div style={formStyle}><h2 style={{textAlign:"center"}}>Please provide all information to add Author detail</h2></div>
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
    <Box component="form"  sx={formStyle} autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box component="section" sx={{ p: 2 }}>
            <label id='AuthorName'><b>Author Name *</b></label><br/>
            <input type='text' htmlFor="AuthorName" name='name' style={inputStyle} placeholder='Author Name...'
                value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
            </Typography>
        </Box>
        
        <Box component="section" sx={{ p: 2 }}>   
            <label id='DOB'><b>Author DOB *</b></label><br/>
            <input type='date' htmlFor="DOB" name='DOB' style={inputStyle}
                value={formik.values.DOB} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.DOB && formik.errors.DOB ? formik.errors.DOB : ""}
            </Typography>
        </Box>
            
        <Box component="section" sx={{ p: 2 }}>   
            <label id='AuthorBio'><b>Author Bio *</b></label><br/>
            <textarea htmlFor="AuthorBio" rows="4" cols="25" label="Author Bio" name='bio' style={inputStyle} placeholder='Author Bio...'
                value={formik.values.bio} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.bio && formik.errors.bio ? formik.errors.bio : ""}
            </Typography>
        </Box>
           
        <Box component="section" sx={{ p: 2, display:"flex",justifyContent:"center" }}>  
            <Button variant="contained" type='submit'>Add Author</Button>
        </Box>
    </Box>
    </div>
    </>
  )
}

export default FormikAuthor
