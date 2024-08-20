import './App.css'
import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Routing from './Components/Routing/Routing';
import GlobalProvider from './GlobalContext/GlobalProvider';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <GlobalProvider>
          <Sidebar>
            <Routing />
          </Sidebar>
        </GlobalProvider>
        <ToastContainer/>
    </>
  )
}

export default App
