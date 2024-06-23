import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <Box component="section" sx={{ p: 3,display:"grid",justifyContent:"center",textAlign:"center",alignContent:"center", alignItems:"center"}}>
      <Box component="section" sx={{ p: 2, display:"flex", flexWrap:"wrap", justifyContent:"center", flexDirection:"column"}}>
        <Typography variant="h4" gutterBottom>
          Requirements:
        </Typography>
        <Typography variant="div" gutterBottom sx={{display:"flex",textAlign:"justify"}}>
          <ol style={{paddingLeft:"25px"}}>
            <li>Display all the existing API data in UI using Axios.</li>
            <li>Users should be able to perform CRUD operations on user data, including adding, editing, and deleting user records.</li>
            <li>The user data should be stored in a mock API that can be accessed using Axios fetch.</li>
            <li>The UI should have a clean and responsive design that is easy to use and navigate.</li>
          </ol>
        </Typography>
      </Box>
      <Box component="section" sx={{ p: 2,display:"flex", flexWrap:"wrap", justifyContent:"center", flexDirection:"column"}}>
        <Typography variant="h4" gutterBottom>
          How To Use
        </Typography>
        <Typography variant="div" gutterBottom sx={{display:"flex",textAlign:"justify"}}>
        <ol style={{paddingLeft:"25px"}}>
            <li><b>To Get All Contacts - </b>Click on Cantact List. <i>Axios GET used to get all data from Mock API.</i></li>
            <li><b>To Add new Contacts - </b>Click on Add Contacts. <i>Need to fill all fields to create new contact. Axios POST used for this.</i></li>
            <li><b>To Edit Contacts - </b>Click on Edit Button in Contacts Card in Contact List. <i>Axios PUT used to update the contact.</i></li>
            <li><b>To Delete Contacts - </b>Cilck on Delete button in Contacts Card in Contact List. <i>Axios DELETE used to do delete the contact.</i></li>
          </ol>
        </Typography>
      </Box>
    </Box>
  )
}

export default Home
