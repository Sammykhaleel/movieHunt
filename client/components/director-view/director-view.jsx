import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './director-view.scss';
import { MovieCard } from '../movie-card/movie-card';
import PropTypes from 'prop-types';

export class DirectorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      director: props.director,
      directorMovies: [],
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const directorMovies = this.state.movies.filter((m) => {
      return m.Director.Name === this.state.director.Name;
    });
    this.setState({ directorMovies });
  }

  render() {
    const { director, directorMovies } = this.state;
    return (
      <Container className='directorView'>
        <Button
          onClick={() => window.history.back()}
          variant='dark'
          className='backBtn'>
          <i className='fas fa-arrow-left'></i> Back
        </Button>
        <Row>
          <Col>
            <h1 className='directorView-dirName'>{director.Name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='directorView-dirBirth'>Birth: {director.Birth}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='directorView-dirDeath'>
              Death: {director.Death ? director.Death : 'N/A'}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='directorView-dirBio'>{director.Bio}</div>
          </Col>
        </Row>
        <div className='directorView-more'>{director.Name}'s movies:</div>
        <Row>
          {directorMovies.map((m, index) => {
            return (
              <Col className='directorView-movieCard' xs='6' sm='4' key={index}>
                <MovieCard movie={m} key={m._id} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};
