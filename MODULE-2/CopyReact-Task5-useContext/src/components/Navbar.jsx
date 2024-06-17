import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState , useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartPage from './CartPage';
import Badge from '@mui/material/Badge';
import {CartContext} from '../App'
import MobileDetailDisc from './MobileDetailDisc';
import Home from './Home';



function Navbar() {

  //CartContext were used as 'cart' using useContext method and destucturing it for furthur process
  const cart = useContext(CartContext)
  const [cartItems,setCartItems] = cart;
    
  //For Theme change from
  const [mode, setMode] = useState("light")
  const Navigate = useNavigate()

  const theme = createTheme({
      palette: {
        mode: mode,
      },
    });
    //Theme function ends here

    const tool_bar = {
      display: "flex",
      flexWrap:"wrap",
      justifyContent: "space-between"
    }

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Toolbar style={tool_bar}>
                <div>
                    <Button color="inherit" onClick={() =>{Navigate("/")} 
                    }>Home</Button>
                    {/*  */}
                    <Button color="inherit" onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                    startIcon={mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}>
                    {mode === "light" ? "dark" : "light"} Mode</Button>
                </div>
                <div>
                    <Button variant="outline" endIcon={
                        <Badge badgeContent={cartItems} color="secondary">
                          <ShoppingCartIcon />
                        </Badge>
                      } onClick={()=> Navigate("/cartpage")}>
                        Cart Items
                    </Button>
                </div>
          </Toolbar>
        </AppBar>

        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartpage" element={<CartPage/>} />
            <Route path='/mobiledetails/:id' element={<MobileDetailDisc/>}/>
          {/* */}
        </Routes>
    </ThemeProvider>
    
    </>
  )
}

export default Navbar
