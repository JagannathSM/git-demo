import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from "./Home";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import FormikBook from "./FormikBook";
import FormikAuthor from "./FormikAuthor";
import BookList from "./BookList";
import AuthorList from "./AuthorList";
import EditBook from "./EditBook";
import EditAuthor from "./EditAuthor";

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
              <Button color="inherit" onClick={()=>navigate("/")} startIcon={<HomeIcon />}>FORMIK VALIDATION</Button>
            </Tooltip>
          </div>
          <div>
            <Button color="inherit" onClick={()=>navigate("/Booklist")}>Books</Button>
            <Button color="inherit" onClick={()=>navigate("/Authorlist")}>Authors</Button>
            <Button color="inherit" onClick={()=>navigate("/AddBooks")}>Add Books</Button>
            <Button color="inherit" onClick={()=>navigate("/AddAuthor")}>Add Authors</Button>
          </div>
        </Toolbar>
     </AppBar>

     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AddBooks" element={<FormikBook/>}/>
        <Route path="/AddAuthor" element={<FormikAuthor/>}/>
        <Route path="/Booklist" element={<BookList/>}/>
        <Route path="/Authorlist" element={<AuthorList/>}/>
        <Route path="/Booklist/EditBook/:id" element={<EditBook/>}/>
        <Route path="/Authorlist/EditAuthor/:id" element={<EditAuthor/>}/>
     </Routes>
     </>
   );
}

export default Navbar
