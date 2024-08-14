import React, { useState, useEffect } from 'react';
import './LoadingAnimation.css'; 


function LoadingAnimation() {

    const [loading, setLoading] = useState(false);

  return (
    <>
    <div className="MainPart">
    <button type='button' onClick={()=>setLoading(true)}>CHECK HERe</button>
            {loading ? (
                <div className="loading-overlay">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="content">
                    <h1>Data Loaded!</h1>
                    <p>data</p>
                </div>
            )}
        </div>
        </>
  )
}

export default LoadingAnimation
