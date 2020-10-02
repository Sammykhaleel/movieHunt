import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
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
            10 out of {movie.IMDbRating}
          </Card.Text>
          <Card.Text className='movieCard-description'>
            {movie.Description.slice(0, 100)}...
          </Card.Text>
          <Link to={`/movies/${movie.Title}`}>
            <Button className='movieCard-button' variant='dark'>
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
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
