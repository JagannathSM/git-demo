import React from 'react'
import {Link} from 'react-router-dom'
import './YoutubeNavbar.css';
import { useState } from 'react';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import NotificationsIcon from '@mui/icons-material/Notifications';

function YoutubeNavbar() {
    const [isMobile,setIsMobile] = useState(false);
  return (
    <>
    <nav className='navbar'>
        <h3 className='logo'>CleanEase <CleaningServicesIcon/></h3>
        <ul className={isMobile ? "nav-links-mobile":"nav-links"}
        onClick={()=>setIsMobile(false)}>
            <Link to="/" className='home'>
                <li>Home</li>
            </Link>
            <Link to="/" className='about'>
                <li>About</li>
            </Link>
            <Link to="/" className='contact'>
                <li>Contact</li>
            </Link>
            {/* {<>
            <Link to="/user-profile" className='user-profile'>
                <li>User</li>
            </Link>
            <Link to="/user-bookings" className='user-bookings'>
                <li>Bookings</li>
            </Link>
            <Link to="/user-notifications" className='user-notifications'>
                <li>{isMobile ? "Notification" : <NotificationsIcon/>}</li>
            </Link>
            <Link to="/logout" className='logout'>
                <li>Log Out</li>
            </Link>
            </>} */}
            <Link to="/login" className='login'>
                <li>Sign In</li>
            </Link>
            <Link to="/register" className='register'>
                <li>Sign Up</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon'
        onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ? <i className='fas fa-times'/> : <i className='fas fa-bars'/>}
        </button>
    </nav>
    </>
  )
}

export default YoutubeNavbar
