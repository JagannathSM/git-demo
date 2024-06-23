import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import AddMovies from './AddMovies';
import EditMovies from './EditMovies'
import MovieDetails from "./MovieDetails";


// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {

 const navigate = useNavigate()

 const tool_bar = {
  display: "flex",
  flexWrap:"wrap",
  justifyContent: "space-between"
}

  return (
    <>
    <AppBar position="static" style={{ marginBottom: "20px" }}>
    <Toolbar style={tool_bar}>
    <div>
      <Button color="inherit" onClick={()=>navigate("/")}>AXIOS-MOVIES</Button>
    </div>
    <div>
      <Button color="inherit" onClick={()=>navigate("/Movies")}>Movies</Button>
      <Button color="inherit" onClick={()=>navigate("/Add-Movies")}>Add Movies</Button>
    </div>
    <div>
      <Tooltip title="Profile">
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="profile" src="" />
        </IconButton>
      </Tooltip>
    </div>
    </Toolbar>
    </AppBar>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Movies" element={<Movies/>}/>
      <Route path="/Add-Movies" element={<AddMovies/>}/>
      <Route path="/Movies/Edit-Movies/:id" element={<EditMovies/>}/>
      <Route path="/Movies/:id" element={<MovieDetails/>}/>
    </Routes>

    </>
  );
}

export default Navbar;


{/* <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Axios-Movies
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Ipsita Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Ipsita" src="" />
                </IconButton>
              </Tooltip> */}


              {/* <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}



            {/* </Box>
          </Toolbar>
        </Container>
      </AppBar> */}