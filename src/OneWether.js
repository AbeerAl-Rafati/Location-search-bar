import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class OneWether extends Component {
  render() {
    return (

      <Card border="info" >
        <Card.Body>
          <Card.Text >In day :</Card.Text>
          <Card.Title> {this.props.date}</Card.Title>
          <Card.Text>The weather in the city :</Card.Text>
          <Card.Title>{this.props.status}</Card.Title>

        </Card.Body>
      </Card>


    );
  }
}

export default OneWether;
