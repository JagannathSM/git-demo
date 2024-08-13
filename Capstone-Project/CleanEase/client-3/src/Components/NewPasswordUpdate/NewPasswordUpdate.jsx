import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, TextField, Button, Box, Typography, Alert } from '@mui/material';
import http from "../../../utils/http";
import { resetPassSchema } from '../../Schema/Schema';
import { useFormik } from 'formik';
import './NewPasswordUpdate.css'


function NewPasswordUpdate() {
  const { passResetToken } = useParams();
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');



  const formik = useFormik({
    initialValues: { confirmPassword:"" , newPassword:"" },
    validationSchema: resetPassSchema,
    onSubmit: (values) => {
      handleUpdatePassSubmit(values)
    }
  });


  const styleErrorMsg = {
    color:"red",
    fontWeight:"bold"
  }

  const handleUpdatePassSubmit = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      setError('Passwords did not match');
      return;
    }
    try {
      const {data} = await http.put(`/auth/updatePass/${passResetToken}`, values);
      alert("Your password has been updated successfully.")
      localStorage.setItem("token", data.token);
      window.location = "/";      
    } catch (err) {
      console.log(err);
      if (err.message == "Network Error") {
        setError("Connection Timeout! DB not responding");
      } else if (err.response.status == 400) {
        setError(err.response.data);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <>
    <div className='NewPasswordUpdateBack'>
    <Container component="main" maxWidth="xs" sx={{marginTop:"3rem",marginBottom:"3rem",marginRight:"10px",marginLeft:"10px",padding:"1rem", borderRadius:"5px", color: "#fff",
       border:"2px solid rgba(255,255,255,0.1)",boxShadow:"0px 0px 10px rgba(0,0,0,0.1)", backdropFilter:"blur(18px)"}}>
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{fontWeight:"900",textAlign:"center", color: "#fff", fontSize:"1.3rem",  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"}}>
          Update Password
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            id="new-password"
            label="New Password"
            name="newPassword"
            autoComplete="new-password"
            // value={newPassword}
            // onChange={(e) => setNewPassword(e.target.value)}
            value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
            //
            InputLabelProps={{
              style: { color: "#fff" }, // Set label color to white
            }}
            InputProps={{
              style: { color: "#fff" }, // Set text field text color to white
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff", // Set border color to white
                },
                "&:hover fieldset": {
                  borderColor: "#fff", // Set border color on hover to white
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff", // Set border color when focused to white
                },
              },
            }}  
            //
          />
          <Typography variant="caption" textAlign="center" display="block" gutterBottom sx={styleErrorMsg}>
              {formik.touched.newPassword && formik.errors.newPassword ? formik.errors.newPassword : ""}
          </Typography>


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            id="confirm-password"
            label="Confirm Password"
            name="confirmPassword"
            autoComplete="confirm-password"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
            value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
            //
            InputLabelProps={{
              style: { color: "#fff" }, // Set label color to white
            }}
            InputProps={{
              style: { color: "#fff" }, // Set text field text color to white
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff", // Set border color to white
                },
                "&:hover fieldset": {
                  borderColor: "#fff", // Set border color on hover to white
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff", // Set border color when focused to white
                },
              },
            }}  
            //
          />
          <Typography variant="caption" textAlign="center" display="block" gutterBottom sx={styleErrorMsg}>
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
          </Typography>

          {error && (
              <Typography
                variant="subtitle2"
                sx={{ color: "#d32f2f", textAlign: "center" }}
              >
                {error}
              </Typography>
            )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 2, mb: 2,color: "#333", backgroundColor: "#fff"  }}
          >
            Update Password
          </Button>
        </Box>
      </Box>
    </Container>
    </div>
    </>
  );
}

export default NewPasswordUpdate;
