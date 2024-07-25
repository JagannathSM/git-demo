import React, { useState, useEffect } from 'react'
import axios from "axios"

function MentorList() {

  const [mentors,setMentors] = useState('')
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(true)

  const getMentorDetails = async() => {
    try{
      const { data } = await axios.get("https://assign-mentor-backend-pws4.onrender.com/mentor/show")
      console.log(data);
      setMentors(data);
      setLoading(!loading);
    } catch (err){
      setError(err.message);
    }
  }

  useEffect(()=>{
    getMentorDetails()
  },[])

  if(error) return <div>Error while getting Mentor Data - {error}</div>

  if(loading) return <div>Loading Data</div>

  return (
    <div>
      {mentors}
    </div>
  )
}

export default MentorList
