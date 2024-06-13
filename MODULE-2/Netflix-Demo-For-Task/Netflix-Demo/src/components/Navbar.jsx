import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import './Navbar.css'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Movies from './Movies';
import {data_movies} from '../App'
import { useState } from 'react';
import ErrorPage from './ErrorPage';
import MovieDetails from './MovieDetails';
import Series from './Series';
import AddMovies from './AddMovies';


function Navbar() {
  // const navigate = useNavigate()

  const [movieData,setMovieData] = useState(data_movies);

  const [filterMovieData,setFilterMovieData] = useState("");
  
  const [initialSearch,setInitialSearch] = useState(true);

  return (
    <>
      <div className='Navigation-Header'>
        <nav className='nav-container'>
          <div className='Logo'>
            <Link to="/">
              <h3>Movie-Media </h3><LocalMoviesIcon/>
            </Link>
          </div>
          <div className='navigation-sites-list'>
            <ul className='List-Nav'>
              <li><Link to="/movies">MovieList</Link></li>
              <li><Link to="/add-movies">Add Movies</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movies" element={<AddMovies movieData={movieData} setMovieData={setMovieData}/>} />
        <Route path="/movies" element={<Movies movieData={movieData} setMovieData={setMovieData} 
                                              filterMovieData={filterMovieData} setFilterMovieData={setFilterMovieData}
                                              initialSearch={initialSearch} setInitialSearch={setInitialSearch}/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/movies/:movieid" element={<MovieDetails movieData={movieData} />} />
        <Route path="/PageNotFound" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default Navbar
