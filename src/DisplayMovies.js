import React from 'react';
import Movie from './Movie.js';

class DisplayMovies extends React.Component {
  render() {
    return (
      <>
      {this.props.topTenMovies.length < 1 ? <p></p> :
          <div className='topFiveMovies'>
            {this.props.topFiveMovies.map((movie, idx) => (
              <Movie movieInfo={movie} idx={idx} key={idx} />
            ))}
          </div>
        }</>
      // <Movie
      //   movies={this.props.movies}
      //   />
    )
  }
}

export default DisplayMovies
