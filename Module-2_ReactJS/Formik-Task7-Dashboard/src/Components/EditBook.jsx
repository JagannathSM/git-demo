import React, { useEffect, useState } from "react";
import axios from "axios";
import Book_Data_API from "../Book_Data_API";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";

const formValidationSchema = yup.object({
  title: yup
    .string()
    .min(5, "Name too short need atleast 5 chars")
    .max(30, "Book name too long")
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
    .max(30, "Name Too long try give first name alone")
    .required("Please enter the book's author name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  publishedDate: yup
    .string()
    .required("Please enter the book publication date"),
  shortDescription: yup
    .string()
    .min(20, "Book desc is too short, need atleast 20 chars")
    .required("Please fill the Book's Desc"),
  // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#$/&*!]).{8, 12}$/
  isbn: yup
    .string()
    .min(10, "ISBN no. should be 10-digit")
    .max(10, "ISBN no. should be 10-digit")
    .required("Please enter the ISBN number of the book")
    .matches(/^([0-9]{10})$/, "ISBN should be Number"),
  pageCount: yup 
    .string()
    .min(2,"Page Count Minimun of 2 Digits")
    .max(5,"Page Count Maximum of 5 Digits")
    .required("Please enter the Page Count of the book")
    .matches(/^([0-9]{2,})$/ , "Page Count should be Number")
});

function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookData, setBookData] = useState("");

  const getBookData = async (id) => {
    try {
      const res = await axios.get(`${Book_Data_API}/${id}`);
      setBookData(res.data);
    } catch (error) {
      console.log(`Error while get Book ${id}`, error);
    }
  };

  useEffect(() => {getBookData(id)},[])

  return (
    <>
      <Button
        variant="contained"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      {bookData ? (
        <EditBookData bookData={bookData} />
      ) : (
        "Loading book details to edit... plaese wait..."
      )}
    </>
  );
}

function EditBookData({ bookData }) {
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      title: `${bookData.title}`,
      thumbnailUrl: `${bookData.thumbnailUrl}`,
      authors: `${bookData.authors}`,
      publishedDate: `${bookData.publishedDate}`,
      shortDescription: `${bookData.shortDescription}`,
      isbn: `${bookData.isbn}`,
      pageCount: `${bookData.pageCount}`
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      const id = bookData.id;
      handleEditBook(values,id)
    },
  });

  const handleEditBook = async(values,id) => {
    try{
      await axios.put(`${Book_Data_API}/${id}`,values);
      navigate("/Booklist");
    } catch (error) {
      console.log(`Error while updating the Book ${id}`,error)
    }
  }

  const styleErrorMsg = {
    color: "red",
    fontWeight: "bold",
  };

  const inputStyle = {
    margin: "5px",
    padding: "5px",
  };

  const formStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "center",
  };

  return (
    <>
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
            <Button variant="contained" type='submit' color="warning">Save Changes</Button>
        </Box>
    </Box>
    </div>
  </>
  )
  
}

export default EditBook;
