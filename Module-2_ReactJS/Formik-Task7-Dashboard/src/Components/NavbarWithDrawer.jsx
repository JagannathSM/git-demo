import React, { useState }  from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Route, Routes, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import FormikBook from "./FormikBook";
import FormikAuthor from "./FormikAuthor";
import BookList from "./BookList";
import AuthorList from "./AuthorList";
import EditBook from "./EditBook";
import EditAuthor from "./EditAuthor";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import DashBoard from "./DashBoard";
import LogoutIcon from '@mui/icons-material/Logout';
import ApplicationInfo from "./ApplicationInfo";

function NavbarWithDrawer({userName, setUserName}) {

  const avatarName = ((userName.split(''))[0]).toUpperCase();

  const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };

  const navigate = useNavigate()

  const tool_bar = {
   display: "flex",
   flexWrap:"wrap",
   justifyContent: "space-between"
 }

 const menuItems = [
  {
      name : "DashBoard",
      path : "/Dashboard",
      icon : <DashboardIcon/>
  },
  {
      name : "My BookList",
      path : "/Booklist",
      icon : <BookIcon/>
  },
  {
      name : "My AuthorList",
      path : "/Authorlist",
      icon : <GroupsIcon/>
  },
  {
    name : "Add Books",
    path : "/AddBooks",
    icon : <BookmarkAddIcon/>
  },
  {
  name : "Add Authors",
  path : "/AddAuthor",
  icon : <PersonAddIcon/>
  }
]

 const DrawerList = (
  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <ListItemButton onClick={toggleDrawer(false)}>
        <ListItemIcon>
          <CloseIcon/>
        </ListItemIcon>
        <ListItemText primary="Close Menu" />
      </ListItemButton>      
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
    <ListItemButton onClick={()=>{toggleDrawer(false); setUserName(""); navigate("/")}}>
        <ListItemIcon>
          <LogoutIcon/>
        </ListItemIcon>
        <ListItemText primary="LogOut" />
      </ListItemButton>
  </Box>
);

   return (
     <>
     <AppBar position="static" style={{ marginBottom: "20px" }} sx={{backgroundColor:"black"}}>
        <Toolbar style={tool_bar}>
          <div style={{alignItems:"center",display:"flex"}}>
              <Button color="inherit" aria-label="OpenMenu" onClick={toggleDrawer(true)} startIcon={<MenuIcon />}>Open Menu</Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                  {DrawerList}
                </Drawer>
          </div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div style={{paddingRight:"10px"}}>Welcome, {userName}</div>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{avatarName}</Avatar>
          </div>
        </Toolbar>
     </AppBar>

     <Routes>
        <Route path="/Dashboard" element={<DashBoard/>}/>
        <Route path="/AddBooks" element={<FormikBook/>}/>
        <Route path="/AddAuthor" element={<FormikAuthor/>}/>
        <Route path="/Booklist" element={<BookList/>}/>
        <Route path="/Authorlist" element={<AuthorList/>}/>
        <Route path="/Booklist/EditBook/:id" element={<EditBook/>}/>
        <Route path="/Authorlist/EditAuthor/:id" element={<EditAuthor/>}/>
        <Route path="/Dashboard/info" element={<ApplicationInfo/>}/>
     </Routes>
     </>
   );
}

export default NavbarWithDrawer
