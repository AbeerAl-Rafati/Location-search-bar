import React, { Component } from 'react';
import OneMovie from './OneMovie';
export class Movies extends Component {
  render() {
    return (
      this.props.moviesData.map((movie) => {
        return (
          <OneMovie
            moviePath={movie.poster_path}
            movieOverview={movie.overview}
            movieTitle={movie.original_title}
            movieDate={movie.release_date}
            movieRanke={movie.popularity}
            movievote={movie.vote_count} />
        );

      })
    );
  }
}

export default Movies;

