import React from 'react'
import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react';

const SinglePlayerEasyMode = () =>  {
    const data = [null,null,null,null,null,null,null,null,null];
    const [board , setBoard] = useState(data);
  
    const [isXTurn,setIsXTurn] = useState(true);
  
    const decideWinner = (board) =>{
      const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  
      for (let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if (board[a] !== null && board[a] === board[b] && board[b] === board[c]){
          return board[a];
        }
      }
      return null;
    }

    useEffect(()=>{
        setComputerTurn();
    },[isXTurn])

    const setComputerTurn = () => {

      const putComputerValue = (index) =>{
        let newBoard = board;
        newBoard[index] = "O";
        setBoard([...newBoard])
        setIsXTurn(!isXTurn)
      }

        if (winner === null && isXTurn === false) {
            const emptyIndex = board.
              map((ele,index)=> ele === null ? index : null).
              filter(val => val !== null)

            const randomIndex = emptyIndex[Math.floor(Math.random()*emptyIndex.length)];
            console.log(randomIndex)
            putComputerValue(randomIndex);
            }
        }
  
    const winner = decideWinner(board)
  
  
    const handleClick = (index) => {
      if (winner === null && !board[index]) {
          board[index] = isXTurn ? "X" : "O"
          setBoard(board)
          setIsXTurn(!isXTurn)
      }
  }
  
  
    return (
      <>
        <div className="full-game">
          <h1>TicTacToe SINGLE PLAYER EASY MODE</h1>
          {winner && <h1>Winner:{winner}</h1>}
          <div className="board">
            {board.map((val, index) => (
                <GameBox key={index} val={val} onPlayerClick={() => handleClick(index)} />
              ))}
          </div>
        </div>
      </>
    )
  }

  function GameBox({ val, onPlayerClick }) {
    const styles = {
        color: val === "X" ? "green" : "red"
    }
    return (
        <div className="game-box" style={styles} onClick={onPlayerClick}>{val}</div>
    )
}

export default SinglePlayerEasyMode
