import React,{ useState } from 'react'
import './App.css'
import NavbarWithDrawer from './Components/NavbarWithDrawer'
import LoginPage from './Components/LoginPage'
import Navbar from './Components/Navbar'

function App() {

  const [userName,setUserName] = useState('')

  return (
    <>
    { userName ? <NavbarWithDrawer  userName={userName} setUserName={setUserName}/> : <LoginPage setUserName={setUserName}/> }
    {/* <Navbar/> */}
    </>
  )
}

export default App
