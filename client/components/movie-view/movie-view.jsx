import React from 'react';
import {
  Button,
  Container,
  Row,
  Tooltip,
  OverlayTrigger,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './movie-view.scss';

export class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: this.props.FavoriteMovies,
      addedMovie: '',
    };
  }

  /**
   * This method will add selected movie's ID to user's favorite list. <br/>
   * It checks if selected movie already exists on user's favorite list, then,
   * it sends <code>POST</code> request to server to update favorite list.
   * @param {Object} movie Selected movie data received from click event
   * @method
   * @async
   * @global
   */
  addToFavorite(movie) {
    try {
      if (
        this.state.favoriteMovies.includes(movie._id) ||
        this.state.addedMovie.includes(movie._id)
      ) {
        alert(movie.Title + ' already exist in your favorite list');
      } else {
        axios
          .post(
            `https://moviehunt-gc.herokuapp.com/users/${localStorage.getItem(
              'user'
            )}/favorite/add/${movie._id}`
          )
          .then(() => {
            alert(movie.Title + ' has been added to your favorite list');
            this.setState({ addedMovie: movie._id });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
      location.reload();
    }
  }

  render() {
    const { movie } = this.props;
    if (!movie) return null;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const directorTooltip = (props) => (
      <Tooltip id='button-tooltip' {...props}>
        Click to see director info
      </Tooltip>
    );
    const genreTooltip = (props) => (
      <Tooltip id='button-tooltip' {...props}>
        Click to see genre info
      </Tooltip>
    );
    return (
      <Container className='movieView'>
        <div className='backDropWrap'>
          <img src={movie.ImageURL} className='backDrop' />
        </div>
        <Row>
          <Col xs={{ span: 2, offset: 1 }}>
            <Link to={'/'}>
              <Button variant='dark' className='backBtn'>
                <i className='fas fa-arrow-left'></i> Back
              </Button>
            </Link>
          </Col>
          <Col xs={{ span: 2, offset: 7 }}>
            <Button
              variant='dark'
              className='favoriteBtn'
              onClick={() => this.addToFavorite(movie)}>
              Add to Favorite
            </Button>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs='auto' className='movieView-posterWrap'>
            <img
              src={movie.ImageURL}
              alt='Movie Poster'
              className='movieView-poster'
            />
          </Col>
        </Row>
        <div className='movieView-info'>
          <div className='movieView-title'>
            <span className='value'>{movie.Title}</span>
          </div>
          <Row className='movieView-details'>
            <OverlayTrigger
              placement='top'
              delay={{ show: 50, hide: 100 }}
              overlay={genreTooltip}>
              <Link
                className='btn-dark movieView-genreBtn'
                to={`/genres/${movie.Genre.Name}`}>
                <div className='movieView-genre'>
                  <span className='label'>Genre: </span>
                  <span className='value'>{movie.Genre.Name}</span>
                </div>
              </Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement='top'
              delay={{ show: 50, hide: 100 }}
              overlay={directorTooltip}>
              <Link
                to={`/directors/${movie.Director.Name}`}
                className='btn-dark movieView-directorBtn'>
                <div className='movieView-director'>
                  <span className='label'>Director: </span>
                  <span className='value'>{movie.Director.Name}</span>
                </div>
              </Link>
            </OverlayTrigger>

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
          <Row>
            <Col>
              <div className='movieView-description'>
                <span className='label'>Description:</span>
                <span className='value'>{movie.Description}</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.object,
};
