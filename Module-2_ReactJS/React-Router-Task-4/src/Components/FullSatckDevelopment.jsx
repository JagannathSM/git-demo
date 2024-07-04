import { data_courses_task } from './Navbar'
import React from 'react'
import Cards from './Cards'
import './FullSatckDevelopment.css'

function FullSatckDevelopment() {
  const fsd_data = data_courses_task.filter((ele)=>ele.course == "FSD");
  return (
    <div className='FSD-Container'>
      <h2 className='FSD-Container-Head'>THIS IS FULL STACK DEVELOPMENT PAGE</h2>
      <div className='FSD-Cards-Section'>
        {
          fsd_data.map((ele, index)=>(
            <Cards key={index} data = {ele} id={index}/>
          ))
        }
      </div>

    </div>
  )
}

export default FullSatckDevelopment
