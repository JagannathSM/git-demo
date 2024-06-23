import React, { useEffect, useState } from 'react'
import API from '../src/API'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import MovieCards from './MovieCards'


function Movies() {

  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate()

  const getMovies = async () => {
    try {
      const response = await axios.get(`${API}`)
      setMovieList(response.data)
    } catch (error) {
      console.error("Error listing movies", error)
    }
  }

  const DeleteMovie = async(id) => {
    console.log(id)
    try{
      await axios.delete(`${API}/${id}`)
      getMovies();
    } catch (error){
      console.log("Error in Deletion Part", error)
    }
  }

  useEffect(() => {getMovies()},[movieList])

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flexDirection:"row",
    alignItems: "baseline"
  }

  return (
    <>
      <div style={style}>
      {movieList.map((ele)=> (
        <MovieCards data={ele} key={ele.id} DeleteMovie={DeleteMovie}/>))}
      </div>
    </>
  )
}

export default Movies
