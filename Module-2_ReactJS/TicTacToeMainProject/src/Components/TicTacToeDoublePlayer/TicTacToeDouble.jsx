import React,{useState, useEffect} from 'react'
import BoardDouble from './BoardDouble'
import GameOverDouble from './GameOverDouble'
import { GameStateDouble } from './GameStateDouble'
import ResetDouble from './ResetDouble'

const Player_X = "X"
const Player_O = "O"

const winningCombo = [
  { combo : [0,1,2], strikeClass : "strike-row-1" },
  { combo : [3,4,5], strikeClass : "strike-row-2" },
  { combo : [6,7,8], strikeClass : "strike-row-3" },

  { combo : [0,3,6], strikeClass : "strike-column-1" },
  { combo : [1,4,7], strikeClass : "strike-column-2" },
  { combo : [2,5,8], strikeClass : "strike-column-3" },

  { combo : [0,4,8], strikeClass : "strike-diagonal-1" },
  { combo : [2,4,6], strikeClass : "strike-diagonal-2" }
]

const checkWinner = (tiles, setStrikeClass, setGameState) => {
  for(const {combo, strikeClass} of winningCombo){
    const tileValue1 = tiles[combo[0]]
    const tileValue2 = tiles[combo[1]]
    const tileValue3 = tiles[combo[2]]

    if(tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3){
      setStrikeClass(strikeClass)
      if(tileValue1 === Player_X){
        setGameState(GameStateDouble.PlayerX_Wins)
      } else {
        setGameState(GameStateDouble.PlayerO_Wins)
      }
      return;
    }
  }

  const allFilled = tiles.every((ele) => ele !== null);
  if(allFilled){
    setGameState(GameStateDouble.Draw)
  }
}


function TicTacToeDouble() {

  const [tiles,setTiles] = useState(Array(9).fill(null))
  const [playerTurn,setPlayerTurn] = useState(Player_X)
  const [strikeClass,setStrikeClass] = useState('');
  const [gameState, setGameState] = useState(GameStateDouble.InProgress)
 
  const handleOnReset = () => {
    setGameState(GameStateDouble.InProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(Player_X);
    setStrikeClass("");
  }

  useEffect(()=>{
    checkWinner(tiles, setStrikeClass, setGameState);
  },[tiles])

  const handleTilesClick = (index) => {
    if(gameState !== GameStateDouble.InProgress){
      return;
    }

    if(tiles[index] !== null){
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles)
    if(playerTurn === Player_X){
      setPlayerTurn(Player_O)
    } else {
      setPlayerTurn(Player_X)
    }
  }

  return (
    <div>
      <h1>TicTacToe Double Player</h1>
      <BoardDouble playerTurn={playerTurn} tiles={tiles} onTilesCilck={handleTilesClick} strikeClass={strikeClass}/>
      <GameOverDouble gameState={gameState}/>
      <ResetDouble gameState={gameState} onReset={handleOnReset}/>
    </div>
  )
}

export default TicTacToeDouble
