import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Author_Data_API from '../Author_Data_API'
import axios from "axios"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import AuthorCard from './AuthorCard';

function AuthorList() {

    const navigate = useNavigate();

    const [authorList, setAuthorList] = useState([]);

  const getAuthor = async () => {
    try {
      const response = await axios.get(`${Author_Data_API}`)
      setAuthorList(response.data)
    } catch (error) {
      console.error("Error listing Auhhors", error)
    }}

    const deleteAuthor = async (id) => {
      try{
        await axios.delete(`${Author_Data_API}/${id}`);
        getAuthor();
      } catch (error){
        console.log(`Error while deleting Author ${id}`, error);
      }
    }

  useEffect(() => {getAuthor()},[])

  return (
    <div>
        <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} onClick={()=>navigate(-1)}>
            Back
        </Button>
        {authorList ? <Authors authorList={authorList} deleteAuthor={deleteAuthor} /> : "Loading Author lists Please Wait..."}
    </div>
  )
}


function Authors({authorList, deleteAuthor}){

    const authorsConatinerStyle = {
        justifyContent:"space-around",
        display:"grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))"
      }

      return(
        <>
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            <h1>Authors Lists</h1>
        </div>
        <div style={authorsConatinerStyle}>
            {authorList.map((ele)=> (
            <AuthorCard data={ele} key={ele.id} deleteAuthor={deleteAuthor}/>))}
        </div>
        </>
      )
}

export default AuthorList
