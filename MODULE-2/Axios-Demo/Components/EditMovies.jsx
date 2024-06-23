import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../src/API';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function EditMovies() {
  const {id} = useParams()

  const [movie,setMovie] = useState("")

  const getMovie = async (id) => {
    try{
      const res = await axios.get(`${API}/${id}`)
      setMovie(res.data);
    } catch (error){
      console.log("Whilt Getting data in edit Movie",error)
    }
  }

  useEffect(()=>{getMovie(id)},[])

    return movie ? <EditMovieForm movie={movie} /> : "Loading..."
    
}

function EditMovieForm ({movie}){

    const navigate = useNavigate();

    const [movieName,setMovieName] = useState(movie.name)
    const [moviePoster,setMoviePoster] = useState(movie.poster)
    const [movieSummary,setMovieSummary] = useState(movie.summary)
    const [movieRating,setMovieRating] = useState(movie.rating)
    const [movieRuntime,setMovieRuntime] = useState(movie.duration)
    const [movieGenre,setMovieGenre] = useState(movie.genre)
    const [movieLanguage,setMovieLanguage] = useState(movie.language)
    const [movieTrailer,setMovieTrailer] = useState(movie.trailer)
    const [movieActor,setMovieActor] = useState(movie.cast.actor)
    const [movieActress,setMovieActress] = useState(movie.cast.actress)

  const updatedMovieData = {
    name:movieName,
    poster:moviePoster,
    rating:movieRating,
    summary:movieSummary,
    duration:movieRuntime,
    genre:movieGenre,
    language:movieLanguage,
    trailer:movieTrailer,
    cast:{
      actor:movieActor,
      actress:movieActress
    }
  }

  const checkValue = (ele,id) => {
    if((ele.name == "") || (ele.poster=="") || (ele.rating=="") || (ele.summary=="") || (ele.duration=="") || (ele.genre=="")
      || (ele.language=="") || (ele.trailer=="" )|| (ele.cast.actor=="") || (ele.cast.actress=="")){
        alert("Input Field Should Not Empty");
        return
      }
      else{
            EditMovie(ele,id);  
            navigate('/Movies');
      }
  }
  
  const EditMovie = async (ele,id) => {
    try{
      await axios.put(`${API}/${id}`,ele)
    }
    catch (error){
      console.log("Error while add edited Movie", error)
    }
  }

  const TextField_style = {
    // width: "-webkit-fill-available",
    margin:"5px 10px"
  }

  const Form_style = {
    display: "flex",
    flexFlow:"wrap",
    justifyContent: "space-around",
    alignItems: "center"
  }

  return (
    <>
    <div className='Add-Movie-Header'>
        <div className='Head-Text'><h2>ADD MOVIES HERE</h2></div>
        <div>
          <form style={Form_style}>
            <TextField id="MovieName" label="Movie Name" variant="outlined" value={movieName} onChange={(event) => setMovieName(event.target.value)} style={TextField_style}/>
            <TextField id="Poster" label="Movie Poster URL" variant="outlined" value={moviePoster} onChange={(event) => setMoviePoster(event.target.value)} style={TextField_style}/>
            <TextField id="rating" label="Movie Rating" variant="outlined" value={movieRating} onChange={(event) => setMovieRating(event.target.value)} style={TextField_style}/>
            <TextField id="runtime" label="Movie Runtime" variant="outlined" value={movieRuntime} onChange={(event) => setMovieRuntime(event.target.value)} style={TextField_style}/>
            <TextField id="genre" label="Movie Genre" variant="outlined" value={movieGenre} onChange={(event) => setMovieGenre(event.target.value)} style={TextField_style}/>
            <TextField id="lang" label="Movie Language" variant="outlined" value={movieLanguage} onChange={(event) => setMovieLanguage(event.target.value)} style={TextField_style}/>
            <TextField id="trailer" label="Movie Trailer URL" variant="outlined" value={movieTrailer} onChange={(event) => setMovieTrailer(event.target.value)} style={TextField_style}/>
            <TextField id="actor" label="Movie Actor" variant="outlined" value={movieActor} onChange={(event) => setMovieActor(event.target.value)} style={TextField_style}/>
            <TextField id="actress" label="Movie Actress" variant="outlined" value={movieActress} onChange={(event) => setMovieActress(event.target.value)} style={TextField_style}/>    
            <TextField id="summary" label="Movie Summary" variant="outlined" value={movieSummary} onChange={(event) => setMovieSummary(event.target.value)} style={{width: "-webkit-fill-available",margin:"5px 10px"}}/>

           <div className='form-button'>
           <Button variant="contained" color="warning" onClick={() => {
            checkValue(updatedMovieData,movie.id);
            }}>Edit Movie</Button>
           </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditMovies
