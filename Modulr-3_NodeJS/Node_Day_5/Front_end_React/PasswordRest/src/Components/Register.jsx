import React,{useState} from 'react'
import axios from 'axios'

function Register() {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

   
    const handleOnSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/API/register",{userName,password})
            console.log("input",response.data)    
        } catch (err) {
            console.log("error",err);
            alert(`${err.response.data}`);
        }
    }
   

  return (
    <div>
      <h1>User Registration Page</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='text' placeholder='UserName...' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <br></br>
        <input type='password' placeholder='Password...' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br></br>
        <button type='Submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
