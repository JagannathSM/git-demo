import React,{useEffect} from 'react'
import { useGlobal } from '../../GlobalContext/GlobalProvider'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import CorosalCompo from './CorosalCompo';

function Home() {
  const { getMainServices, mainData } = useGlobal();
  const navigate = useNavigate();

  useEffect(()=>{
    getMainServices();
  },[])

  return (
    <>
    <CorosalCompo/>
    <header className="hero-section">
        <div className="hero-content">
          <h1>Your Clean Home Starts Here</h1>
          <p>Professional cleaning services at your fingertips</p>
        </div>
    </header>

    <div className='Home_Header_Servies'>
      <h3>Our Services</h3>
    </div>

    <div className='Card_Container'>
      {mainData.map((ele,index)=>(
          <div key={index} className='Cards' onClick={()=>navigate(`/${ele._id}`)}>
            <div>
              <img src={ele.img} alt={ele.serviceName} className='Card_Img'/>
            </div>
            <div className='Card_Text'>
              <h3 className='Card_Heading'>{ele.serviceName}</h3>
              <p className='Card_desc'>{ele.description}</p>
            </div>
            <div className='Card_amount'>
              <h3 className='Card_heading'>Service Charges</h3>
              <p style={{fontWeight:800, color:"orangered"}}>{ele.minAmount} INR - {ele.maxAmount} INR</p>
            </div>
          </div>
      ))}
    </div>
    </>
  )
}

export default Home
