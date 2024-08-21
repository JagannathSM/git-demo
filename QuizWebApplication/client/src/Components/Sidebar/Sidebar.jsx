import React, { useState } from 'react'
import {useGlobal} from '../../GlobalContext/GlobalProvider'
import { FaSignInAlt, FaSignOutAlt, FaTachometerAlt, FaUserPlus, FaUser, FaQuestionCircle, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../CSS/Sidebar.css'

function Sidebar({children}) {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { loginUser } = useGlobal();

    const noUserPath = [
        {
            icon:<FaSignInAlt/>, //size={24} color="blue"
            name:"Login",
            path:"/"
        },
        {
            icon:<FaUserPlus/>,
            name:"Register",
            path:"/register"
        },
    ]

    const userPath =[
        {
            icon:<FaTachometerAlt/>,
            name:"Dashboard",
            path:"/dashboard"
        },
        {
            icon:<FaQuestionCircle/>,
            name:"Quiz",
            path:"/quiz-page"
        },
        {
            icon:<FaSignOutAlt/>,
            name:"Log Out",
            path:'/logout'
        }
    ]
  return (
    <div className='sidebar_container'>
      <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
        <div className="top-section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Quizz</h1>
            <div style={{marginLeft: isOpen ? "4rem" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        { !loginUser && noUserPath.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
            </NavLink>
        ))
        }
         { loginUser && userPath.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
            </NavLink>
        ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
