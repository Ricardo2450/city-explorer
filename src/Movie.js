import React from 'react'

class Movie extends React.Component {
  render() {

    let movieShow = this.props.movies.map(movieInfo => {
    return (
      <div className='movieShow'>
        <img src={movieInfo.url} alt={movieInfo.title} title={movieInfo.title} />
        <p>{movieInfo.title} {movieInfo.releaseDate}</p>
        <p>{movieInfo.overview}</p>
      </div>
    )
  });

   return (
    <>
    {movieShow}
    </>
   )
  }
}

export default Movie
