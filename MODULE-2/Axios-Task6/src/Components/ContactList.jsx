import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import ContactCard from "./ContactCard"
import API from "../API"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';


function ContactList() {

  const navigate = useNavigate();

  const [contactList, setContactList] = useState([]);

  const getContacts = async () => {
    try {
      const response = await axios.get(`${API}`)
      setContactList(response.data)
    } catch (error) {
      console.error("Error listing contacts", error)
    }
  }

  const DeleteContact = async(id) => {
    try{
      await axios.delete(`${API}/${id}`)
      getContacts();
    } catch (error){
      console.log("Error in Deletion Part", error)
    }
  }

  useEffect(() => {getContacts()},[])

    return (
    <div>
      <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} onClick={()=>navigate("/")}>
        Back
      </Button>
    {contactList ? <Contacts contactList={contactList} DeleteContact={DeleteContact}/> : "Loading Contacts Please Wait..."}
    </div>
  )
}

function Contacts({contactList,DeleteContact}){

  const navigate = useNavigate();

  const contactConatinerStyle = {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-around"
  }
  return(
    <>
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
      <h3>Click Contact Cards for Detailed Contact info!</h3>
    </div>
      <div style={contactConatinerStyle}>
        {contactList.map((ele,index)=> (
        <ContactCard data={ele} index={index} key={ele.id} DeleteContact={DeleteContact}/>))}
      </div>
    </>
  )
}


export default ContactList
