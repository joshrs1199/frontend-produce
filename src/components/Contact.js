import React from 'react'
import { Form } from 'semantic-ui-react'

class Contact extends React.Component {
  render() {
    return(
      <Form>
        <Form.Field>
          <label>First Name</label>
          <Form.Input type='text' placeholder='First Name'/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Form.Input type='text' placeholder='Last Name'/>
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <Form.Input type='text' placeholder='Email Address'/>
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <Form.Input type='text' placeholder='Phone Number'/>
        </Form.Field>
        <Form.TextArea label='Contact' placeholder='Reason of Contact'/>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
export default Contact;