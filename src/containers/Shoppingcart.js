import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'
import { Button, Message } from 'semantic-ui-react'

const Shoppingcart = (props) => {

  const songItem = props.shoppingCart.map((song) => {
    return <Item song={song} parent="cart"/>
  })

  const CartPrice = props.shoppingCart.map((song) => {
    return song.price
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return (
    <Message>
      <Message.Header>Cart Total: {CartPrice.length > 0 ? CartPrice.reduce(reducer) : null}$</Message.Header>
      <br/>
      <Button className='checkout-button'>Checkout</Button>
      {songItem}
    </Message>
  )
}

function mapStateToProps(state){
  return {
    shoppingCart: state.shoppingCart
  }
}
export default connect(mapStateToProps)(Shoppingcart);