import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <Link to='/marketplace'>
        <button className='nav-button'>MarketPlace</button>
      </Link>
      <Link to='/contact'>
        <button className='nav-button'>Contact</button>
      </Link>
      <Link to='/login'>
        <button className='nav-button'>Login / Signup</button>
      </Link>
        <button className='nav-button' onClick={props.logOut}>Logout</button>
      <Link to='/shoppingcart'>
        <button className='nav-button'>ShoppingCart</button>
      </Link>
    </div>
  )
}
export default Navbar;