import React from 'react'
import './Cards.css'
import { useState } from 'react'

function Cards({addtocart,removefromcart,pic,data}) {

  const card_data = data.name;
  const card_sale = data.sale;
  const card_star = data.star;
  const card_price1 = data.price1;
  const card_price2 = data.price2;

  const [activeCart,setActiveCart] = useState(true)

  const added = () => {
    setActiveCart(!activeCart)
  }

const style_div_price = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center"
}

const add_on = {
  backgroundColor : "green",
  color:"black",
  fontSize : "18px",
  transaction : "0.3s"
}

const remove_off = {
  backgroundColor : "red",
  color:"black",
  fontSize : "18px",
  width: "70%",
  transaction : "0.3s"
}

  return (
    <div className='Cards'>
    <div className='Cards-Container'>
      <div className='Cards-Img-Container'>
        <div className='Cards-Img'>
          <img src={pic} alt='DUMMY IMAGE' height="200px" width="300px"/></div>
        {card_sale=="sale" ? <div className="top-right">Sale</div>:""}
      </div>
      <div className='Cards-Content'>
      <h2>{card_data}</h2>
        {card_star =="star" ?<p className='star'>
          <i className="fa fa-star fa-1.5x" aria-hidden="true"></i>
          <i className="fa fa-star fa-1.5x" aria-hidden="true"></i>
          <i className="fa fa-star fa-1.5x" aria-hidden="true"></i>
          <i className="fa fa-star fa-1.5x" aria-hidden="true"></i>
          <i className="fa fa-star fa-1.5x" aria-hidden="true"></i>
        </p>:""}
        {card_price2 == "" ?
        <div>
          <p>{card_price1}</p>
        </div> :
        <div style={style_div_price} className='style_price'>
          <p style={{textDecoration:"line-through",paddingRight:"5px"}}>{card_price1}</p>
          <p style={{alignItems:"center",paddingLeft:"5px"}}>{card_price2}</p>
        </div>}
      </div>
      <div className='Cards-Button'>
        { activeCart ? <button style={add_on} onClick={() => {
          added();
          addtocart();
            }}>Add to Cart</button> :
        <button style={remove_off} onClick={() => {
          added();
          removefromcart();
            }}>Remove From Cart</button>}
      </div>
    </div>
    </div>
  )
}

export default Cards
