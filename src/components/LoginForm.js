import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if (data.errors) {
        alert(data.errors)
      } else {
        this.props.setCurrentUser(data)
        // this.props.history.push('/')
      }
    })
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange}/><br/>
          <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleChange}/><br/>
          <input type='submit'/>
        </form>
        <p>Don't have an account? <Link to='/signup' className='sign-up'>Sign Up</Link></p>
      </div>
    )
  }

}
export default LoginForm;