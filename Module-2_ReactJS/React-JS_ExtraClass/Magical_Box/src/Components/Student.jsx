import React from 'react'
import { useSchool } from './SchoolContext'


function Student() {
    const [schName,stdName] = useSchool()
  return (
    <div>
      <p>Hello there {stdName}</p>
    </div>
  )
}

export default Student

