import React from 'react'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';

function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

  return (
    <div>
        <IconButton aria-label="likeBtn" size="large" style={{paddingBottom:"0"}} 
                    color={like == 0 ? "none" : "primary"} 
                    onClick={() => {setLike(like + 1)}}>
            <Badge badgeContent={like} color="primary" >
                <ThumbUpIcon/>
            </Badge>
        </IconButton>
        <IconButton aria-label="dislikeBtn" size="large" style={{paddingBottom:"0"}} 
                    color={dislike == 0 ? "none" : "error"}
                    onClick={() => {setDislike(dislike + 1)}}>
            <Badge badgeContent={dislike} color="error" >
                <ThumbDownIcon />
            </Badge>
        </IconButton>
    </div>
  )
}

export default Counter
