import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'

const Shoppingcart = (props) => {
  console.log(props.shoppingCart)
  const songItem = props.shoppingCart.map((song) => {
    return <Item song={song} parent="cart"/>
  })
  return (
    <div>
      <h1>ShoppingCart</h1>
      {songItem}
    </div>
  )
}

function mapStateToProps(state){
  return {
    shoppingCart: state.shoppingCart
  }
}
export default connect(mapStateToProps)(Shoppingcart);