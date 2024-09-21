import { useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import Setintravel from '../Components/Setintravel'
import RazorPay from '../Components/RazorPay'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveNavbar from '../Components/NavbarCHATGPT'
import TestCompo from '../Components/TestCompo'
import YoutubeNavbar from '../Components/YoutubeNavbar'
import MuiYoutubeNavbar from '../Components/MuiYoutubeNavbar'
import Youtube22Nav from '../Components/Youtube22Nav'
import Footer from '../Components/Footer'
import CardsCompo from '../Components/CardsCompo'
import ExampleCHECKLIST from '../Components/ExampleCHECKLIST';
import LoadingAnimation from '../Components/LoadingAnimation'
import DownloadBills from '../Components/DownloadBills'
import Admindashboard from '../Components/Admindashboard'
import ApiCall from '../Components/ApiCall'

const theme = createTheme();

function App() {

  return (
    <>
      {/* <Navbar/> */}
      {/* <Setintravel/> */}
      {/* <RazorPay/> */}
      {/* <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveNavbar />
    </ThemeProvider> */}
    {/* <TestCompo/> */}
    {/* <YoutubeNavbar/> */}
    {/* <MuiYoutubeNavbar/> */}
    {/* <Youtube22Nav/>
    <Footer/> */}
    {/* <ExampleCHECKLIST/> */}
    {/* <LoadingAnimation/> */}
    {/* <DownloadBills/> */}
    {/* <Admindashboard/> */}
    <ApiCall/>
    </>
  )
}

export default App
