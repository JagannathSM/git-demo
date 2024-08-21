import React, { useState, useEffect } from "react";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import Avatar from "@mui/material/Avatar";
import '../CSS/Dashboard.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const { userDetails, userRounds, lastFiveRounds, GetUserDetails, GetUserRoundDetails } = useGlobal();
  const [graphData, setGraphData] = useState([]);
  
  console.log(graphData);

  useEffect(()=>{
    if(userRounds.length > 0){
      const barData = userRounds.map((ele,index)=>{
        return {...ele, "round":`Round ${userRounds.length - index}`}
      })
      setGraphData(barData);
    }
  },[userRounds])

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
    <div className="Graph_Part">
      {graphData.length > 0 && 
        <div className="Graph">
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Last {graphData.length} Round Points</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={graphData}
              margin={{
              top: 20,
              right: 0,
              left: -40,
              bottom: 5,
            }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="round" />
              <YAxis domain={[0, 5]}/>
              <Tooltip />
              <Legend />
              <Bar dataKey="roundPoint" fill="#1b9c4d" label={{ position: 'insideTop', fill: '#fff' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>}
        {graphData.length == 0 && (
          <div className="Graph">

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={graphData}
                margin={{
                  top: 20,
                  right: 0,
                  left:0,
                  bottom: 5,
              }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="round" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="roundPoint" fill="#8884d8" />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '16px', fill: '#8884d8' }}>
                  No Data Available
                </text>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
    </div>
    </>
  );
}

export default Dashboard;

//fill="#8884d8"