import React from 'react'
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from 'react-router-dom';

function AuthorCard({data, deleteAuthor}) {

    const navigate = useNavigate()

  return (
    <>
    <Card sx={{display:"flex", flexWrap:"wrap",flexDirection:"row", margin:"10px 5px", padding:"5px",alignItems: "center", justifyContent: "center"}}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{marginBottom:"1rem"}}>
          <b>Name - </b>{data.name}
        </Typography>
        <Typography varient="body2" sx={{mb:1.5, textAlign:"justify"}} color="text.secondary">
          <b>Bio - </b>{data.bio}
        </Typography>
        <Typography variant="body2">
          <b>Date Of Birth - </b>{data.DOB}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly",marginBottom:"10px"}}>
        <Button size="small" variant="contained" color="warning" startIcon={<ModeEditIcon />} onClick={()=>navigate(`/Authorlist/EditAuthor/${data.id}`)}>
            Edit
        </Button>
        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>deleteAuthor(data.id)}>
            Delete
        </Button>
      </CardActions>
    </Card>
    </>
  )
}

export default AuthorCard
