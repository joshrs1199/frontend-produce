import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

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
        this.props.history.push('/')
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange}/>
        <Form.Input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleChange}/>
        <Button type='submit'>Login</Button>
        <p>Don't have an account? <Link to='/signup' className='sign-up'>Sign Up</Link></p>
      </Form>
    )
  }

}
export default LoginForm;