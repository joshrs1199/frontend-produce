import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

const defaultState = {
  currentUser: null,
  songList: [],
  shoppingCart: [],
  cartClick: false,
}

function reducer(state = defaultState, action){
  switch(action.type){
    case 'FETCH_SONGS':
      return {...state, songList: action.payload}
    case 'SET_USER':
      return {...state, currentUser: action.payload}
    case 'ADD_TO_CART':
      return {...state, shoppingCart: [...state.shoppingCart, action.payload]}
    case 'REMOVE_FROM_CART':
    let updatedCart = state.shoppingCart.filter(item => item.id !== action.payload.id) 
      return {...state, shoppingCart: updatedCart}
    case 'SET_SHOPPINGCART':
      return {...state, shoppingCart: action.payload}
    case 'CHANGE_CLICK':
      return {...state, cartClick: !state.cartClick}
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
