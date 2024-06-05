import { data_courses_task } from './Navbar'
import React from 'react'
import Cards from './Cards'
import './CyberSecurity.css'


function CyberSecurity() {
  const cybersecuritydata = data_courses_task.filter((ele)=> ele.course=="CYSE");
  return (
    <div className='CyberSecurity-Container'>
      <h2 className='CyberSecurity-Header'>THIS IS CYBER SECURITY PAGE</h2>
      <div className='CyberSecurity-Cards-Section'>
      {cybersecuritydata.map((ele, index)=>(
          <Cards key={index} data = {ele} id={index}/>
        )        
      )}
      </div>
    </div>
  )
}

export default CyberSecurity
