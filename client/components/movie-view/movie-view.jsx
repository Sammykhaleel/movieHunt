import React from 'react';

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { movie, onClick } = this.props;

    if (!movie) return null;

    return (
      <div className='movie-view'>
        <img
          width='500px'
          src={movie.ImageURL}
          alt='Movie Poster'
          className='movie-poster'
        />
        <div className='movie-title'>
          <span className='label'>Title: </span>
          <span className='value'>{movie.Title}</span>
        </div>
        <div className='movie-description'>
          <span className='label'>Description: </span>
          <span className='value'>{movie.Description}</span>
        </div>
        <div className='movie-genre'>
          <span className='label'>Genre:</span>
          <span className='value'>{movie.Genre.Name}</span>
        </div>
        <div className='movie-director'>
          <span className='label'>Director:</span>
          <span className='value'>{movie.Director.Name}</span>
        </div>
        <button onClick={() => onClick()} className='backBtn'>
          Back
        </button>
      </div>
    );
  }
}