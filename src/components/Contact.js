import React from 'react'
import { Form } from 'semantic-ui-react'

class Contact extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    contactreason: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/contactform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((response) => {
      return response.json();
    })
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <Form.Input type='text' placeholder='First Name' name='firstname' onChange={this.handleChange} value={this.state.firstname}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Form.Input type='text' placeholder='Last Name' name='lastname' onChange={this.handleChange} value={this.state.lastname}/>
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <Form.Input type='text' placeholder='Email Address' name='email' onChange={this.handleChange} value={this.state.email}/>
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <Form.Input type='text' placeholder='Phone Number' name='phonenumber' onChange={this.handleChange} value={this.state.phonenumber}/>
        </Form.Field>
        <Form.TextArea label='Contact' placeholder='Reason of Contact' name='contactreason' onChange={this.handleChange} value={this.state.contactreason}/>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
export default Contact;