import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';


function BookCard({data, deleteBooks}) {

    const navigate = useNavigate();

    const [showFlexStyle,setShowFlexStyle] = useState(false)

    const showFlex = () => {
        if (window.innerWidth >= 780) {
          setShowFlexStyle(false);
        } else {
          setShowFlexStyle(true);
        }
      };

      useEffect(() => {
        showFlex();
      }, []);

      window.addEventListener('resize', showFlex);

      const card_style_pc = {
          justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          display:"flex",
          margin:"10px 0px"
      }

      const card_style_mobile = {
        justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          display:"flex",
          margin:"10px 0px",
          flexWrap:"wrap"
      }

  return (
    <>
    <Card sx={ showFlexStyle ? card_style_mobile : card_style_pc }>
    <CardMedia
        component="img"
        sx={{ maxWidth: 250, minWidth:50, height:300,padding:"20px"}}
        image={data.thumbnailUrl}
        alt={data.title}/>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            <b>Title - </b>{data.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <b>Author - </b>{data.authors}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <b>Published Date - </b>{data.publishedDate}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <b>ISBN - </b>{data.isbn}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{textAlign:"justify"}}>
            <b>Description - </b>{data.shortDescription}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <b>PageCount - </b>{data.pageCount}
          </Typography>
          <Typography variant="div" color="text.secondary" component="div" sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly",marginTop:"20px"}}>
                <Button size="small" variant="contained" color="warning" startIcon={<ModeEditIcon />} onClick={()=>navigate(`/Booklist/EditBook/${data.id}`)}>
                    Edit
                </Button>
                <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>deleteBooks(data.id)}>
                    Delete
                </Button>
          </Typography>
        </CardContent>
      </Box>
    </Card>
    </>
  )
}

export default BookCard
