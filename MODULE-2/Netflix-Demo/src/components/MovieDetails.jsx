import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';

function MovieDetails({movieData}) {
    const { movieid } = useParams();
    const navigate = useNavigate()
    const movie = movieData[movieid-1]

    const youtube_Title = `${movie.name} Trailer`
    const youtubeLink = movie.trailer.slice(17)

    const youtube_src = `https://www.youtube.com/embed/${youtubeLink}`
  return (
    <>
    <div className="movie-detail-card">
        
<iframe width="640" height="360" src={youtube_src} title={youtube_Title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


      <div className="movie-spec">
        <h2>
          {movie.name}
        </h2>
        <h3>⭐{movie.rating}</h3>
      </div>

      <p className="movie-summary">{movie.summary}</p>

      <Button variant="contained" startIcon={<UndoIcon />} onClick={() => navigate(-1)}>
        BACK
      </Button>


    </div>
    </>
  )
}

export default MovieDetails
