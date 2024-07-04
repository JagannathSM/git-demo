import React, {useState, useEffect} from 'react'
import axios from "axios"


function Users() {

    const [user,setUser] = useState([])
    const [error,setError] = useState('')
    const [progress, setProgress] = useState(true)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            setUser(res.data)
            setProgress(!progress)
        })
        .catch (error =>{
            setError(error.message)
        })
    },[])

    if(progress) return <p>Loading...</p>
    if(error) return <p>Error : {error}</p>
  return (
    <>
    <h1>Users</h1>

    <ul>
        {user.map(user=>(
            <li key={user.id}>
                 <h3>{user.id} / {user.name}</h3>
                 <p>{user.email}</p>
            </li>
           
        ))}
    </ul>
    </>
  )
}

export default Users
