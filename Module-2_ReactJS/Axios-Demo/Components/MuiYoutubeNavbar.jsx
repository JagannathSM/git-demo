import React, {useState} from 'react'
import {AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuList, MenuItem} from '@mui/material'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';

function MuiYoutubeNavbar() {
    const navigate = useNavigate()
    const [anchorNav, setAnchorNav] = useState(null);
    const openMenu = (e)=>{
        e.preventDefault();
        setAnchorNav(e.currentTarget)
    };
    const closeMenu = () =>{
        setAnchorNav(null);
    }
  return (
    <>
    <AppBar position="static">
        <Toolbar>
            <IconButton size='large' edge="start" color="inherit" aria-label='logo' sx={{display:{xs:"none",md:"flex"}}}>
                <CleaningServicesIcon/>
            </IconButton>
            <Typography variant='h6' component="div" sx={{flexGrow:1,display:{xs:"none",md:"flex"}}}>CleanEase</Typography>
            <Box sx={{display:{xs:"none",md:"flex"}}}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">Sign In</Button>
                <Button color="inherit">Sign Up</Button>
            </Box>
            <Box sx={{display:{xs:"flex",md:"none"}}}>
                <IconButton size='large' edge="start" color="inherit" onClick={openMenu}>
                    <MenuIcon/>
                </IconButton>
                <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:"flex",md:"none"}}}>
                    <MenuList>
                        <MenuItem onClick={()=>{closeMenu(),navigate('/fuck')}}>Home</MenuItem>
                        <MenuItem onClick={closeMenu}>About</MenuItem>
                        <MenuItem onClick={closeMenu}>Contact</MenuItem>
                        <MenuItem onClick={closeMenu}>Sign In</MenuItem>
                        <MenuItem onClick={closeMenu}>Sign Up</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <IconButton size='large' edge="start" color="inherit" aria-label='logo' sx={{display:{xs:"flex",md:"none"}}}>
                <CleaningServicesIcon/>
            </IconButton>
            <Typography variant='h6' component="div" sx={{flexGrow:1,display:{xs:"flex",md:"none"}}}>CleanEase</Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default MuiYoutubeNavbar
