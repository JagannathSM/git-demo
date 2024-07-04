import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import Author_Data_API from "../Author_Data_API";

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


function EditAuthor() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [authorData, setAuthorData] = useState("");

  const getAuthorData = async (id) => {
    try {
      const res = await axios.get(`${Author_Data_API}/${id}`);
      setAuthorData(res.data);
    } catch (error) {
      console.log(`Error while get Author ${id}`, error);
    }
  };

  useEffect(() => {getAuthorData(id)},[])

  return (
    <>
      <Button
        variant="contained"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      {authorData ? (
        <EditAuthorData authorData={authorData} />
      ) : (
        "Loading author details to edit... plaese wait..."
      )}
    </>
  )
}

function EditAuthorData({authorData}){
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: `${authorData.name}`, DOB: `${authorData.DOB}`, bio: `${authorData.bio}`},
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      const id = authorData.id;
      handleEditAuthor(values,id);
    },
  });

  const handleEditAuthor = async (values,id) => {
    try{
      await axios.put(`${Author_Data_API}/${id}`,values)
      navigate("/Authorlist")
    } catch (error){
      console.log(`Error while updating Author ${id}`, error)
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

  return(
    <>
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
            <Button variant="contained" type='submit' color="warning">Save Changes</Button>
        </Box>
    </Box>
    </div>
    </>
  )
}

export default EditAuthor
