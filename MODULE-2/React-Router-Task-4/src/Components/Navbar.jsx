import React, {useState} from 'react'
import './Navbar.css'
import { Routes, Route, Link  } from 'react-router-dom'
import Home from './Home'
import FullSatckDevelopment from './FullSatckDevelopment'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'

export const data_courses_task = [
  {
    course:"FSD",
    poster: "https://blog.hrflow.ai/content/images/2020/04/Full-Stack-Developer.jpg",
    text:"Top 30 Mini Project Ideas For College Students [UPDATED]",
    author:"By Srinithi Sankar",
    date:"07-May-2323",
    duration:"8"
  },
  {
    course:"FSD",
    poster:"https://i.pinimg.com/736x/db/0c/98/db0c98ac22847c009128033d577e1557.jpg",
    text:"Best Web Development Roadmap for Beginners 2024",
    author:"By Isha Sharma",
    date: "16 Apr, 2024",
    duration:"6"
  },
  {
    course:"FSD",
    poster:"https://i.pinimg.com/originals/47/6a/5d/476a5dd312c8147e2405e5c030d84a6a.jpg",
    text:"Is coding required for cybersecurity? If yes, how crucial is coding for cyb...",
    author:"By Tushar Vinocha",
    date: "25 Mar, 2024",
    duration:"4"
  },
  {
    course:"CYSE",
    poster:"https://thumbs.dreamstime.com/b/cyber-security-concept-poster-anti-virus-network-hacking-attempt-hacker-information-privacy-idea-yber-data-vector-153592227.jpg",
    text:"What Is Hacking? Types of Hacking & More",
    author:"By Meghana D",
    date: "25 Mar, 2024",
    duration:"6"
  },
  {
    course:"CYSE",
    poster:"https://th.bing.com/th/id/OIP.3-v1gqI5xvkmV8mlj2rRjQHaHH?w=520&h=500&rs=1&pid=ImgDetMain",
    text:"How Is Cyber Security Important To Our Lives?",
    author:"By GUVI Geek",
    date: "29 Apr, 2024",
    duration:"2"
  },
  {
    course:"CYSE",
    poster:"https://image.freepik.com/free-vector/cyber-security-concept_23-2148539596.jpg",
    text:"What is Cybersecurity? Importance and its uses & the growing challenge...",
    author:"By Tushar Vinocha",
    date: "04 Oct, 2023",
    duration:"4"
  },
  {
    course:"DS",
    poster:"https://image.shutterstock.com/image-vector/data-science-banner-concept-has-260nw-2169958881.jpg",
    text:"Roles and Responsibilities of a Data Scientist",
    author:"By Jaishree Tomar",
    date: "16 Apr, 2024",
    duration:"6"
  },
  {
    course:"DS",
    poster:"https://www.thehighereducationreview.com/newsimagespl/Yh0D9CGi.jpeg",
    text:"How to become a Data Scientist after Mechanical Engineering?",
    author:"By Lahari Chandana",
    date: "16 Apr, 2024",
    duration:"3"
  },
  {
    course:"DS",
    poster:"https://www.programmingcodex.com/wp-content/uploads/2020/02/image-8-1.png",
    text:"Top Product-Based Companies for Data Scientists in 2024",
    author:"By Jaishree Tomar",
    date: "26 Mar, 2024",
    duration:"4"
  },
  {
    course:"FSD",
    poster:"https://d1aeya7jd2fyco.cloudfront.net/thumbnail/online-job-linked-full-stack-web-development.webp",
    text:"Full Stack Developer Roadmap: A Complete Guide [2024]",
    author:"By Meghana D",
    date: "19 Mar, 2024",
    duration:"6"
  },
  {
    course:"DS",
    poster:"https://th.bing.com/th/id/OIP.cCyLAIymD6-BRtSYnxdtAQAAAA?rs=1&pid=ImgDetMain",
    text:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    author:"By Isha Sharma",
    date: "16 Apr, 2024",
    duration:"6"
  },
  {
    course:"CYSE",
    poster:"https://cdn2.vectorstock.com/i/1000x1000/77/11/poster-of-online-cyber-security-vector-21297711.jpg",
    text:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    author:"By Tushar Vinocha",
    date: "16 Apr, 2024",
    duration:"5"
  }
]


function Navbar() {
  return (
    <>
    <div className='Nav-bar'>
    <nav>
        <ul className='List-Nav'>
          <li><Link to="/">ALL</Link></li>
          <li><Link to="/fullstackdevelopment">FULL STACK DEVELOPMENT</Link></li>
          <li><Link to="/datascrience">DATA SCIENCE</Link></li>
          <li><Link to="/cybersecurity">CYBER SECURITY</Link></li>
          <li><Link to="/career">CAREER</Link></li>
        </ul>
    </nav>
    </div>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/fullstackdevelopment" element={<FullSatckDevelopment />} />
        <Route path="/datascrience" element={<DataScience/>} />
        <Route path="/cybersecurity" element={<CyberSecurity/>} />
        <Route path="/career" element={<Career/>} />
    </Routes>
    </>
  )
}

export default Navbar
