import { data_courses_task } from './Navbar'
import React from 'react'
import Cards from './Cards'
import './Home.css'


function Home() {
  return (
    
    <div className='HomePage-Container'>
      <h2 className='Homepage-head'>CHECK ALL CONTENTS</h2>
      <div className='Homepage-Cards-Section'>
        {data_courses_task.map((ele, index)=>(
          <Cards key={index} data = {ele} id={index}/>
        )        
      )}
       
      </div>
    </div>
    
  )
}



export default Home


