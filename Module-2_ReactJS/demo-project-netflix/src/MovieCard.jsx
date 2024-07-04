import { useState } from 'react';

export function MovieCard({ movie }) {
  const [show, setShow] = useState(false);

  const ratingStyles = {
    color: movie.rating < 4 ? "red" : "green"
  };

  return (
    <>
      <div className='Movie-Cards'>
        <img className='Movie_Cards-Img' src={movie.poster} alt={movie.name} />
        <div className='Movie-Cards-Details'>
          <h2>{movie.name}&nbsp;#{movie.language}</h2>
          <h3 style={ratingStyles}>⭐{movie.rating}</h3>
        </div>
        <div className='Movie-Card-Details-More'>
          <div className='Movie-Card-Summary-Button'>
            <small><b>Genre-</b>{movie.genre}</small>
            <small><b>Runtime </b>{movie.duration}</small>
            <button onClick={() => setShow(!show)}>Show More</button>
          </div>
          {show ? <div className='Movie-Card-Summary-More'>
            <p className="Mvoie-Card-Summary">{movie.summary}</p>
            <p><b>Actors-</b>{movie.cast.actor}</p>
            <p><b>Actress-</b>{movie.cast.actress}</p>
          </div> : ""}
        </div>
        <div className='Movie-Card-Footer-Button'>
          <a type="button" href={movie.trailer} target='_blank'>Watch Trailer <i className="fa fa-youtube-play fa-1.5x" aria-hidden="true"></i></a>
        </div>
      </div>
    </>
  );
}
