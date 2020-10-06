import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <Link to={`/movies/${movie.Title}`}>
        <Card>
          <Card.Img
            className='movieCard-img'
            variant='top'
            src={movie.ImageURL}
          />
          <Card.Body className='movieCard-cardBody'>
            <Card.Title className='movieCard-title'>{movie.Title}</Card.Title>
            <Card.Text className='detailInfo'>{movie.Genre.Name}</Card.Text>
            <Card.Text className='detailInfo'>{movie.RunTime}</Card.Text>
            <Card.Text className='detailInfo'>
              {movie.IMDbRating} out of 10
            </Card.Text>
            <Card.Text className='movieCard-description'>
              {movie.Description.slice(0, 100)}...
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string,
  }).isRequired,
};
