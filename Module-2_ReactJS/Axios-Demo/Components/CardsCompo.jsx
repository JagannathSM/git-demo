import React from 'react'
import './CardsCompo.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';

function CardsCompo() {
  return (
    <>
    <main className='main-container'>
        <div className='main-title'>
            <h3>Dashboard</h3>
        </div>

        <div className='main-cards'>
            <div className="card">
                <div className='cards-inner'>
                    <h3>Products</h3>
                    <AcUnitIcon className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className="card">
                <div className='cards-inner'>
                    <h3>Services</h3>
                    <AcUnitIcon className='card_icon'/>
                </div>
                <h1>310</h1>
            </div>
            <div className="card">
                <div className='cards-inner'>
                    <h3>About</h3>
                    <AcUnitIcon className='card_icon'/>
                </div>
                <h1>90</h1>
            </div>
            <div className="card">
                <div className='cards-inner'>
                    <h3>Secret</h3>
                    <AcUnitIcon className='card_icon'/>
                </div>
                <h1>30</h1>
            </div>
        </div>
    </main>
    </>
  )
}

export default CardsCompo
