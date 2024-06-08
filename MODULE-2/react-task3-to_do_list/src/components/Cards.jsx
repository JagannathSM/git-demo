import React from 'react'
import './Cards.css'
import { useState } from 'react'
import ToDoMake from './ToDoMake'

const filter_data = []

function Cards({data,id}) {


    const [isDisabled, setIsDisabled] = useState(true)
    const [deleteisDisabled, setDeleteisDisabled] = useState (true)

    const [selectValue,setSelectValue] = useState("not-completed")

    const select_style = {
        backgroundColor: selectValue == "not-completed" ? "red" : "green"
    }

    const obj_data_filter = {
        name:data.name,
        disc:data.disc,
        id,
        value: selectValue
    }
    filter_data.push(obj_data_filter)


const handleClick = () => {
    setIsDisabled(!isDisabled)
}

const handleDelete = () => {
    setDeleteisDisabled(!deleteisDisabled)
}

  return (
    <>
    
    { deleteisDisabled ? <div className='to-do-cards-container'>
    <div className='to-do-cards'>
        <div className='to-do-cards-detail'>
            <p><b>Name : </b>{data.name}</p>
            <p><b>Detail : </b>{data.disc}</p>
        </div>
        <div className='to-do-cards-select'>
            <label htmlFor="status-select"><b>Status :</b> </label>
            <select name='status' id='status-select' style={select_style} 
            value={selectValue} onChange={e => setSelectValue(e.target.value)}
            disabled={isDisabled}>
                <option value="completed">Completed</option>
                <option value="not-completed">Not Completed</option>
            </select>
        </div>
        <div className='to-do-cards-button'>
            { isDisabled ? <button style={{backgroundColor:"green"}} onClick={handleClick}>Edit</button> :
            <button style={{backgroundColor:"green"}} onClick={handleClick}>Lock</button>}

            <button style={{backgroundColor:"red"}} onClick={handleDelete}>Delete</button>
        </div>
    </div>
    </div>:""}
    </>
  )
}


export default Cards