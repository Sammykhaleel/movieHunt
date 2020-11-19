// src/components/movies-list/movies-list.jsx
import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter((m) => {
      return m.Title.includes(visibilityFilter);
    });
  }

  if (!movies) return <div className='main-view' />;

  return (
    <Row className='main-cardContainer'>
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      {filteredMovies.map((m, index) => (
        <Col key={index} className='main-card' lg='3' md='4' sm='6' xs='10'>
          <MovieCard key={m._id} movie={m} />
        </Col>
      ))}
    </Row>
  );
}

export default connect(mapStateToProps)(MoviesList);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
