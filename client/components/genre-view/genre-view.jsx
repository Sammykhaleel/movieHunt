import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './genre-view.scss';
import { MovieCard } from '../movie-card/movie-card';
import PropTypes from 'prop-types';

export class GenreView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      genre: props.genre,
      genreMovies: [],
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const genreMovies = this.state.movies.filter((m) => {
      return m.Genre.Name === this.state.genre.Name;
    });
    this.setState({ genreMovies });
  }

  render() {
    const { genre, genreMovies } = this.state;
    return (
      <Container className='genreView'>
        <Button
          onClick={() => window.history.back()}
          variant='dark'
          className='backBtn'>
          <i className='fas fa-arrow-left'></i> Back
        </Button>
        <Row>
          <Col>
            <h1 className='genreView-genreName'>{genre.Name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='genreView-description'>
              Description: {genre.Description}
            </div>
          </Col>
        </Row>
        <div className='genreView-more'>{genre.Name} movies:</div>
        <Row>
          {genreMovies.map((m, index) => {
            return (
              <Col className='genreView-movieCard' xs='6' sm='4' key={index}>
                <MovieCard movie={m} key={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};
