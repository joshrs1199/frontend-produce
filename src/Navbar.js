import React from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Navbar = (props) => {
  return (
    <Menu>
      <Menu.Item href='/marketplace'>MarketPlace</Menu.Item>
      <Menu.Item href='/contact'>Contact</Menu.Item>
      {props.currentUser ? <Menu.Item onClick={props.logOut}>Logout</Menu.Item> : <Menu.Item href='/login'>Login / Signup</Menu.Item>}
      {props.currentUser ? <Menu.Item href='/shoppingcart'>ShoppingCart</Menu.Item> : null}
      {props.currentUser ? <Menu.Item href='/profile'>Profile</Menu.Item> : null}
    </Menu>
  )
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Navbar);