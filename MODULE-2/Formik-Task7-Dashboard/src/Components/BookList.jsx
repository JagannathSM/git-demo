import React, { useEffect, useState } from 'react'
import Book_Data_API from '../Book_Data_API'
import axios from "axios"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';


function BookList() {

    const navigate = useNavigate();

    const [bookList, setBookList] = useState([]);

  const getBooks = async () => {
    try {
      const response = await axios.get(`${Book_Data_API}`)
      setBookList(response.data)
    } catch (error) {
      console.error("Error listing Books", error)
    }}

    const deleteBooks = async (id) => {
      try{
        await axios.delete(`${Book_Data_API}/${id}`);
        getBooks();

      } catch (error) {
        console.log(`Error while deleting book ${id}`,error);
      }
    }

  useEffect(() => {getBooks()},[])

  return (
    <div>
        <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} onClick={()=>navigate(-1)}>
            Back
        </Button>
        {bookList ? <Books bookList={bookList} deleteBooks={deleteBooks} /> : "Loading Books Please Wait..."}
    </div>
  )
}

function Books({bookList, deleteBooks}){

    const booksConatinerStyle = {
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-around"
    }
    return(
        <>
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            <h1>Book Lists</h1>
        </div>
        <div style={booksConatinerStyle}>
            {bookList.map((ele)=> (
            <BookCard data={ele} key={ele.id} deleteBooks={deleteBooks}/>))}
        </div>
        </>
    )
}

export default BookList
