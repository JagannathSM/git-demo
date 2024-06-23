import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Route, Routes, useNavigate} from 'react-router-dom';
import ContactList from './ContactList';
import AddContacts from './AddContacts';
import EditContactPage from './EditContactPage'
import ContactDetailsPage from "./ContactDetailsPage";
import Home from "./Home";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  const navigate = useNavigate()

  const tool_bar = {
   display: "flex",
   flexWrap:"wrap",
   justifyContent: "space-between"
 }
 
   return (
     <>
     <AppBar position="static" style={{ marginBottom: "20px" }} sx={{backgroundColor:"black"}}>
     <Toolbar style={tool_bar}>
     <div style={{alignItems:"center",display:"flex"}}>
        <Tooltip title="Home">
          <Button color="inherit" onClick={()=>navigate("/")} startIcon={<HomeIcon />}>AXIOS-FETCH</Button>
        </Tooltip>
     </div>
     <div>
        <Button color="inherit" onClick={()=>navigate("/Contacts")}>Contact List</Button>
        <Button color="inherit" onClick={()=>navigate("/AddContacts")}>Add Contacts</Button>
     </div>
     </Toolbar>
     </AppBar>
 
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contacts" element={<ContactList/>}/>
        <Route path="/AddContacts" element={<AddContacts/>}/>
        <Route path="/Contacts/Edit-Contacts/:id" element={<EditContactPage/>}/>
        <Route path="/Contacts/:id" element={<ContactDetailsPage/>}/>
     </Routes>
 
     </>
   );
}

export default Navbar
