import React from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard'
import './Movies.css'
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import AddMovies from './AddMovies';
import SearchMovies from './SearchMovies';


function Movies({movieData,setMovieData,filterMovieData,setFilterMovieData,initialSearch,setInitialSearch}) {

    const [showActionPart,setShowActionPart] = useState(false)
    const [searchDisable,setSearchDisable] = useState(false)
    const [addDisable,setAddDisable] = useState(false)
    const [addMoviesPart,setAddMoviesPart] = useState(false)
    const [searchMoviesPart,setSearchMoviesPart] = useState(false)

   const MovieButtonStyle = {
    margin:"10px"
   }

  return (
   <>
   <div className='Title-Movie-Page'><h1>This is Movie Page.</h1>
   {showActionPart ? <div><div className='Movie-Functions-Btn'>
        <Button variant="contained" startIcon={<ControlPointIcon />} disabled={addDisable} style={MovieButtonStyle}
        onClick={() => {setSearchDisable(!searchDisable);
                        setAddMoviesPart(!addMoviesPart);
        }}>
            Add Movies to the List
        </Button>
        <Button variant="contained" startIcon={<SearchIcon />} disabled={searchDisable} style={MovieButtonStyle}
        onClick={() => {setAddDisable(!addDisable);
                        setSearchMoviesPart(!searchMoviesPart)
        }}>
            Search Movies
        </Button> 
        </div>
        <div className='function-area'>
        {addMoviesPart ? <AddMovies movieData={movieData} setMovieData={setMovieData}
                                    addMoviesPart={addMoviesPart} setAddMoviesPart={setAddMoviesPart}
                         /> : ""}
        {searchMoviesPart ? <SearchMovies movieData={movieData} setFilterMovieData={setFilterMovieData}
                                            setInitialSearch={setInitialSearch}
        /> : ""}
   </div>       
   </div>:""}
   
   </div>

   <div className='Movie-function-Btn-Condition'>
    <IconButton color="primary" aria-label="expande for more options" size="large" onClick={()=>{setShowActionPart(!showActionPart)}}>
        {showActionPart ?  <ExpandLessIcon fontSize="inherit"/> : <ExpandMoreIcon fontSize="inherit"/>}
    </IconButton>
   </div>
   {initialSearch ? <div className='Movie-card-container'>
    {movieData.map((ele,index)=> (
        <MovieCard data={ele} key={index}/>
    ))}
   </div> : <div className='Movie-card-container'>
            {filterMovieData.map((ele,index)=> (
                <MovieCard data={ele} key={index}/>
    ))}
   </div>}
   
   </>
  )
}

export default Movies
