import React from 'react'
import './Cards.css'
import { useState } from 'react'

function Cards() {
  return (
    <div className='Cards-Container'>
      <div className='Cards-Img'><img src='https://dummyimage.com/250/ffffff/000000' alt='DUMMY IMAGE'/></div>
      <div className='Cards-Content'>
        <h2>Product Name</h2>
        <p></p>
        <p>$001 - $100</p>
      </div>
      <div className='Cards-Button'>
        <button>Add to Crate</button>
      </div>
    </div>
  )
}

export default Cards
