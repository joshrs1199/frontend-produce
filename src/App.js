import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Navbar from './Navbar'
import Home from './containers/Home'
import Marketplace from './containers/Marketplace'
import Contact from './components/Contact'
import Header from './components/Header'
import Shoppingcart from './containers/Shoppingcart'
import Profile from './components/Profile'
import Checkout from './components/Checkout'

class App extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/auto_login', {
        headers: {
          'Authorization': token
        }
      })
      .then((response) => {
        return response.json();
      }).then((userData) => {
        if (userData.errors) {
          alert(userData.errors)
        } else {
          this.props.setUser(userData.user)
          this.props.setShoppingCart(userData.items)
          // this.setState({
          //   currentUser: userData
          // }, () => {
          //   //this.props.history.push('/home') idk
          // })
        }
      })
    }
    fetch('http://localhost:3000/songs')
    .then((response) => {
      return response.json();
    }).then((songs) => {
      this.props.fetchSongs(songs)
      // this.setState({
      //   songList: songs
      // })
    })
  }

  setCurrentUser = (data) => {
    localStorage.setItem('token', data.token)
    this.props.setUser(data.user)
    this.props.setShoppingCart(data.items)
    // this.setState({
    //   currentUser: data.user
    // })
  }

  logOut = () => {
    localStorage.removeItem('token')
    //might notwork come and fix this hoe
    this.props.setUser(null)
    // this.setState({
    //   currentUser: null
    // }, () => {
    //   // this.props.history.push('/home or /login idk')
    // })
  }

  render() {
    return (
      <div>
        <Header/>
        <Navbar logOut={this.logOut}/>
        <Switch>
          <Route path='/shoppingcart/checkout' render={(routerProps) => <Checkout {...routerProps}/>}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/shoppingcart' render={(routerProps) => <Shoppingcart {...routerProps}/>}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/marketplace' component={Marketplace}/>
          <Route path='/signup' render={(routerProps) => <SignUpForm setCurrentUser={this.setCurrentUser} {...routerProps}/>} />
          <Route path='/login' render={(routerProps) => <LoginForm setCurrentUser={this.setCurrentUser} {...routerProps}/>} />
          <Route exact path='/' component={Home}/>
          <Route render={() => <Redirect to='/'/>}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchSongs: (songs) => {
      dispatch({type: 'FETCH_SONGS', payload: songs})
    },
    setUser: (user) => {
      dispatch({type: 'SET_USER', payload: user})
    },
    setShoppingCart: (items) => {
      dispatch({type: 'SET_SHOPPINGCART', payload: items})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
