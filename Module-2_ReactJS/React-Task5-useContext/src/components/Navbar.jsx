import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Home from './Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState , useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartPage from './CartPage';
import Badge from '@mui/material/Badge';
import {CartContext,CartListContext} from '../App'
import MobileDetailDisc from './MobileDetailDisc';



function Navbar() {

  const cart = useContext(CartContext)
  const [cartItems,setCartItems] = cart;
    
     const [mode, setMode] = useState("light")
    const navigate = useNavigate()

    const theme = createTheme({
        palette: {
          mode: mode,
        },
      });

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
                    <Button color="inherit" onClick={() =>{navigate("/")} 
                    }>Home</Button>
                    {/* <Button color="inherit" onClick={() => navigate("/movies")}>MovieList</Button>
                    <Button color="inherit" onClick={() => navigate("/movies/add")}>AddMovie</Button>
                    <Button color="inherit" onClick={() => navigate("/add-color")}>AddColor</Button>
                    <Button color="inherit" onClick={() => navigate("/context")}>ExampleContext</Button>
                    <Button color="inherit" onClick={() => navigate("/somewhere")}>Somewhere</Button>
                    <Button color="inherit" onClick={() => navigate("/ref")}>Ref</Button> */}

                    <Button color="inherit" onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                    startIcon={mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}>
                    {mode === "light" ? "dark" : "light"} Mode</Button>
                </div>
                <div>
                    <Button variant="outline" endIcon={
                        <Badge badgeContent={cartItems} color="secondary">
                          <ShoppingCartIcon />
                        </Badge>
                      } onClick={()=> navigate("/cartpage")}>
                        Cart Items
                    </Button>
                </div>
          </Toolbar>
        </AppBar>

        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartpage" element={<CartPage/>} />
            <Route path='/mobiledetails/:id' element={<MobileDetailDisc/>}/>
          {/* <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} />
          <Route path="/movies/:movieid" element={<MovieDetails movieList={movieList} />} />
          <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
          <Route path="/add-color" element={<AddColor />} />
          <Route path="/context" element={<ExampleContext />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    </ThemeProvider>
    
    </>
  )
}

export default Navbar
