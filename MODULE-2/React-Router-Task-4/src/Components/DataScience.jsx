import { data_courses_task } from './Navbar'
import React from 'react'
import Cards from './Cards'
import './DataScience.css'

function DataScience() {
  const datasciencedata = data_courses_task.filter((ele)=> ele.course == "DS");
  return (
    <div className='DataScience-Container'>
      <h2 className='DataScience-Head'>THIS IS DATA SCIENCE PAGE</h2>
      <div className='Data-Science-Card-Section'>
      {datasciencedata.map((ele, index)=>(
          <Cards key={index} data = {ele} id={index}/>
        )        
      )}
      </div>
    </div>
  )
}

export default DataScience
