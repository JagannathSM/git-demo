import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <div className='LoadingMain'>
        <div className='LoadingText'>Loading please wait...</div>
    <div className='LoadingGIF'>
      <CircularProgress color="secondary"/>
    </div>
    </div>
  )
}

export default Loading
