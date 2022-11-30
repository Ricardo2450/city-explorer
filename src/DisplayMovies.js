import React from 'react';
import Movie from './Movie.js';

class DisplayMovies extends React.Component {
  render() {
    return (
      <>
        {this.props.topFiveMovies.length < 1 ? <p></p> :
          <div className='topFiveMovies'>
            {this.props.topFiveMovies.map((movie, idx) => (
              <Movie movieInfo={movie} idx={idx} key={idx} />
            ))}
          </div>
        }
      </>
    )
  }
}

export default DisplayMovies
