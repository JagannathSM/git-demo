import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import http from "../../../utils/http";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./PasswordReset.css";

function PasswordReset() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [getToken, setGetToken] = useState(false);
  const [passResetToken, setPassResetToken] = useState("");
  const [tokenError, setTokenError] = useState("");
  const [success, setSuccess] = useState(false);

  const [open, setOpen] = useState(false);
  const [openVerify,setOpenVerify] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
    setGetToken(true);
};

const handleCloseVerify = (event, reason) => {
  if (reason === 'clickaway') {
      return;
  }
  setOpenVerify(false);
  navigate(`/password-reset/${passResetToken}`);
  
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email Needed for verification");
    } else {
      try {
        const res = await http.post("/auth/reset-pass", { email });
        console.log(res);
        if (res.data.message) {
          setOpen(true);
          // setGetToken(true);
        } else {
          setError("Something went wrong please try again later!");
        }
      } catch (err) {
        console.log(err);
        if (err.message == "Network Error") {
          setError("Connection Timeout! DB not responding");
        } else if (err.response.data) {
          setError(err.response.data);
        }
      }
    }
  };

  const handleVeifyTokenSubmit = async (e) => {
    e.preventDefault();
    if (!passResetToken) {
      setTokenError("Need Token for verification");
    } else {
      try {
        const res = await http.get(`/auth/verify-pass/${passResetToken}`);
        console.log(res.data.status);
        if (res.data.status) {
          setOpenVerify(true)
          // setSuccess(true);
        }
      } catch (err) {
        if (err.message == "Network Error") {
          setTokenError("Request timeout! DB not responding");
        } else if (!err.response.data.status) {
          setTokenError(err.response.data.message);
        } else {
          setTokenError("Connection timeout! Try again later");
        }
      }
    }
  };

  return (
    <>
      {!getToken && !success ? (
        <div className="Password_Reset_Form">
          <Box
            className="Password_Reset_Box"
            component="form"
            sx={{ m: 1, width: "35ch" }}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="Password_Reset_Back">
              <Button
                onClick={() => navigate(-1)}
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
            </div>
            <Typography
              variant="body2"
              className="Password_Reset_header"
              sx={{
                textShadow: "-3px 0px 3px gray",
                fontWeight: "600",
                marginTop: "5px",
                padding: "0px 5px",
              }}
              gutterBottom
            >
              Please Provide registered email to get Password Reset token
            </Typography>
            <TextField
              type="email"
              name="email"
              id="Email"
              label="Registered Email"
              variant="outlined"
              sx={{ margin: "10px 2px", width: "85%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <>
                <Typography
                  variant="body2"
                  className="Password_Reset_Error"
                  gutterBottom
                >
                  {error}
                </Typography>
              </>
            )}
            <Button
              variant="contained"
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              type="submit"
              color="success"
            >
              Get token
            </Button>
            <Button size="medium" onClick={() => setGetToken(true)}>
              Already got token?
            </Button>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Password Reset Token sent to your email Successfully. Please verify your token in next step
                    </Alert>
                </Snackbar>
          </Box>
        </div>
      ): ""}

      {getToken && !success ? (
        <>
          <div className="Password_Reset_Form">
            <Box
              className="Password_Reset_Box"
              component="form"
              sx={{ m: 1, width: "35ch" }}
              noValidate
              onSubmit={handleVeifyTokenSubmit}
              autoComplete="off"
            >
              <div className="Password_Reset_Back">
                <Button
                  onClick={() => setGetToken(false)}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
              </div>
              <Typography
                variant="body2"
                className="Password_Reset_header"
                sx={{
                  textShadow: " -3px 0px 3px gray",
                  fontWeight: "600",
                  marginTop: " 5px",
                }}
                gutterBottom
              >
                Please provide password reset token to verify
              </Typography>
              <TextField
                type="text"
                name="passResetToken"
                id="ResetToken"
                label="Reset Token"
                variant="outlined"
                sx={{ margin: "10px 2px", width: "85%" }}
                onChange={(e) => setPassResetToken(e.target.value)}
              />
              {tokenError && (
                <>
                  <Typography
                    variant="body2"
                    className="Password_Reset_Error"
                    gutterBottom
                  >
                    {tokenError}
                  </Typography>
                </>
              )}
              <Button
                variant="contained"
                sx={{ marginTop: "10px", marginBottom: "20px" }}
                type="submit"
                color="warning"
              >
                verify token
              </Button>
              <Snackbar open={openVerify} autoHideDuration={5000} onClose={handleCloseVerify}>
                    <Alert
                        onClose={handleCloseVerify}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Verify Successful!!! Please wait While we redirect to you to Password Change Page.
                    </Alert>
                </Snackbar>
            </Box>
          </div>
        </>
      ) : ""}
      {getToken && success ?(
        <>
          <div className="Password_Reset_Form">
            <Box
              className="Password_Reset_Success_Box"
              component="div"
              sx={{ m: 1, width: "35ch", height: "30vh" }}
            >
              <Typography
                variant="body2"
                className="Password_Reset_Success_Msg"
                sx={{ fontWeight: "700", fontSize: "18px" }}
                gutterBottom
              >
                successfully verifyed, if you are not redirected please{" "}
                <Button
                  sx={{
                    fontWeight: "700",
                    fontSize: "18px",
                    textShadow: "-1px -2px 3px gray",
                    textDecoration: "underline",
                  }}
                  onClick={() => navigate(`/password-reset/${passResetToken}`)}
                >
                  click here
                </Button>{" "}
                to reset your password.
              </Typography>
            </Box>
          </div>
        </>
      ):""}
    </>
  );
}

export default PasswordReset;
