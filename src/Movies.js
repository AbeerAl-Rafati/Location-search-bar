import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
export class Movies extends Component {
  render() {
    return (
      this.props.moviesData.map((movie) => {
        return (
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.original_title}</Card.Title>
              <Card.Text>
                {movie.overview}
              </Card.Text>

              <Card.Text>Release Date: {movie.release_date}</Card.Text>
              <Card.Text>Popularity: {movie.popularity}</Card.Text>
              <Card.Text>Rank: {movie.vote_count}</Card.Text>
            </Card.Body>
          </Card>);

      })
    );
  }
}

export default Movies;

