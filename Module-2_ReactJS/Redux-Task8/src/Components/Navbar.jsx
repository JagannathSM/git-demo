import React from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Home from './Home';
import CartPage from './CartPage';
import ProductDetailPage from './ProductDetailPage'
import Products from './Products';
import { useSelector } from 'react-redux';


function Navbar() {

  const Navigate = useNavigate()

  const cartItemData = useSelector((state) => state.myCartData.cartItems)
  
    const tool_bar = {
      display: "flex",
      flexWrap:"wrap",
      justifyContent: "space-between"
    }

  return (
    <>
    <CssBaseline />
        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Toolbar style={tool_bar}>
                <div>
                    <Button color="inherit" onClick={() =>{Navigate("/")} }>Home</Button>
                    <Button color="inherit" onClick={() =>{Navigate("/mobiles")} }>Products</Button>
                    {/*  */}
                </div>
                <div>
                    <Button variant="outline" endIcon={
                        <Badge badgeContent={cartItemData.length} color="secondary">
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
            <Route path="/mobiles" element={<Products />} />
            <Route path='/mobiledetails/:id' element={<ProductDetailPage/>}/>
            <Route path="/cartpage" element={<CartPage/>} />
            
          {/* */}
        </Routes>
    
    
    </>
  )
}

export default Navbar
