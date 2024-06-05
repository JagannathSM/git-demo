import React from 'react'

function Navbar() {
  return (
    <div className='Navbar-Container'>
      <div className='Navbar-logo'>
        REACT JS
      </div>
      <div className='Navbar-flex'>
            <div className='Navbar-pages'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Shop
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">All Products</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Popular Items</a>
                            <a className="dropdown-item" href="#">New Arrivals</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='Navbar-Cart-Button'>
                <button className='Navbar-Button'>Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar

