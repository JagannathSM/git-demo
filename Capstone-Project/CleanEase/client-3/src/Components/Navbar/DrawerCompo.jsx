import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";

function DrawerCompo({ data }) {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenDrawer(false)}
      >
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#063970", // Change background color
              color: "#fff", // Change text color
              paddingRight:"2.5rem"
            },
          }}
        >
          <List>
            {data.length == 3 &&
              data.map((ele) => (
                <ListItem key={ele.name} disablePadding>
                  <ListItemButton onClick={() => navigate(`${ele.path}`)}>
                    <ListItemIcon sx={{color:"white"}}>{ele.icon}</ListItemIcon>
                    <ListItemText primary={ele.name} />
                  </ListItemButton>
                </ListItem>
              ))}

            {data.length == 7 &&
              data.map((ele) => (
                <ListItem key={ele.name} disablePadding>
                  <ListItemButton onClick={() => navigate(`${ele.path}`)}>
                    <ListItemIcon sx={{color:"white"}}>{ele.icon}</ListItemIcon>
                    <ListItemText primary={ele.name} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
          <Divider />
          {data.length == 3 && (
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(`/login`)}>
                  <ListItemIcon sx={{color:"white"}}>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(`/register`)}>
                  <ListItemIcon sx={{color:"white"}}>
                    <AppRegistrationIcon />
                  </ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
          {data.length == 7 && (
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(`/logout`)}>
                  <ListItemIcon sx={{color:"white"}}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </Drawer>
      </Box>
      <IconButton
        sx={{ marginLeft: "auto" }}
        color="inherit"
        size="large"
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerCompo;
