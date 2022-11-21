import React from 'react'

class Movie extends React.Component {
  render() {

    // let movieShow = this.props.movies.map(movieInfo => {
    return (
      <div className='movieShow'>
        <img src={this.props.movieInfo.url} alt={this.props.movieInfo.title} title={this.props.movieInfo.title} />
        <p>{this.props.movieInfo.title} {this.props.movieInfo.releaseDate}</p>
        <p>{this.props.movieInfo.overview}</p>
      </div>
    )
  // })
  ;
  }
}

export default Movie

