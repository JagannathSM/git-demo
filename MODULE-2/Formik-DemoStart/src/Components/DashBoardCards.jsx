import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';


function DashBoardCards({ele}) {

    const navigate = useNavigate();

  return (
    <div>
    <Card sx={{ maxWidth: 200, margin: 4}}>
      <CardActionArea onClick={()=> navigate(`/${ele.path}`)}>
      <CardMedia component="img" height="200" image={ele.myImage} alt={ele.name}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display:'flex',justifyContent:"center", alignItems:"cenetr"}}>
            {ele.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default DashBoardCards
