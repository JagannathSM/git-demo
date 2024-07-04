import React from 'react'
import DashBoardCards from './DashBoardCards'

function DashBoard() {
  
  const dashBoardData = [
    {
      name:"My Book List",
      myImage : "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1719532800&semt=sph",
      path : "Booklist"
    },
    {
      name:"My Author List",
      myImage : "https://clipart-library.com/2023/5-58587_copyright-law-author-png.png",
      path : "Authorlist"
    },
    {
      name:"Info",
      myImage : "https://png.pngtree.com/png-clipart/20190614/original/pngtree-info-vector-icon-png-image_3791375.jpg",
      path : "Dashboard/info"
    }
  ]

  return (
    <>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {dashBoardData.map((ele, index)=>(
        <DashBoardCards key={index} ele={ele}/>
      ))}
    </div>
    </>
  )
}

export default DashBoard
