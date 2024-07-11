import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
 const [data,setData] = useState();
 const [startMsg,setStartMsg] = useState('');
 const [error,setError] = useState('')

 useEffect(()=>{getInitialValues()},[])

 const getInitialValues = async() =>{
  try{
    const res = await axios.get("http://localhost:3000/greet")
    console.log(res.data);
    setStartMsg(res.data);

  } catch (error) {
    console.log("Error getting start page", error)
    setError(error)
  }
 }

 if (error) return <h1>{error} ERROR CHECK CODE</h1>
  return (
    <>
    <h1>{startMsg}</h1>

    { data ? <ShowDataTabel data = {data} setData = {setData}/> : <GetDataTabel setData={setData} setError={setError}/>}
    </>
  )
}

function ShowDataTabel ({data,setData}) {

  return (
    <>
    <ul>
    { data.map((ele)=>(
      <li key={ele.ID}>
        <h1>UserName - {ele.username} #{ele.ID}</h1>
        <p>Batch - {ele.Batch}</p>
      </li>
    ))
    }
    </ul>
  
    <button onClick={()=>{setData('')}}>Hide User Data</button>
    </>
  )
}


function GetDataTabel ({setData, setError}) {

  const getUserData = async() => {
  try{
    const res = await axios.get("http://localhost:3000/api/userdata");
    console.log(res.data);
    setData(res.data)
  } catch (error) {
    console.log("Error while getting USerData", error)
    setError(error)
    }
  }

  return (
    <>
    <button onClick={()=>{getUserData()}}>Show USer Data</button>
    </>
  )
}


export default App
