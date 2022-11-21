import React from 'react';
import Movie from './Movie.js';

class DisplayMovies extends React.Component {
  render() {
    return (
      <Movie
        movies={this.props.movies}
        // isMovieShown={this.props.isMoviesShown}
        />
    )
  }
}

export default DisplayMovies
