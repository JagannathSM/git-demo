import React from 'react'
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Counter from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


function MovieCards({data,DeleteMovie}) {

  const navigate = useNavigate()

const [desc,setDesc] = useState(true)
  return (
    <>
      <div className='Container'>
        <div className='Image'>
          <img src={data.poster} alt={data.name} height="250" width="200"/>
        </div>
        <div>
          <h3 style={{margin:"5px 0px",display:"flex",flexWrap:"wrap",padding:"0px 5px"}}>{data.name}</h3>
        </div>
        <div className='btn'>
          {desc ? <Button endIcon={<ArrowDropDownIcon />} onClick={()=>setDesc(!desc)}>
            Show More
          </Button> :
          <Button endIcon={<ArrowDropUpIcon />} onClick={()=>setDesc(!desc)}>
            Show Less
          </Button>}
          <div>
            {data.rating}
          </div>
        </div>
        {!desc && <p className='summary'>
            {data.summary}
        </p>}
        <div className='footer'>
          <div className='footerbase'>
            <div className='counter'>
              <Counter/>
            </div>
            <div className='CURD'>
              <IconButton aria-label="edit" color='warning' onClick={()=>navigate(`/Movies/Edit-Movies/${data.id}`)}>
                <ModeEditIcon />
              </IconButton>
              <IconButton aria-label="delete" color='error' onClick={()=>DeleteMovie(data.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
          <div className='MoreInfo'>
            <Button variant='contained' endIcon={<InfoIcon />} onClick={()=>navigate(`/Movies/${data.id}`)}>
              More Info
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCards
