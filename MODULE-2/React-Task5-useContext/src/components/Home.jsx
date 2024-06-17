import React from 'react'
import { useContext, useState } from 'react'
import {DataContext} from '../App'
import Cards from './Cards'
import './Home.css'

function Home() {
  const data = useContext(DataContext)

  const [mainData,setMainData] = data
  return (

    <div className='Card-Container'>
      {mainData.map((ele,id)=>(
        <Cards key={id} data={ele}/>
      )
      )}
    </div>
  )
}

export default Home
