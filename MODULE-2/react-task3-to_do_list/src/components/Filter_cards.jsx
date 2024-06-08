import React from 'react'
import './Filter_cards.css'

// useless for now //

function Filter_cards() {
  return (
    <div className='Filter-Cards-Container'>
      <div className='Filter-Cards-Text'>
        <h4>My To-Do's</h4>
      </div>
      <div className='Filter-Cards-Filter'>
        <label htmlFor="filter"><b>Status Filter : </b></label>
        <select id="filter" name="fill">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-complted">Not Completed</option>
        </select>
      </div>
    </div>
  )
}

export default Filter_cards
