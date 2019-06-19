import React from 'react'
import { connect } from 'react-redux'
import { Message, Button, Container } from 'semantic-ui-react'

const Checkout = (props) => {

  const checkoutClick = () => {
    console.log('click')
  }

  return (
    <Container>
      <Message>
        <Message.Header>Address</Message.Header>
        <p>address</p>
        <Message.Header>Card info</Message.Header>
        <p>card info</p>
      </Message>
      <Button fluid onClick={checkoutClick}>Confirm Checkout</Button>
    </Container>
  )
}
//onclick clear shopping cart array in state, pushhistory to home ___ maybe if cart is empty direct them to marketplace
function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Checkout);