import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import UndoIcon from '@mui/icons-material/Undo';
import './SearchMovies.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const SearchMovies = ({movieData,setFilterMovieData,setInitialSearch}) => {

    const navigate = useNavigate()

    const [searchedMovie,setSearchedMovie] = useState("")
   

    const searchMovieData = (searchedMovie) => {
        if(searchedMovie == ""){
            alert ("Type Something to Search")
            setInitialSearch(true)
            return
        }
        else {
            const filter_data_true = movieData.filter((ele)=>ele.name == searchedMovie);
            if(filter_data_true.length == 0){
                navigate("/PageNotFound")
            }
            else{
                setInitialSearch(false);
                setFilterMovieData(filter_data_true)
            }
        }
    }

  return (
   <>
    <div className='Search-Container'>
        <h2>Search Movies by Name</h2>
        <p><b>Search is Case Sensitive</b></p>
        <div className='Search-Area'>
            <Button variant="contained" startIcon={<UndoIcon />} onClick={() => setInitialSearch(true)}>
                BACK
            </Button>
            <TextField id="MovieSearch" label="Search Movies" variant="outlined" onChange={(event) => setSearchedMovie(event.target.value)}
                        style={{margin:"10px", width:"40%"}}/>
            <Button variant="outlined" startIcon={<SearchSharpIcon fontSize='large'/>}  onClick={()=> searchMovieData(searchedMovie)}>
                Search
            </Button>
        </div>
    </div>
   </>
  )
}

export default SearchMovies
