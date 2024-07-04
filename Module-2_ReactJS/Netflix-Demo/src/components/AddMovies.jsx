import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AddMovies.css'

const AddMovies = ({movieData,setMovieData}) => {

    const [movieName,setMovieName] = useState("")
    const [moviePoster,setMoviePoster] = useState("")
    const [movieSummary,setMovieSummary] = useState("")
    const [movieRating,setMovieRating] = useState("")
    const [movieRuntime,setMovieRuntime] = useState("")
    const [movieGenre,setMovieGenre] = useState("")
    const [movieLanguage,setMovieLanguage] = useState("")
    const [movieTrailer,setMovieTrailer] = useState("")
    const [movieActor,setMovieActor] = useState("")
    const [movieActress,setMovieActress] = useState("")

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
    <div className='Add-Movie-Header'>
        <div className='Head-Text'><h2>ADD MOVIES HERE</h2></div>
        <div>
          <form style={Form_style}>
            <TextField id="MovieName" label="Movie Name" variant="outlined" onChange={(event) => setMovieName(event.target.value)} style={TextField_style}/>
            <TextField id="Poster" label="Movie Poster URL" variant="outlined" onChange={(event) => setMoviePoster(event.target.value)} style={TextField_style}/>
            <TextField id="rating" label="Movie Rating" variant="outlined" onChange={(event) => setMovieRating(event.target.value)} style={TextField_style}/>
            <TextField id="runtime" label="Movie Runtime" variant="outlined" onChange={(event) => setMovieRuntime(event.target.value)} style={TextField_style}/>
            <TextField id="genre" label="Movie Genre" variant="outlined" onChange={(event) => setMovieGenre(event.target.value)} style={TextField_style}/>
            <TextField id="lang" label="Movie Language" variant="outlined" onChange={(event) => setMovieLanguage(event.target.value)} style={TextField_style}/>
            <TextField id="trailer" label="Movie Trailer URL" variant="outlined" onChange={(event) => setMovieTrailer(event.target.value)} style={TextField_style}/>
            <TextField id="actor" label="Movie Actor" variant="outlined" onChange={(event) => setMovieActor(event.target.value)} style={TextField_style}/>
            <TextField id="actress" label="Movie Actress" variant="outlined" onChange={(event) => setMovieActress(event.target.value)} style={TextField_style}/>    
            <TextField id="summary" label="Movie Summary" variant="outlined" onChange={(event) => setMovieSummary(event.target.value)} style={{width: "-webkit-fill-available",margin:"5px 10px"}}/>
                

           <div className='form-button'>
           <Button variant="outlined" onClick={() => {
            setMovieData([...movieData, updatedMovieData])}}>Add Movie</Button>
           </div>
          </form>
        </div>
      </div>
  )
}

export default AddMovies
