import React from 'react';
import axios from 'axios';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get('https://moviehunt-gc.herokuapp.com/movies')
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { movies } = this.state;
    if (!movies) return <div className='main-view'></div>;
    return (
      <div className='main-view'>
        {movies.map((movie) => (
          <div className='movie-card' key={movie.id}>
            {movie.Title}
          </div>
        ))}
      </div>
    );
  }
}
