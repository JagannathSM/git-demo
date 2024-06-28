import React from 'react'
import { GameStateDouble } from './GameStateDouble'


function GameOverDouble({gameState}) {
    switch (gameState) {
        case GameStateDouble.InProgress:
            return <></>
        case GameStateDouble.PlayerO_Wins:
            return <div className='game-over'>O - Wins</div>
        case GameStateDouble.PlayerX_Wins:
            return <div className='game-over'>X - Wins</div>
        case GameStateDouble.Draw:
            return <div className='game-over'>Draw</div>
        default:
            return <></>
    }
}

export default GameOverDouble
