import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class Movies extends Component {
  render() {
    return (
      this.props.weatherInfo.map((movie) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.poster_path} />
            <Card.Body>
              <Card.Title>{movie.original_title}</Card.Title>
              <Card.Text>
                {movie.overview}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{movie.genres}</ListGroupItem>
              <ListGroupItem>{movie.release_date}</ListGroupItem>
              <ListGroupItem>{movie.popularity}</ListGroupItem>
              <ListGroupItem>{movie.spoken_languages}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">{movie.homepage}</Card.Link>
            </Card.Body>
          </Card>);

      })
    );
  }
}

export default Movies;

