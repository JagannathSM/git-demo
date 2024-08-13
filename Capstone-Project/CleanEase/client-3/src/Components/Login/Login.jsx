import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import http from '../../../utils/http';
import { loginSchema } from '../../Schema/Schema';
import { useFormik } from 'formik';

function Login() {
    const [error,setError]= useState('');

    const navigate = useNavigate();

    const formik = useFormik({
      initialValues: { email:"" , password:"" },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        handleLoginSubmit(values)
      }
    });

    const handleLoginSubmit = async(values)=>{
        try {
          const { data } = await http.post("/auth/login", values);
          localStorage.setItem("token", data.token);
          window.location = "/";
        } catch(err){
            if(err.message == "Network Error"){
                setError("Connection timeOut! DB not responding")
            } else if(err.response.status == 400){
                setError(err.response.data)
            }else{
                setError(`Error while login. Try agin later ${err.message}`);
            }
        }
    }

    const styleErrorMsg = {
      color:"red",
      fontWeight:"bold"
    }

  return (
    <>
    <div className="LoginBack">
    <Container maxWidth="xs" sx={{marginTop:"3rem",marginBottom:"3rem",marginRight:"10px",marginLeft:"10px",padding:"1rem", borderRadius:"5px", color: "#fff",
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
          Login with Valid Credentials
        </Typography>
        <Box component="form" 
          onSubmit={formik.handleSubmit}
        // onSubmit={handleSubmit} 
        sx={{ mt: 1 }}>
          <TextField
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


          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // value={password}
            // onChange={(e)=>setPassword(e.target.value)}
            value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
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
                {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
          </Typography>
          
          {error && <Typography variant="subtitle2" sx={{color:"#d32f2f",textAlign:"center"}}>{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2,color: "#333", backgroundColor: "#fff" }}
          >
            Sign In
          </Button>
          <Box display="flex" justifyContent="space-between">
          <Button variant="text" onClick={()=>navigate('/forgot-password')} sx={{textDecoration:"underline",textTransform:"none",color: "#fff"}}>Forgot Password?</Button>
          <Button variant="text" onClick={()=>navigate('/register')} sx={{textDecoration:"underline", textTransform:"none",color: "#fff"}}>Don't have an account? Sign Up</Button>
          </Box>
        </Box>
      </Box>
    </Container>
    </div>
    </>
  );
}

export default Login;


//sx={{ textDecoration: "underline", textTransform: "none", color: "#fff" }}


//backgroundColor: "lightgreen", // Change background color to light green
//color: "#fff", // Set text color to white
//sx={{
// fontWeight: "700",
//  textAlign: "center",
//  color: "#fff", // Set header text color to white
//  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
