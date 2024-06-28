import React from 'react'
import { GameStateDouble } from './GameStateDouble'


function ResetDouble({gameState, onReset}) {
    if(gameState == GameStateDouble.InProgress){
        return;
    }
  return (
    <button onClick={onReset} className='reset-button'>
      Restart Game
    </button>
  )
}

export default ResetDouble
