import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';

const formValidationSchema = yup.object({
    name: yup
        .string()
        .min(5, "Need a longer email")
        .required("Why not fill the name?"),
    DOB: yup
        .string()
        .min(8,"Fill properly")
        .max(12, "Too much")
        .required("Why not fill the DOB")
        .matches(
            /^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+[0-9]{1,2}[,]\s+[0-9]{4}$/,
            "DOB pattern should be Ex - Sep 10, 1990"),
    bio: yup 
        .string()
        .min(20,"Fill properly")
        .required("Why not fill the bio")
    // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#$/&*!]).{8, 12}$/
  });


function FormikAuthor() {

    const formik = useFormik({
        initialValues: { name: "", DOB: "", bio:""},
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
          console.log("onSubmit", values);
        },
      });

  return (
    <>
    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField required id="outlined-required" label="Author Name" name='name'
            value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

        <TextField required id="outlined-required" label="Author DOB" name='DOB'
            value={formik.values.DOB} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.DOB && formik.errors.DOB ? formik.errors.DOB : ""}

        <TextField id="outlined-multiline-flexible" label="Author Bio" multiline maxRows={4} placeholder="bio" name='bio'
            value={formik.values.bio} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.bio && formik.errors.bio ? formik.errors.bio : ""}

        <Button variant="contained" type='submit'>Submit</Button>
    </Box>
    </>
  )
}

export default FormikAuthor
