import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './movie-view.scss';

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { movie, onClick } = this.props;

    if (!movie) return null;

    return (
      <Container className='movieView'>
        <Button onClick={() => onClick()} variant='dark' className='backBtn'>
          <i className='fas fa-arrow-left'></i> Back
        </Button>
        <div className='movieView-img'>
          <img
            width='500px'
            src={movie.ImageURL}
            alt='Movie Poster'
            className='movieView-poster'
          />
        </div>
        <div className='movieView-info'>
          <div className='movieView-title'>
            <span className='value'>{movie.Title}</span>
          </div>
          <Row className='movieView-details'>
            <div className='movieView-genre'>
              <span className='label'>Genre: </span>
              <span className='value'>{movie.Genre.Name}</span>
            </div>
            <div className='movieView-release'>
              <span className='label'>Released Date: </span>
              <span className='value'>{movie.ReleaseDate}</span>
            </div>
            <div className='movieView-director'>
              <span className='label'>Director: </span>
              <span className='value'>{movie.Director.Name}</span>
            </div>
            <div className='movieView-runtime'>
              <span className='label'>Run Time: </span>
              <span className='value'>{movie.RunTime}</span>
            </div>
            <div className='movieView-rating'>
              <span className='label'>IMDb Rating: </span>
              <span className='value'>{movie.Genre.Name}</span>
            </div>
          </Row>
          <div className='movieView-description'>
            <div className='label'>Description:</div>
            <div className='value'>{movie.Description}</div>
          </div>
        </div>
      </Container>
    );
  }
}
