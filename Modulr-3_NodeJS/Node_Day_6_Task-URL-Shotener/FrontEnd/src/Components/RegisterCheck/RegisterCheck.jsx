import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import http from "../../../utils/http";
import "./RegisterCheck.css";

function RegisterCheck() {
  const { registerToken } = useParams();
  const [animation, setAnimation] = useState(true);
  const [error, setError] = useState("");
  const verifyUserRegistration = async (registerToken) => {
    try {
      const res = await http.get(`/auth/checkRegisterUser/${registerToken}`);
      if (res.status == 200) {
        setAnimation(false);
      }
    } catch (err) {
      setAnimation(false);
      if (err.message == "Network Error") {
        setError("Connection timeout! DB not responding");
      } else if (err.response.status == 400) {
        setError(err.response.data);
      } else {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    verifyUserRegistration(registerToken);
  }, []);

  return (
    <>
      <div>
        {animation && !error ? <CircularProgress /> : ""}
        {!animation && !error ? "Verification Success" : ""}
        {!animation && error ? `${error}` : ""}
      </div>
    </>
  );
}

export default RegisterCheck;
