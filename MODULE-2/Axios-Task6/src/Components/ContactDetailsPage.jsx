import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import API from '../API'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


function ContactDetailsPage() {

  const {id} = useParams();
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
      {contact ? <ShowContact data={contact}/> : `Loading Contact details. Please Wait...`}
    </div>
  )
}

function ShowContact({data}){

  const navigate = useNavigate();

  return(
    <>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h2>{data.name} in Conatact List</h2>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="personal_info"
          id="personal">
          Personal Info
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="div">
            <Typography>
              <b>Address : </b> {data.address.suite}, {data.address.street}, {data.address.city} - {data.address.zipcode}.
            </Typography>
          </Typography> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="office_info"
          id="office">
          Professional Info
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="div">
            <Typography>
              <b>Company Name : </b> {data.company.name}
            </Typography>
            <Typography>
              <b>About Company : </b> {data.company.catchPhrase}
            </Typography>
            <Typography>
              <b>Company Stratagy : </b> {data.company.bs}
            </Typography>
          </Typography> 
        </AccordionDetails>
      </Accordion>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"15px"}}>
        <Button size="small" variant="contained" color="warning" startIcon={<ModeEditIcon />} onClick={()=>navigate(`/Contacts/Edit-Contacts/${id}`)}>
          Edit
        </Button>
      </div>
    </>
  )
}

export default ContactDetailsPage
