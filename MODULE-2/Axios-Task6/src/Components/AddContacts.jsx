import React, { useReducer, useState } from 'react'
import axios from 'axios'
import API from '../API'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Typography } from '@mui/material';


function AddContacts() {

  const navigate = useNavigate();

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
    name:"",
    phone:"",
    username:"",
    website:"",
    email:"",
    address:{
      suite:"",
      street:"",
      city:"",
      zipcode:""
    },
    company:{
      name:"",
      catchPhrase:"",
      bs:""
    }
  })

  const checkValue = (ele) => {
    if((ele.name == "") || (ele.phone=="") || (ele.username=="") || (ele.website=="") || (ele.email=="") || (ele.address.suite=="")
      || (ele.address.street=="") || (ele.address.city=="" )|| (ele.address.zipcode.actor=="") || (ele.company.name=="")
      || (ele.company.catchPhrase=="") || (ele.company.bs=="")){
        alert("Input Field Should Not Empty");
        return
      }
      else{
        handleAddContact(ele);
      }
    }

    const handleAddContact = async (ele) =>{
      try{
        await axios.post(`${API}`,ele)
        navigate('/Contacts')
      }
      catch (error){
        console.log("Error in Add Movie", error)
      }
    }

  return (
    <>
    <div>
      <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} onClick={()=>navigate(-1)}>
        Back
      </Button>
    </div>
    <Typography variant="div" sx={{display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}><h3>All fields are required!</h3></Typography>
    
    <form style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly",padding:"10px 3px"}}>
      <TextField required id="outlined-required" label="Person Name" onChange={(e) => dispatch({ type: "nameUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Mobile No" onChange={(e) => dispatch({ type: "phoneUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="User Name" onChange={(e) => dispatch({ type: "usernameUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Website" onChange={(e) => dispatch({ type: "websiteUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Email" onChange={(e) => dispatch({ type: "emailUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Suite No" onChange={(e) => dispatch({ type: "suiteUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Street Name" onChange={(e) => dispatch({ type: "streetUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="City name" onChange={(e) => dispatch({ type: "cityUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Zipcode" onChange={(e) => dispatch({ type: "zipcodeUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Company Name" onChange={(e) => dispatch({ type: "companyNameUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Catch Phrase" onChange={(e) => dispatch({ type: "catchPhraseUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
      <TextField required id="outlined-required" label="Stratary" onChange={(e) => dispatch({ type: "bsUpdate", value: e.target.value })} sx={{margin:"10px 2px"}}/>
    </form>
    <Typography variant="div" sx={{display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
      <Button variant="contained" color="success" sx={{marginTop:"10px"}} onClick={()=>checkValue(state)}>
        Add Contact
      </Button>
    </Typography>
    </>
  )
}

export default AddContacts
