import React from 'react'
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DevicesIcon from '@mui/icons-material/Devices';
import './Home.css'

function Home() {
  return (
    <>
    <div className='Img_and_Text'>
        <div className='Text_quote'><h1>Every great film should seem new every time you see it</h1></div>
        <div className='know-more'><Button variant="contained" href="https://www.google.com/webhp" target="_blank" >Know More</Button></div>
    </div>
    <div className='easy-navigation-inside'>
        <p>Movies</p>
        <p>Series</p>
        <p>about page</p>
    </div>
    <div className='sample-box'>
        <div className='sample-box-1'>
            <CreditCardIcon/>
            <h3>Always 100% Free</h3>
            <p>Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.</p>
        </div>
        <div className='sample-box-2'>
            <DevicesIcon/>
            <h3>Device-Friendly</h3>
            <p>Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.</p>
        </div>
    </div>
    <div className='Home_footer'>
        <h3>@copyrights 2024</h3>
    </div>
    </>
  )
}

export default Home
