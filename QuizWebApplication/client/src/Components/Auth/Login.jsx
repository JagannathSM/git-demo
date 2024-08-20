import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { FaSignInAlt } from "react-icons/fa";
import { loginSchema } from "../../../Schema/Schema";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import http from "../../../utils/http";
import { useEffect } from "react";
import { useGlobal } from "../../GlobalContext/GlobalProvider";

const Login = () => {

  const { loginUser } = useGlobal();

  useEffect(()=>{
    if(loginUser){
      navigate("/dashboard");
    }
  },[])

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleLoginSubmit(values);
    },
  });

  const handleLoginSubmit = async (values) => {
    setLoading(true);
    try {
      const { data } = await http.post("/auth/login", values);
      localStorage.setItem("token", data.token);
      setLoading(false);
      navigate("/dashboard");
      toast.success("Login Successful",{
        position:"top-right",
        autoClose:5000,
      })
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
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box>
            <img
              src="/quiz.png"
              alt="Quizz_Img"
              style={{
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                padding: "10px",
              }}
            />
          </Box>
        </Grid>

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
            <FaSignInAlt
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
              Sign In
            </Typography>
            <Box onSubmit={formik.handleSubmit} component="form" sx={{ mt: 1 }}>
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
              />

              <Typography
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
              />

              <Typography
                variant="caption"
                textAlign="center"
                display="block"
                gutterBottom
                sx={styleErrorMsg}
              >
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                {!loading ? "Sign In" : <CircularProgress size={24}/>}
              </Button>

              <Grid container>
                <Grid item xs sx={{display: "flex", justifyContent: "center"}}>
                  <Button variant="text" onClick={()=>navigate('/forgot-password')} sx={{ textDecoration:"underline",textTransform:"none", fontSize: '0.75rem' }}>Forgot Password?</Button>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "center"}}>
                  <Button variant="text" onClick={()=>navigate('/register')} sx={{ textDecoration:"underline", textTransform:"none", fontSize: '0.75rem' }}>Don't have an account? Sign Up</Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
