import React from 'react'
import Info from './Info';

function Home() {
    const color = "Red";
    const speed = "Stop";
  return (
    <div>
      <Info clr={color} action={speed} mark='12'/>
    </div>
  )
}

export default Home
