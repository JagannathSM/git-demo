import React, { createContext, useContext, useEffect, useState } from "react";
import setAuthToken from "../../utils/setAuthToken";
import http from "../../utils/http";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const GlobalContext = createContext();

const GobalProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userId,setUserId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userDetails,setUserDetails] = useState('');
  const [userRounds, setUserRounds] = useState([]);
  const [lastFiveRounds, setLastFiveRounds] = useState(0);

  let loginUser;
  if (localStorage.token) {
    const jwt = localStorage.getItem("token");
    loginUser = jwtDecode(jwt);
    if (Date.now() < loginUser.exp * 1000) {
      setAuthToken(jwt);
    } else {
      alert("Token Expired Please login again!");
      navigate("/logout");
      // localStorage.removeItem("token");
    }
  }

  const getQuestions = async() => {
    try{
      const {data} = await http.get('/quiz/questions');
      setQuestions(data.data);
    } catch(err){
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
        toast.error(`Error while fetching questions. Try again later: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }

    }
  }

  const GetUserDetails = async()=>{
    try{
      const {data} = await http.get('/user/getUserData')
      setUserDetails(data.user);
    } catch(err){
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
        toast.error(`Error while fetching userData. Try again later: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }

    }
  }

  const GetUserRoundDetails = async() => {
    try{
      const {data} = await http.get('/user/getUserRoundDetails');
      if(data.data.length == 0){
        setUserRounds(data.data);
      } else if(data.data.length < 5){
        let points = 0;
        data.data.map((ele)=> {
          points = ele.roundPoint + points;
        });
        setLastFiveRounds(points);
        setUserRounds(data.data);
      } else {
        data.data.sort((a,b)=>Date.parse(b.createdAt) - Date.parse(a.createdAt))
        const result = data.data.slice(0,5);
        let points = 0;
        setUserRounds(result);
        result.map((ele)=> {
          points = ele.roundPoint + points
        });
        setLastFiveRounds(points);
      }
    } catch(err){
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
        toast.error(`Error while fetching userRound details. Try again later: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  }

  useEffect(() => {
    if (loginUser) {
      setUserId(loginUser._id);
    }
  }, [loginUser]);

  useEffect(()=>{
    if(userId){
      getQuestions();
    }
  },[userId])


  const addUserResult = async(totalPoints) => {
    try{
      await http.put('/user/updateUserData',{totalPoints});
      await http.post('/user/addUserRoundDetails',{totalPoints});
    } catch(err){
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
        toast.error(`Error while updating user points. Try again later: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  }


  return (
    <>
      <GlobalContext.Provider value={{ loginUser,getQuestions, questions, userDetails, userRounds,addUserResult, lastFiveRounds, GetUserDetails, GetUserRoundDetails }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
export default GobalProvider;
