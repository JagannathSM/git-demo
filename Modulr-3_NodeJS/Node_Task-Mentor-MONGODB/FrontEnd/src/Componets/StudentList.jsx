import React,{ useState, useEffect } from 'react'
import axios from "axios"

function StudentList() {

  const [students,setStudents] = useState('')
  const [error,setError] = useState('')
  const [loading, setLoading] =useState(true)

  const getStudentsDetail = async() => {
    try{

    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      
    </div>
  )
}

export default StudentList
