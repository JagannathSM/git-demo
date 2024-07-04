import React from 'react'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';
import './ErrorPage.css'

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className='Error-Page-Container'>
      <div className='Error-Message'>
        <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959253-3299952.gif" alt="404 Error Page Not Found"/>
      </div>
      <div className='Button-Back'>
        <Button variant="outlined" startIcon={<ArrowLeftSharpIcon fontSize='large'/>}  onClick={()=> navigate(-1)}>
            Back to Previous Page
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage
