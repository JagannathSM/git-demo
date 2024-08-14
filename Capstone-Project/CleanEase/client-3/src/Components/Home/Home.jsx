import React, { useEffect, useState } from "react";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import CorosalCompo from "./CorosalCompo";
import CircularProgress from '@mui/material/CircularProgress';


function Home() {
  const { getMainServices, mainData, loginUser } = useGlobal();
  const [adminView, setAdminView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getMainServices();
  }, []);

  useEffect(() => {
    if (loginUser) {
      if (loginUser.role == "Admin") {
        setAdminView(true);
      } else {
        setAdminView(false);
      }
    }
  }, [loginUser]);

  return (
    <>
      {!adminView && (
        <>
          <CorosalCompo />
          <header className="hero-section">
            <div className="hero-content">
              <h1>Your Clean Home Starts Here</h1>
              <p>Professional cleaning services at your fingertips</p>
            </div>
          </header>

          <div className="Home_Header_Servies">
            <h3>Our Services</h3>
          </div>

          <div className="Card_Container">
            {mainData.length > 0 && (
              <>
                {mainData.map((ele, index) => (
                  <div
                    key={index}
                    className="Cards"
                    onClick={() => navigate(`/${ele._id}`)}
                  >
                    <div>
                      <img
                        src={ele.img}
                        alt={ele.serviceName}
                        className="Card_Img"
                      />
                    </div>
                    <div className="Card_Text">
                      <h3 className="Card_Heading">{ele.serviceName}</h3>
                      <p className="Card_desc">{ele.description}</p>
                    </div>
                    <div className="Card_amount">
                      <h3 className="Card_heading">Service Charges</h3>
                      <p style={{ fontWeight: 800, color: "orangered" }}>
                        {ele.minAmount} INR - {ele.maxAmount} INR
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
            {mainData.length == 0 && (
              <>
                <header style={{marginBottom:"1rem", borderRadius:"25px"}} className="sub-hero-section">
                  <div style={{padding:"0 1rem"}} className="sub-hero-content">
                    <CircularProgress color="warning" size={54}/>
                    <h1 style={{width:"100%"}}>Loading Data Please Wait...</h1>
                  </div>
                </header>
              </>
            )}
          </div>
        </>
      )}

      {adminView && (
        <>
          <h1>Admin here...</h1>
        </>
      )}
    </>
  );
}

export default Home;
