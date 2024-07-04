import React from 'react'


function TileSingle({className, value, onClick, playerTurn}) {

    let hover = null;
    if(value == null && playerTurn != null){
        hover = `${playerTurn.toLowerCase()}-hover`
    }

   
  return (
    <div className={`tile ${className} ${hover}`} onClick={onClick}>
      {value}
    </div>
  )
}

export default TileSingle
