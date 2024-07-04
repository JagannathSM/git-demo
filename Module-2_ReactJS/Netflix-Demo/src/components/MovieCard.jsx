import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import './MovieCard.css'
import Counter from './Counter';

function MovieCard({data}) {

    const movie_id = `/movies/${data.id}`

    const google_name = data.name;
    const href = `https://www.google.com/search?q=${google_name}`

    const rating_style = {
        margin:"0",
        paddingTop:"5px",
        color: "green"
    }

    const rating_style1 = {
        margin:"0",
        paddingTop:"5px",
        color : "red"
    }

  return (
    <div>
    <Card sx={{height: 520}} className='Card-Movie1' style={{boxShadow:"1px 1px 5px black",margin:"15px 10px", diaplay:"flex", minHeight: "initial"}}>
        <Link to={movie_id} style={{textDecoration:"none",color:"black"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image={data.poster}
                    alt={data.name}
                    style={{objectFit: "fill"}}
                />
                <CardContent className='CardContent'>
                    <Typography gutterBottom variant="body2" component="div" style={{textAlign:"center",justifyContent:"space-between",display:"flex"}}>
                        <h3 style={{margin:"0",padding:"0"}}>{data.name}</h3>
                        <h5 style={data.rating >= 4 ? rating_style : rating_style1}>⭐ {data.rating}</h5>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Link>
            <div className='button-part' style={{paddingTop:"5px"}}>
                <Typography variant="body2" component="div">
                    <Counter/>
                </Typography>
                <Typography component="div">
                    <Button className="button-card-footer" variant="contained" endIcon={<GoogleIcon fontSize="medium" />} target='_blank' href={href}>
                        Search
                    </Button>
                    {/* <Button variant="outlined" target='_blank' href={href} >Search <GoogleIcon fontSize="medium"/></Button> */}
                </Typography>
            </div>
    </Card>
    </div>
  )
}

export default MovieCard
