import React from 'react'
import TileDouble from './TileDouble'
import StrikeDouble from './StrikeDouble'

function BoardDouble({tiles, onTilesCilck, playerTurn, strikeClass}) {
  return (
    <div className='board'>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(0)} value={tiles[0]} className="right-border bottom-border"/>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(1)} value={tiles[1]} className="right-border bottom-border"/>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(2)} value={tiles[2]} className="bottom-border"/>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(3)} value={tiles[3]} className="right-border bottom-border"/>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(4)} value={tiles[4]} className="right-border bottom-border"/>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(5)} value={tiles[5]} className="bottom-border"/>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(6)} value={tiles[6]} className="right-border"/>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(7)} value={tiles[7]} className="right-border"/>
      <TileDouble playerTurn={playerTurn} onClick={()=>onTilesCilck(8)} value={tiles[8]} />
      <StrikeDouble strikeClass={strikeClass}/>
    </div>
  )
}

export default BoardDouble
