import React from 'react';
import {
  Button,
  Container,
  Row,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './movie-view.scss';

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { movie } = this.props;
    if (!movie) return null;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const directorInfo = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Popover right</Popover.Title>
        <Popover.Content>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Content>
      </Popover>
    );

    const director = () => (
      <OverlayTrigger trigger='click' placement='right' overlay={popover}>
        <Button variant='success'>Click me to see</Button>
      </OverlayTrigger>
    );
    return (
      <Container className='movieView'>
        <Link to={'/'}>
          <Button variant='dark' className='backBtn'>
            <i className='fas fa-arrow-left'></i> Back
          </Button>
        </Link>
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
            <Link
              className='btn-dark movieView-genreBtn'
              to={`/genres/${movie.Genre.Name}`}>
              <div className='movieView-genre'>
                <span className='label'>Genre: </span>
                <span className='value'>{movie.Genre.Name}</span>
              </div>
            </Link>
            <Link
              to={`/directors/${movie.Director.Name}`}
              className='btn-dark movieView-directorBtn'>
              <div className='movieView-director'>
                <span className='label'>Director: </span>
                <span className='value'>{movie.Director.Name}</span>
              </div>
            </Link>
            <div className='movieView-release'>
              <span className='label'>Released Date: </span>
              <span className='value'>{movie.ReleaseDate}</span>
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
