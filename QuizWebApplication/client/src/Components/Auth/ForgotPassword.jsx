import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { forgotPassSchema } from'../../../Schema/Schema';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import http from '../../../utils/http';
import { useState } from 'react';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: forgotPassSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await http.post("/auth/resetPass", values);
      if(res.status === 200){
        toast.success("Password Reset Link send to email successfully, plz check span box too",{
          position:"top-right",
          duration:5000,
        });
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.message === "Network Error") {
        toast.error("Connection timeout! DB not responding", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (err.response && err.response.status === 400) {
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.error(`Error while login. Try again later: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  const styleErrorMsg = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
          padding:"1rem",
          backgroundColor:"rgba(255, 255, 255, 0.83)",
          border: "1px solid black",
          borderRadius:"15px"
        }}
      >
        <Typography textAlign="center" component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ mt: 3 }}
        >
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

            <Typography
              fullwidth="true"
              variant="caption"
              textAlign="center"
              display="block"
              gutterBottom
              sx={styleErrorMsg}
            >
              {formik.touched.email && formik.errors.email
                 ? formik.errors.email
                 : ""}
            </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
          {!loading ? "Send Reset Link" : <CircularProgress sx={{color:"white"}} size={24}/>}
          </Button>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button
              variant="text"
              onClick={() => navigate(-1)}
            >
              Back to Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ForgotPassword;

