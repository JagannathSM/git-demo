import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DrawerCompo from "./DrawerCompo";
import {useNavigate} from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

function Youtube22Nav() {
  const [value, setValue] = useState("/");
  const navigate = useNavigate()
  const [user,setUser] = useState(false);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);


  const userNavigatePath = [
    {icon:<HomeIcon/>,name:"Home",path:"/"},
    {icon:<InfoIcon/>,name:"About",path:"/about"},
    {icon:<PermContactCalendarIcon/>,name:"Contact",path:"/contact"},
    {icon:<AccountCircleIcon/>,name:"User",path:"/user-profile"},
    {icon:<NotificationsIcon/>,name:"Notifications",path:"/user-notifications"},
    {icon:<CollectionsBookmarkIcon/>,name:"Bookings",path:"/user-bookings"},
]

const noUserNavigatePath = [
    {icon:<HomeIcon/>,name:"Home",path:"/"},
    {icon:<InfoIcon/>,name:"About",path:"/about"},
    {icon:<PermContactCalendarIcon/>,name:"Contact",path:"/contact"},
]

  return (
    <>
      <AppBar position="static" sx={{ background: "#063970" }}>
        <Toolbar>
          <Typography sx={{display:"flex"}}>
            CleanEase <CleaningServicesIcon size='large' sx={{paddingLeft:"3px",paddingBottom:"5px"}}/>
          </Typography>

          {isMatch ? (
            <>
              <DrawerCompo data = {user? userNavigatePath : noUserNavigatePath}/>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "10px" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                  navigate(`${value}`)
                }}
                indicatorColor="secondary"
              >
                {user ? userNavigatePath.map((ele)=>(
                    <Tab key={ele.name} value={`${ele.path}`} icon={ele.icon} label={ele.name}/>
                )) : 
                noUserNavigatePath.map((ele)=>(
                    <Tab key={ele.name} value={`${ele.path}`} icon={ele.icon} label={ele.name} />
                ))
            }
             </Tabs>
             {!user ? <>
             <Button sx={{ marginLeft: "auto" }} variant="contained">
                LogIn
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
             </> :
             <>
               <Button sx={{ marginLeft: "auto" }} variant="contained">
                Logout
              </Button>
             </>
             }
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Youtube22Nav;
