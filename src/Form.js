import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';


export class FormA extends Component {
  render() {
    return (

      <Form onSubmit={this.props.location} >
        <Form.Group>
          <Form.Control onChange={this.props.update} type="text" size="lg" placeholder='city name ...' style={{ width: '20rem', height: '3rem' }} />
          <br />
          <br />
          <input type="submit" size="lg" value='Get City' className="btn btn-danger" style={{ width: '10rem', height: '3rem' }} />
        </Form.Group>
      </Form >

    )
  }
}

export default FormA;

