import React from 'react'
import Box from '@mui/material/Box';
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Book_Data_API from '../Book_Data_API';

const formValidationSchema = yup.object({
    title: yup
        .string()
        .min(5, "Name too short need atleast 5 chars")
        .max(30,"Book name too long")
        .required("Please enter the book name")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    thumbnailUrl: yup
        .string()
        .url("Image Url Should be Valid")
        .max(200, "Image URL is too long try short one")
        .required("Please enter the book URL"),
    authors: yup
        .string()
        .min(5, "Name too short need atleast 5 chars")
        .max(30,"Name Too long try give first name alone")
        .required("Please enter the book's author name")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    publishedDate: yup
        .string()
        .required("Please enter the book publication date"),
    shortDescription: yup 
        .string()
        .min(20,"Book desc is too short, need atleast 20 chars")
        .required("Please fill the Book's Desc"),
    // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#$/&*!]).{8, 12}$/
    isbn: yup 
        .string()
        .min(10,"ISBN no. should be 10-digit")
        .max(10,"ISBN no. should be 10-digit")
        .required("Please enter the ISBN number of the book")
        .matches(/^([0-9]{10})$/ , "ISBN should be Number"),
    pageCount: yup 
        .string()
        .min(2,"Page Count Minimun of 2 Digits")
        .max(5,"Page Count Maximum of 5 Digits")
        .required("Please enter the Page Count of the book")
        .matches(/^([0-9]{2,})$/ , "Page Count should be Number")
  });


function FormikBook() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { title: "", thumbnailUrl:"", authors:"", publishedDate: "", shortDescription:"", isbn:"", pageCount:""},
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
          handleAddBook(values)
        }
      });

      const handleAddBook = async (values) => {
        try{
            await axios.post(`${Book_Data_API}`,values)
            navigate('/Booklist')

        }catch (error){
            console.log("Error while Adding the book data", error)
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
    <div style={formStyle}><h2 style={{textAlign:"center"}}>Please provide all information to add Book detail</h2></div>
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
    <Box component="form" sx={formStyle} autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box component="section" sx={{ p: 2 }}>
            <label id='BookName'><b>Book Title *</b></label><br/>
            <input type='text' htmlFor="BookName" name='title' style={inputStyle} placeholder='Book Title...'
                value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.title && formik.errors.title ? formik.errors.title : ""}
            </Typography>
        </Box>

        <Box component="section" sx={{ p: 2 }}>
            <label id='BookPoster'><b>Book Image URL *</b></label><br/>
            <input type='text' htmlFor="BookPoster" name='thumbnailUrl' style={inputStyle} placeholder='Book Image URL...'
                value={formik.values.thumbnailUrl} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.thumbnailUrl && formik.errors.thumbnailUrl ? formik.errors.thumbnailUrl : ""}
            </Typography>
        </Box>

        <Box component="section" sx={{ p: 2 }}>
            <label id='AuthorName'><b>Author Name *</b></label><br/>
            <input type='text' htmlFor="AuthorName" name='authors' style={inputStyle} placeholder='Author Name...'
                value={formik.values.authors} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.authors && formik.errors.authors ? formik.errors.authors : ""}
            </Typography>
        </Box>
        
        <Box component="section" sx={{ p: 2 }}>   
            <label id='Publication'><b>Book Publication Date *</b></label><br/>
            <input type='date' htmlFor="Publication" name='publishedDate' style={inputStyle}
                value={formik.values.publishedDate} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.publishedDate && formik.errors.publishedDate ? formik.errors.publishedDate : ""}
            </Typography>
        </Box>
            
        <Box component="section" sx={{ p: 2 }}>   
            <label id='BookDesc'><b>Short Description *</b></label><br/>
            <textarea htmlFor="BookDesc" rows="4" cols="25" name='shortDescription' style={inputStyle} placeholder='About Book...'
                value={formik.values.shortDescription} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.shortDescription && formik.errors.shortDescription ? formik.errors.shortDescription : ""}
            </Typography>
        </Box>

        <Box component="section" sx={{ p: 2 }}>
            <label id='ISBN'><b>Book ISBN 10-Digit No. *</b></label><br/>
            <input type='text' htmlFor="ISBN" name='isbn' style={inputStyle} placeholder='Book 10 Digit ISBN...'
                value={formik.values.isbn} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.isbn && formik.errors.isbn ? formik.errors.isbn : ""}
            </Typography>
        </Box>

        <Box component="section" sx={{ p: 2 }}>
            <label id='Page'><b>Book Page Count *</b></label><br/>
            <input type='text' htmlFor="Page" name='pageCount' style={inputStyle} placeholder='Total Page Count...'
                value={formik.values.pageCount} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
            <Typography variant="caption" display="block" gutterBottom sx={styleErrorMsg}>
                {formik.touched.pageCount && formik.errors.pageCount ? formik.errors.pageCount : ""}
            </Typography>
        </Box>
           
        <Box component="section" sx={{ p: 2, display:"flex",justifyContent:"center" }}>  
            <Button variant="contained" type='submit'>Add Book</Button>
        </Box>
    </Box>
    </div>
    </>
  )
}

export default FormikBook

