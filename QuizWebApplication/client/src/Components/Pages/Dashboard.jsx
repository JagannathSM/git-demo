import React from "react";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import Avatar from "@mui/material/Avatar";
import '../CSS/Dashboard.css'
import { useEffect } from "react";

function Dashboard() {
  const { userDetails, userRounds, lastFiveRounds, GetUserDetails, GetUserRoundDetails } = useGlobal();
  
  console.log(userRounds);

  useEffect(()=>{
    GetUserDetails();
    GetUserRoundDetails();
  },[])

  return (
    <>
    <div className="AvatarDiv">
      {userDetails ? (
        <>
          <Avatar alt={userDetails.username} sx={{ width: 70, height: 70 }}>
            {userDetails.username.split('')[0]}
          </Avatar>
          <h1 className="AvatarH1">Welcome {userDetails.username}</h1>
        </>
      ) : (
        <>
          <Avatar alt="Loading" sx={{ width: 70, height: 70 }}>
          </Avatar>
          <h1 className="AvatarH1">Loading details Please wait...</h1>
        </>
      )}
    </div>
    <div className="Grid-cointainer">
      <div className="Grid-Card">
        <h2>Total Points</h2>
        <h1 style={{color:"blue"}}>{userDetails ? userDetails.totalPoints : "NaN"}</h1>
      </div>
      <div className="Grid-Card">
        <h2>Total Rounds</h2>
        <h1 style={{color:"red"}}>{userDetails ? userDetails.totalRoundPayed : "NaN"}</h1>
      </div>
      <div className="Grid-Card">
        <h2>Points per Round</h2>
        <h1 style={{color:"violet"}}>{userDetails ? (userDetails.totalPoints/userDetails.totalRoundPayed).toFixed(1) : "NaN"}</h1>
      </div>
      <div className="Grid-Card">
        <h2>Last 5 Rounds</h2>
        <h1 style={{color:"green"}}>{lastFiveRounds}</h1>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
