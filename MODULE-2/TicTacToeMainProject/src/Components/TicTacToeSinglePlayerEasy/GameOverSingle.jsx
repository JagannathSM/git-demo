import React from 'react'
import { GameStateSingle } from './GameStateSingle'


function GameOverSingle({gameState}) {
    switch (gameState) {
        case GameStateSingle.InProgress:
            return <></>
        case GameStateSingle.PlayerO_Wins:
            return <div className='game-over'>O - Wins</div>
        case GameStateSingle.PlayerX_Wins:
            return <div className='game-over'>X - Wins</div>
        case GameStateSingle.Draw:
            return <div className='game-over'>Draw</div>
        default:
            return <></>
    }
}

export default GameOverSingle
