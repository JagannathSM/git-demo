import React, { useState } from 'react'

const ExampleParotta = () => {
    const [startValue,setStartValue] = useState(0);
    const handleClick = () => {
        setStartValue(startValue+5)
    }
  return (
    <div>
      <h1>Soori ate total of {startValue} parottas</h1>
      <button onClick={handleClick}>Add More</button>
    </div>
  )
}

export default ExampleParotta