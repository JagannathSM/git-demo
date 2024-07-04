import React from "react"
import { Routes, Route, Link} from "react-router-dom"
import Home from "./Components/Home"
import Users from "./Components/Users"

function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">User</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
    </Routes>
    </>
  )
}

export default App
