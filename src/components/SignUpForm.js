import React from 'react'

class SignUpForm extends React.Component {

  state = {
    username: '',
    password: '',
    passwordconfirmation: '',
    email: '',
    admin: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.passwordconfirmation) {
      fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: this.state})
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if (data.errors) {
        alert(data.errors)
      } else {
        this.props.setCurrentUser(data)
        // this.props.history.push(`/home`) or profile page
      }
    })
    } else {
      alert('Passwords do not match')
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange}/><br/>
          <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleChange}/><br/>
          <input type='password' placeholder='password confirmation' name='passwordconfirmation' value={this.state.passwordconfirmation} onChange={this.handleChange}/><br/>
          <input type='text' placeholder='email' name='email' value={this.state.email} onChange={this.handleChange}/><br/>
          <input type='submit'/>
      </form>
      </div>
    )
  }

}

export default SignUpForm;

