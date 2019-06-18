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
    <div>
      <h3>{props.song.name}</h3>
      <YouTube videoId={props.song.videoid} opts={opts}/>
      <p>Category: {props.song.category}</p>
      <p>Price: {props.song.price} $</p>
      <button onClick={() => cartClick(props.song)}>Add to Cart</button>
    </div>
  )
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
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