import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import http from "../../../utils/http";
import { resetPassSchema } from "../../../Schema/Schema";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  const { passResetToken } = useParams();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { confirmPassword: "", newPassword: "" },
    validationSchema: resetPassSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });


  const handleSubmit = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      toast.error('Passwords do not match',{
        position:"top-right",
        autoClose:5000,
      });
    } else {
      setLoading(true);
      try {
        const {data} = await http.put(
          `/auth/updatePass/${passResetToken}`,
          values
        );
  
        toast.success("Your password has been updated successfully.",{
          position: "top-right",
          autoClose: 5000,
        });
  
        localStorage.setItem("token", data.token);
        navigate('/dashboard');
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
          toast.error(`Error while resetPassword. Try again later: ${err.message}`, {
            position: "top-right",
            autoClose: 5000,
          });
        }
      }
  

    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
          backgroundColor: "rgba(255, 255, 255, 0.805)",
          borderRadius: 2,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          p:2
        }}
      >
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ mt: 3, width: '100%' }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="New Password"
            type="password"
            id="newPassword"
            autoComplete="new-password"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.newPassword && formik.errors.newPassword ? true : false}
            helperText={formik.errors.newPassword}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
            helperText={formik.errors.confirmPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            {!loading ? "Reset Password" : <CircularProgress sx={{color:"white"}} size={24}/>}
          </Button>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button
              variant="text"
              onClick={() => navigate('/')}
            >
              Back to Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ResetPassword
