import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import { registerSchema } from "../../../Schema/Schema";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import http from "../../../utils/http";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username:'', email: "", password: "" },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      handleLoginSubmit(values);
    },
  });

  const handleLoginSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await http.post("/auth/register", values);
      if(res.status === 200){
        toast.success("Registeration Success, login with valid credentials.");
        navigate('/');
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
    <Container sx={{ marginTop: "10px", padding: "1rem" }} maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              padding: 4,
              backgroundColor: "rgba(255, 255, 255, 0.755)",
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <FaUserPlus
              size={40}
              color="#3f51b5"
              style={{ display: "block", margin: "0 auto" }}
            />
            <Typography
              component="h1"
              variant="h5"
              align="center"
              sx={{ mt: 2 }}
            >
              Sign Up
            </Typography>
            <Box onSubmit={formik.handleSubmit} component="form" sx={{ mt: 1 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Username"
                label="User Name"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && formik.errors.username ? true : false}
                helperText={formik.errors.username}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email ? true : false}
                helperText={formik.errors.email}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password ? true : false}
                helperText={formik.errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                {!loading ? "Sign In" : <CircularProgress sx={{color:"white"}} size={24}/>}
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box>
            <img
              src="/quiz_register.jpg"
              alt="Quizz_Register_Img"
              style={{
                backgroundSize: "cover",
                height: "117vh",
                width: "100%",
                padding: "10px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
