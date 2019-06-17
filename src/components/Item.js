import React from 'react'
import YouTube from 'react-youtube'
import { connect } from 'react-redux'

const Item = (props) => {
  const opts = {
    height: '150',
    width: '150',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  const cartClick = (song) => {
    if (props.parent === "market"){
      props.addToCart(song)
    } else {
      props.removeFromCart(song)
    }
  }

  return(
    <div>
      <h3>{props.song.name}</h3>
      <YouTube videoId={props.song.videoid} opts={opts}/>
      <p>Category: {props.song.category}</p>
      <p>Price: {props.song.price} $</p>
      <button onClick={() => cartClick(props.song)}>Add to Cart</button>
    </div>
  )
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

export default connect(null, mapDispatchToProps)(Item);