import React from 'react'
import { useState } from 'react'

function TestCompo() {
    const [time,setTime] = useState('16:00');
    const [date,setDate] = useState('2024-07-11');

    const handleShow = () => {
        console.log(time)
        console.log(date)
    }

  return (
    <div>
      <input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
      <input type='time' value={time} onChange={(e)=>setTime(e.target.value)}/>
      <button type='button' onClick={handleShow}>Show</button>
    </div>
  )
}

export default TestCompo
