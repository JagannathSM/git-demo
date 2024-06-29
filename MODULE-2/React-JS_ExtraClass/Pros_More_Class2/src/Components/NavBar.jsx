import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from "./Home";
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import { deepPurple } from '@mui/material/colors';
import Drawer from '@mui/material/Drawer';
import ExampleuseState_Parotta from './ExampleuseState_Parotta'
import HigherOrderComponents from './HigherOrderComponents'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function NavBar() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };

      const menuItems = [
        {
            name : "Home",
            path : "/",
            icon : <AccountBalanceIcon/>
        },
        {
            name : "Ex UseState",
            path : "/ExampleuseState_Parotta",
            icon : <AcUnitIcon/>
        },
        {
            name : "High Order",
            path : "/HigherOrder",
            icon : <AddCircleOutlineIcon/>
        }
      ]

      const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

            {/* Drawer Strcture
            <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                   <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Back" />
            </ListItemButton> */}
            
        <Divider />
          <List>
            {menuItems.map((text) => (
              <ListItem key={text.name} disablePadding>
                <ListItemButton onClick={()=>navigate(`${text.path}`)}>
                  <ListItemIcon>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      );
    

    const tool_bar = {
     display: "flex",
     flexWrap:"wrap",
     justifyContent: "space-between"
   }
     
   const navigate = useNavigate()
  return (
    <>
     <AppBar position="static" style={{ marginBottom: "20px" }} sx={{backgroundColor:"black"}}>
     <Toolbar style={tool_bar}>
     <div style={{alignItems:"center",display:"flex"}}>
          <IconButton color="inherit" aria-label="OpenMenu" onClick={toggleDrawer(true)}><HomeIcon /></IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
     </div>
     <div>
        <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
        <Button color="inherit" onClick={()=>navigate("/ExampleuseState_Parotta")}>Ex useState</Button>
        <Button color="inherit" onClick={()=>navigate("/HigherOrder")}>High Order</Button>
     </div>
     <div>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
     </div>
     </Toolbar>
     </AppBar>
 
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ExampleuseState_Parotta" element={<ExampleuseState_Parotta/>}/>
        <Route path="/HigherOrder" element={<HigherOrderComponents/>}/>
     </Routes>
     </>
  )
}

export default NavBar
