import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';



export class OneMovie extends Component {
  render() {
    return (
      <Card border="warning" style={{ width: '16rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.moviePath}`} />
        <Card.Body>
          <Card.Title>{this.props.movieTitle}</Card.Title>
          <Card.Text>
            {this.props.movieOverview}
          </Card.Text>

          <Card.Text>Release Date:{this.props.movieDate}</Card.Text>
          <Card.Text>Rank:{this.props.movieRanke}</Card.Text>
          <Card.Text>Vote:{this.props.movievote}</Card.Text>
        </Card.Body>

      </Card>);
  }
}

export default OneMovie;
