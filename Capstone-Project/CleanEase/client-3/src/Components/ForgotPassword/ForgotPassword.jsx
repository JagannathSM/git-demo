import React, {useState} from 'react';
import { Container, TextField, Button, Box, Typography, Alert } from '@mui/material';
import http from '../../../utils/http';
import './ForgotPassword.css'
import { forgotPassSchema } from'../../Schema/Schema';
import { useFormik } from 'formik';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';


function ForgotPassword() {
  const navigate = useNavigate();
  const [error,setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('');

  const formik = useFormik({
    initialValues: { email:"" },
    validationSchema: forgotPassSchema,
    onSubmit: (values) => {
      handleForgotPassSubmit(values)
    }
  });



  const handleForgotPassSubmit = async (values) => {
    try{
      await http.post('/auth/resetPass',values);
      setSuccessMessage('A password reset link has been sent to your email address. Please follow the link to reset Password');
      setEmail('');
    } catch(err){
      if (err.message == "Network Error") {
        setError("Connection timeout! / DB not responding");
      } else if (err.response.status == 400) {
        setError(err.response.data);
      } else {
        setError(err.message);
      }
    }
  };

  const styleErrorMsg = {
    color:"red",
    fontWeight:"bold"
  }

  return (
    <div className='ForgotPassBack'>
    <Container component="main" maxWidth="xs" sx={{marginTop:"3rem",marginBottom:"3rem",marginRight:"10px",marginLeft:"10px",padding:"1rem", borderRadius:"5px", color: "#fff",
       border:"2px solid rgba(255,255,255,0.1)",boxShadow:"0px 0px 10px rgba(0,0,0,0.1)", backdropFilter:"blur(18px)"}}>

        <Button sx={{mt: 2, mb: 2,color: "#333", backgroundColor: "#fff"  }} startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} variant="contained">Back</Button>

      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{fontWeight:"900",textAlign:"center", color: "#fff", fontSize:"1.3rem",  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"}}>
          Forgot Password
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1,color: "#fff", fontSize:"0.8rem"}}>
          Enter your email address below, and we'll send you a link to reset your password.
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // value={email}
            // onChange={(e)=>setEmail(e.target.value)}
            value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
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
              {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
          </Typography>


          {error && (
              <Typography
                variant="subtitle2"
                sx={{color: "#d32f2f", textAlign: "center" }}
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
            Send Reset Link
          </Button>
          {successMessage && <Alert severity="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
        </Box>
      </Box>
    </Container>
    </div>
  );
}

export default ForgotPassword;
