import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'

function Cards({path,src,name}) {
  return (
    <div className='Card-Component'>
      <Link to={path}>
      <img className="Card-Detail-Img" src={src} alt={name} width="100%" height="130px"/>
      <h3 className='Card-text-datail'>{name}</h3>
      </Link>
    </div>
  )
}

export default Cards
