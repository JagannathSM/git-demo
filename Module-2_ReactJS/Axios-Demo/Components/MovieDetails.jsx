import React , {useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import API from '../src/API';
import axios from 'axios';


function MovieDetails() {
    const { id } = useParams();
    
    const [movie,setMovie]= useState("");

    const getData = async(id) =>{
        try{
            const res = await axios.get(`${API}/${id}`);
            setMovie(res.data);
        }catch (error){
            console.log("Error when showing Movie Datails",error)
        }
    }

    useEffect(()=>{
        getData(id)
    },[])

  return (
    <>
    {movie ? <ShowMovieDetails movie={movie}/> : "Loading..."}
    </>
  )
}



function ShowMovieDetails({movie}){

    const navigate = useNavigate();

    const youtube_Title = `${movie.name} Trailer`
    const youtubeLink = movie.trailer.slice(17)

    const youtube_src = `https://www.youtube.com/embed/${youtubeLink}`
    const [value,setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <>
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" style={{width:"100%"}}>
                    <Tab icon={<PhoneIcon />} label="About" />
                    <Tab icon={<FavoriteIcon />} label="Video" />
                    <Tab icon={<PersonPinIcon />} label="More" />
                </Tabs>
            </div>
            <ShowValues value={value} movie={movie} youtube_Title={youtube_Title} youtube_src={youtube_src}/>
            <Button variant="contained" startIcon={<UndoIcon />} onClick={() => navigate(-1)}>
                BACK
            </Button>
        </>
    )
}

function ShowValues ({value,movie,youtube_Title,youtube_src}) {
    switch (value) {
      case 0: {
        return (
          <div className="movie-spec">
            <h2>{movie.name}</h2>
            <h3>⭐{movie.rating}</h3>
          </div>
        )
      }
      case 1: {
        return (
          <div style={{justifyContent:"center",display:"flex",padding:"20px"}}>
            <iframe width="100%" height="300" src={youtube_src} title={youtube_Title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        )
      }
      case 2:{
        return (
          <div className="movie-detail-card">
            <p className="movie-summary">{movie.summary}</p>
          </div>
        )
      }
      default : {
        return (
         <>
         </>
        )
      }
    }
  }
export default MovieDetails
