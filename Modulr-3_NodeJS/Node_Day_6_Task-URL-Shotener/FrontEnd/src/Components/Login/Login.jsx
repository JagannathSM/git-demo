import React, {useEffect, useState} from 'react'
import http from '../../../utils/http'
import { useNavigate } from "react-router-dom";
import { useToken } from '../../TokenContext/TokenProvider';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import './Login.css'

function Login() {
  let navigate = useNavigate();
  const user = useToken();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [animation,setAnimation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      setError("Credentials required for login");
      return;
    } else {
      setAnimation(true);
      try {
        const { data } = await http.post("/auth/login", loginDetails);
        localStorage.setItem("token", data.token);
        window.location = "/";
      } catch (err) {
        setAnimation(false)
        if (err.message == "Network Error") {
          setError("Connection timeout! / DB not responding");
        } else if (err.response.status == 400) {
          setError(err.response.data);
        } else {
          setError(err.message);
        }
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);


  return (
    <>
      <div className="Form">
        <Box
          className="Box"
          component="form"
          sx={{ m: 1, width: "35ch" }}
          noValidate
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Typography
            variant="body2"
            className="header"
            sx={{
              textShadow: " -2px 0px 2px gray",
              fontWeight: "600",
              marginTop: " 5px",
            }}
            gutterBottom
          >
            Provide valid credentials to login
          </Typography>
          <TextField
            type="email"
            name="email"
            id="Email"
            label="Email"
            variant="outlined"
            sx={{ margin: "10px 2px", width: "85%" }}
            onChange={handleChange}
          />
          <TextField
            type="password"
            name="password"
            id="Password"
            label="Password"
            variant="outlined"
            sx={{ margin: "10px 2px", width: "85%" }}
            onChange={handleChange}
          />
          {error && (
            <>
              <Typography variant="body2" className="Error" gutterBottom>
                {error}
              </Typography>
            </>
          )}
          <Button size="medium" onClick={()=>navigate('/password-reset')}>Forgot Password?</Button>
          <Button
            variant="contained"
            sx={{ marginTop: "10px", marginBottom: "20px" }}
            type="submit"
            color="success"
          >
            {!animation ? "Login" : <CircularProgress size={24}/>}
          </Button>
        </Box>
      </div>
    </>
  )
}

export default Login
