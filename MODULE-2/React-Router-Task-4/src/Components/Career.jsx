import React from 'react'
import {Link} from 'react-router-dom'
import './Career.css'

 const career_data = [
  {
    link:"/fullstackdevelopment",
    poster:"https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg",
    name:"Full Stack Development"
  },
  {
    link:"/datascrience",
    poster:"https://static.toiimg.com/photo/98969861/98969861.jpg",
    name:"Data Science"
  },
  {
    link:"/cybersecurity",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgLSbmgYxJMTJcUwssl1hmgjJjLsURQsWjg&s",
    name:"Cyber Security"
  }
 ]

function Career() {
  return (
    <div className='page-container'>
      <h3>THIS IS CAREER PAGE </h3>
    <div className='Career-Container'>
      <div className='Career-Details'>
        <div className='Career-Cards'>
          {career_data.map((ele)=>
          (
            <Link style={{ textDecoration: 'none' }} to={ele.link}>
              <div className='Career-Card-Detail'>
                <img className="Career-Card-Detail-Img" src={ele.poster} alt={ele.name} width="100%" height="140px"/>
                <div className='Career-Card-Detail-Para'>
                  <h4>{ele.name}</h4>
                </div>
              </div>
          </Link>
          )
          )}
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Career
