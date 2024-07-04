import React from 'react'
import './Header.css'
import { useState, useEffect } from 'react';
import Cards from './Cards';
import StyleCompo from './StyleCompo';
import {data_list} from './App'


function Header() {

  const [showHead,setShowHead] = useState("");

  const [click,setClick] = useState(false);

  const [cart, setCart] = useState(0);
  const addtocart = () => {
    setCart(cart + 1);
  };
  const removefromcart = () => {
    setCart(cart - 1);
  };

  const handleClick = () => {
    setClick(!click);
  }

  const showButton = () => {
    if (window.innerWidth >= 780) {
      setShowHead(false);
    } else {
      setShowHead(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <div className='Navbar-Container'>
      <div className='Navbar-logo'>
        REACT JS | <i className="fa fa-desktop" aria-hidden="true"></i>
      </div>
      { showHead ? <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
      </div> :
      <div className='Navbar-flex'>
           <div className='Navbar-pages'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li className="nav-item dropdown">
                        <select defaultValue="#">
                            <option value="#">Shop</option>
                            <option value="all">All Products</option>
                            <hr/>
                            <option value="pop_item">Popular Items</option>
                            <option value="new item">New Arrivals</option>
                          </select>
                    </li>
                </ul>
            </div>
            <div className='Navbar-Cart-Button'>
                <button className='Navbar-Button'>Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i><p className='value-button-cart'>{cart}</p></button>
            </div>
        </div> }
    </div>
    {click && showHead ? <div className='Navbar-dropdown'>
           <div className='Navbar-dropdown-pages'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li className="nav-item dropdown">
                        <select defaultValue="#">
                            <option value="#">Shop</option>
                            <option value="all">All Products</option>
                            <hr/>
                            <option value="pop_item">Popular Items</option>
                            <option value="new item">New Arrivals</option>
                          </select>
                    </li>
                </ul>
            </div>
            <div className='Navbar-dropdown-Cart-Button'>
                <button className='Navbar-Button'>Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i><p className='value-button-cart'>{cart}</p></button>
            </div>
        </div> :""}
    <StyleCompo/>
    <div className='Card-Container'>
    {data_list.map((ele,index)=>
    <Cards key={index} addtocart={addtocart} removefromcart = {removefromcart} data={ele} pic={"https://cdn.pixabay.com/photo/2015/10/31/12/41/sale-1015710_1280.jpg"}/>
    )}
    </div>
    </>
  )
}

export default Header
