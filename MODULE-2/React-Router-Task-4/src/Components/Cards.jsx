import React from 'react'
import './Cards.css'
import {Link} from 'react-router-dom'


function Cards({data}) {
  return (
    
    <div className='Card-Container'>
      <div className='Card-Img'>
        <img src={data.poster} alt={data.course}/>
      </div>
      <div className='Card-Detail'>
        <h4>{data.text}</h4>
        <p>{data.author}</p>
      </div>
      <div className='Card-date'>
        <p>{data.date}</p>
        <p className='end-part'>{data.duration} Mins Read</p>
      </div>
    </div>
    
        
  )
}

export default Cards
