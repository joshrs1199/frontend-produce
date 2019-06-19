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
      {props.cartClick ? 
      props.history.push('/shoppingcart/checkout') 
      : 
      <div>
        <Message.Header>Cart Total: {CartPrice.length > 0 ? CartPrice.reduce(reducer) : null}$</Message.Header>
        <br/>
        <Button onClick={props.changeClick}>Checkout</Button>
        {songItem}
      </div>
      }
    </Message>
  )
}

function mapStateToProps(state){
  return {
    shoppingCart: state.shoppingCart,
    cartClick: state.cartClick
  }
}

function mapDispatchToProps(dispatch){
  return {
    changeClick: (click) => {
      dispatch({type: 'CHANGE_CLICK', payload: click})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shoppingcart);