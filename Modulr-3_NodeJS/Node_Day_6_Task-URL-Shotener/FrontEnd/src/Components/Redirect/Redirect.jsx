import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../../utils/http'
import CircularProgress from "@mui/material/CircularProgress";


function Redirect() {
    const {shortURL} = useParams();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(true);

    const redirectURL = async() =>{
        try{
            const res = await http.get(`/url/redirect/${shortURL}`)
            window.location.assign(res.data.longURL);
        } catch(err){
            setLoading(false);
            if (err.message == "Network Error") {
                setError("Connection timeout! / DB not responding");
              } else if (err.response.status == 400) {
                setError(err.response.data);
              } else {
                setError(err.message);
              }
        }
    }

    useEffect(()=>{
        redirectURL();
    },[])
  return (
    <div>
      Redirect - {shortURL}
      {error && <div>Error - {error}</div>}
      {loading && <div><CircularProgress size={50}/><br></br><p>Redirecting to your site please wait!!</p></div>}
    </div>
  )
}

export default Redirect
