import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Badge from '@mui/material/Badge';

function ContactCard({data,index,DeleteContact}) {
  const navigate = useNavigate();
  const arr = (data.name).split("")
  return (
   <>
   <Card sx={{ maxWidth: 250, justifyContent:"center",alignContent:"center",alignItems:"center",display:"grid",margin:"10px 0px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
      <CardActionArea sx={{display: "flex", flexWrap: "wrap",paddingTop:"15px",flexDirection: "column"}} onClick={()=>navigate(`/Contacts/${data.id}`)}>
        <Tooltip title={`Username: ${data.username}`} placement="top">
          <Badge color="primary" badgeContent={`#${index+1}`}>
            <Avatar sx={{ width: 56, height: 56, textAlign:"center", justifyContent:"center"}}
              alt={data.name}
              src="#">{arr[0]}</Avatar>
            </Badge>
        </Tooltip>
        <CardContent sx={{display:"flex",flexWrap:"wrap",justifyContent:"center", textAlign:"center",flexDirection:"column"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{display:"flex", textAlign:"center",justifyContent:"center",alignItems:'center'}}>
            {data.name}
          </Typography>
          <Typography variant="div" color="text.secondary">
            <Typography variant="overline" display="block" gutterBottom sx={{display: "flex",alignContent: "center",alignItems: "center", justifyContent: "center"}}>
              <PhoneIcon color="secondary" fontSize='small' sx={{marginRight:"5px"}}/>{data.phone}
            </Typography>
            <Typography variant="body2" display="block" gutterBottom sx={{display: "flex",alignContent: "center",alignItems: "center", justifyContent: "center"}}>
              <EmailIcon color="secondary" fontSize='small' sx={{marginRight:"5px"}}/>{data.email}
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom sx={{textDecoration:"underline",color:"blue",cursor:"pointer",display: "flex",alignContent: "center",alignItems: "center", justifyContent: "center"}} >
              <LanguageIcon color="secondary" fontSize='small' sx={{marginRight:"5px"}}/>   {data.website}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-around", paddingBottom:"15px"}}>
      <Button size="small" variant="contained" color="warning" startIcon={<ModeEditIcon />} onClick={()=>navigate(`/Contacts/Edit-Contacts/${data.id}`)}>
          Edit
        </Button>
        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>{DeleteContact(data.id)}}>
          Delete
        </Button>
      </CardActions>
    </Card>
   </>
  )
}

export default ContactCard
