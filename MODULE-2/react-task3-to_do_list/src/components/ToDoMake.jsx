import React from "react";
import './ToDoMake.css'
import {data} from '../App'
import { useState } from "react";
import Cards from "./Cards";
import './Filter_cards.css'





function ToDoMake(){
    

const border_style = {
    border: "1px solid green"
}

const [initialData,setInitialData]=useState(data)

const [todoName,setTodoName] = useState("")
const [todoDisc,setTodoDisc] = useState("")

const arrayData = 
    {
        name:todoName,
        disc:todoDisc
    }

    return(
        <>
        <div className="To-Do-Maker-Container">
        <div className="To-Do-Maker-Head">
            <h3>My To-Do-Lists</h3>
        </div>
        <div className="To-Do-Maker-Part">

            <input type="text" placeholder="To-Do-Name" style={border_style}
            onChange={(event) => setTodoName(event.target.value)}/>

            <input type="text" placeholder="To-Do-Discription" style={border_style}
            onChange={(event) => setTodoDisc(event.target.value)}/>

            <button type="button" onClick={()=>{
                setInitialData([...initialData, arrayData])
            }}
            >Add To-Do</button>
        </div>
        </div>
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
        <div className="Cards-Container-Main">
        {initialData.map((ele,index)=>(
            <Cards key={index} data={ele} id={index}/>
        ))}
        </div>
        </>
    )
}

export default ToDoMake
