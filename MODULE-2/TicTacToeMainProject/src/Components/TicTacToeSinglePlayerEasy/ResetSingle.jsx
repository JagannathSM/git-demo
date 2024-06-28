import React from 'react'
import { GameStateSingle } from './GameStateSingle'


function ResetSingle({gameState, onReset}) {
    if(gameState == GameStateSingle.InProgress){
        return;
    }
  return (
    <button onClick={onReset} className='reset-button'>
      Restart Game
    </button>
  )
}

export default ResetSingle
