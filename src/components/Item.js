import React from 'react'
import YouTube from 'react-youtube'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'

const Item = (props) => {

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  const cartClick = (song) => {
    const token = localStorage.getItem('token')
    if (props.parent === "market" && token){
      fetch('http://localhost:3000/shoppingcart', {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({song_id: song.id})
      }).then((response) => {
        return response.json();
      }).then((songData) => {
        props.addToCart(songData)
      })
    } else if (props.parent === "cart" && token){
      fetch('http://localhost:3000/shoppingcart', {
        method: 'DELETE',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({song_id: song.id})
      }).then((response) => {
        return response.json();
      }).then((songData) => {
        props.removeFromCart(songData)
      })
    } else {
      alert('please log in')
    }
  }

  return(
    <div className='item-card'>
      <Card>
        <YouTube videoId={props.song.videoid} opts={opts}/>
        <Card.Content>
          <Card.Header>{props.song.name}</Card.Header>
          <Card.Meta>{props.song.category}</Card.Meta>
          {props.song.price}$
        </Card.Content>
        <Button onClick={() => cartClick(props.song)}>{props.parent === 'cart' ? 'Remove from Cart' : 'Add to Cart'}</Button>
      </Card>
    </div>
  )
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    shoppingCart: state.shoppingCart
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart: (song) => {
      dispatch({type: 'ADD_TO_CART', payload: song})
    }, 
    removeFromCart: (song) => {
      dispatch({type: 'REMOVE_FROM_CART', payload: song})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);