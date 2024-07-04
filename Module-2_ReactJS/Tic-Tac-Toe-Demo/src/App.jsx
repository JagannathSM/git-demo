import { useState } from 'react'
import './App.css'
import Tic_Tac_Toe_DoublePlayer from './Tic_Tac_Toe_DoublePlayer'
import SinglePlayerEasyMode from './Components/SinglePlayerEasyMode'

function App() {

  return (
    <>
      <Tic_Tac_Toe_DoublePlayer/>
      <SinglePlayerEasyMode/>
    </>
  )

}

export default App
