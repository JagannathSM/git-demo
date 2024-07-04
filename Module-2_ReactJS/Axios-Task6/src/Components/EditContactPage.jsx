import React, { useEffect, useReducer, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import API from '../API'
import axios from 'axios'


function EditContactPage() {

  const {id}= useParams();

  const navigate = useNavigate();

  const [contact, setContact] = useState('');

  const getContacts = async (id) => {
    try {
      const response = await axios.get(`${API}/${id}`)
      setContact(response.data)
    } catch (error) {
      console.error("Error listing contacts", error)
    }
  }
  useEffect(() => {getContacts(id)},[])

  return (
    <div>
    <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} onClick={()=>navigate(-1)}>
      Back
    </Button>
    {contact ? <ShowEditContact data={contact}/> : `Loading Contact details. Please Wait...`}
  </div>
  )
}

function ShowEditContact({data}){

  const navigate = useNavigate()

  const name = data.name;
  const phone = data.phone;
  const username = data.username;
  const website = data.website;
  const email = data.email;
  const suite = data.address.suite;
  const street = data.address.street;
  const city = data.address.city;
  const zipcode = data.address.zipcode;
  const companyName = data.company.name;
  const catchPhrase = data.company.catchPhrase;
  const bs = data.company.bs;

  
  const [state, dispatch] = useReducer((state, action) =>{
    if (action.type === "nameUpdate"){
      return {
        ...state,
        name: action.value
    }}
    if (action.type === "phoneUpdate"){
      return {
        ...state,
        phone: action.value
    }}
    if (action.type === "usernameUpdate"){
      return {
        ...state,
        username: action.value
    }}
    if (action.type === "websiteUpdate"){
      return {
        ...state,
        website: action.value
    }}
    if (action.type === "emailUpdate"){
      return {
        ...state,
        email: action.value
    }}
    if (action.type === "suiteUpdate"){
      state.address.suite=action.value;
      return {
        ...state,
    }}
    if (action.type === "streetUpdate"){
      state.address.street=action.value;
      return {
        ...state,
    }}
    if (action.type === "cityUpdate"){
      state.address.city=action.value;
      return {
        ...state,
    }}
    if (action.type === "zipcodeUpdate"){
      state.address.zipcode=action.value;
      return {
        ...state,
    }}
    if (action.type === "companyNameUpdate"){
      state.company.name= action.value
      return {
        ...state,
    }}
    if (action.type === "catchPhraseUpdate"){
      state.company.catchPhrase= action.value
      return {
        ...state,
    }}
    if (action.type === "bsUpdate"){
      state.company.bs= action.value
      return {
        ...state,
    }}
  },{
    name,
    phone,
    username,
    website,
    email,
    address:{
      suite,
      street,
      city,
      zipcode
    },
    company:{
      name:companyName,
      catchPhrase,
      bs
    }
  })

  const checkValue = (ele,id) => {
    if((ele.name == "") || (ele.phone=="") || (ele.username=="") || (ele.website=="") || (ele.email=="") || (ele.address.suite=="")
      || (ele.address.street=="") || (ele.address.city=="" )|| (ele.address.zipcode.actor=="") || (ele.company.name=="")
      || (ele.company.catchPhrase=="") || (ele.company.bs=="")){
        alert("Input Field Should Not Empty");
        return
      }
      else{
        handleEditContact(ele,id);
      }}

const handleEditContact = async(ele,id) =>{
  try{
    await axios.put(`${API}/${id}`,ele)
    navigate("/Contacts")
  } catch (error){
    console.log("Error when saving the Edited Contact",error)
  }
}

  return(
    <>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h2 style={{marginBottom:"5px"}}>Editing - {name} in Conatact List</h2>
      </div>
      <Typography variant="div" sx={{display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}><h3 style={{marginTop:"5px"}}>All fields are required!</h3></Typography>
    
    <form style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly",padding:"10px 3px"}}>
      <TextField required id="outlined-required" label="Person Name" defaultValue={name} onChange={(e) => dispatch({ type: "nameUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Mobile No" defaultValue={phone} onChange={(e) => dispatch({ type: "phoneUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="User Name" defaultValue={username} onChange={(e) => dispatch({ type: "usernameUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Website" defaultValue={website} onChange={(e) => dispatch({ type: "websiteUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Email" defaultValue={email} onChange={(e) => dispatch({ type: "emailUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Suite No" defaultValue={suite} onChange={(e) => dispatch({ type: "suiteUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Street Name" defaultValue={street} onChange={(e) => dispatch({ type: "streetUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="City name" defaultValue={city} onChange={(e) => dispatch({ type: "cityUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Zipcode" defaultValue={zipcode} onChange={(e) => dispatch({ type: "zipcodeUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Company Name" defaultValue={companyName} onChange={(e) => dispatch({ type: "companyNameUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Catch Phrase" defaultValue={catchPhrase} onChange={(e) => dispatch({ type: "catchPhraseUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Stratary" defaultValue={bs} onChange={(e) => dispatch({ type: "bsUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
    </form>
    <Typography variant="div" sx={{display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
      <Button variant="contained" color="warning" sx={{marginTop:"10px"}} onClick={()=>checkValue(state,data.id)}>
        Save Changes
      </Button>
    </Typography>
    </>
  )
}

export default EditContactPage
