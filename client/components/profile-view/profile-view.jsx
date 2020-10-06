import React from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import './profile-view.scss';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';

export class ProfileView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movies: props.movie,
      username: props.user,
      password: props.userInfo.Password,
      email: props.userInfo.Email,
      birthday: props.userInfo.Birthday,
      favoriteMovies: props.userInfo.FavoriteMovies,
      favMovies: [],
    };
  }

  componentDidMount() {
    let fav = [];
    for (let i = 0; i < this.state.favoriteMovies.length; i++) {
      var favMovie = this.state.movies.find((m) => {
        return m._id === this.state.favoriteMovies[i];
      });
      fav.push(favMovie);
    }
    this.setState({ favMovies: fav });
  }

  deleteFav(movie) {
    axios
      .post(
        `https://moviehunt-gc.herokuapp.com/users/${localStorage.getItem(
          'user'
        )}/favorite/remove/${movie._id}`
      )
      .then((res) => {
        alert(movie.Title + ' has been removed from your favorite list');
        this.setState({ favoriteMovies: res.data.FavoriteMovies });
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateUser(username, password, email, birthday) {
    axios
      .put(
        `https://moviehunt-gc.herokuapp.com/users/${localStorage.getItem(
          'user'
        )}`,
        {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday.slice(0, 10),
        }
      )
      .then(() => {
        alert(username + ' has been updated');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteUser(username) {
    axios
      .delete(
        `https://moviehunt-gc.herokuapp.com/users/${localStorage.getItem(
          'user'
        )}`
      )
      .then(() => {
        alert(username + ' has been deleted');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.pathname = '';
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { username, password, favMovies, email, birthday } = this.state;
    return (
      <Container className='profileView'>
        <Button
          onClick={() => window.history.back()}
          variant='dark'
          className='backBtn'>
          <i className='fas fa-arrow-left'></i> Back
        </Button>
        <Row className='profileView-container'>
          <Form>
            <Form.Group controlId='formBasicUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder={username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                  if (!e.target.value) {
                    this.setState({ username: this.props.user });
                  }
                }}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                  if (!e.target.value) {
                    this.setState({ password: password });
                  }
                }}
              />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder={email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                  if (!e.target.value) {
                    this.setState({ email: email });
                  }
                }}
              />
            </Form.Group>
            <Form.Group controlId='formBasicBirthday'>
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type='date'
                placeholder={birthday}
                onChange={(e) => {
                  this.setState({ birthday: e.target.value });
                  if (!e.target.value) {
                    this.setState({ birthday: birthday });
                  }
                }}
              />
            </Form.Group>
            <Row className='profileView-btnContainer'>
              <Button
                className='profileView-updateBtn btn-dark'
                variant='btn-dark'
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  this.updateUser(username, password, email, birthday);
                }}>
                Update
              </Button>
              <Button
                className='profileView-closeBtn btn-dark'
                variant='btn-dark'
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  this.deleteUser(username);
                }}>
                Close account
              </Button>
            </Row>
          </Form>
        </Row>
        <h3>Favorite Movies</h3>
        <Row>
          {favMovies.map((m, index) => {
            return (
              <Col className='profile-movieCard' sm='4' key={index}>
                <Button
                  onClick={() => this.deleteFav(m)}
                  variant='dark'
                  className='profile-deleteBtn'>
                  Delete
                </Button>
                <MovieCard movie={m} key={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
