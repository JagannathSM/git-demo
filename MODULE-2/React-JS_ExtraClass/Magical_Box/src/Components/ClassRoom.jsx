import React from 'react'
import { useSchool } from './SchoolContext'
import Student from './Student'


function ClassRoom() {
    console.log(useSchool())
    const [sclName,stdName] = useSchool()
  return (
    <div>
      <h1>Welcome to {sclName} {stdName}</h1>
      <Student/>
    </div>
  )
}

export default ClassRoom
