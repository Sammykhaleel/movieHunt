import React from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import './profile-view.scss';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';

export class ProfileView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userInfo: null,
      movies: [],
      favoriteMovies: [],
      username: props.user,
      password: null,
      email: null,
      birthday: null,
    };
  }

  componentDidMount() {
    axios
      .get(`https://moviehunt-gc.herokuapp.com/users/${this.state.username}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        this.setState({
          userInfo: res.data,
          username: res.data.Username,
          password: res.data.Password,
          email: res.data.Email,
          birthday: res.data.Birthday,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get('https://moviehunt-gc.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        this.setState({ movies: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteFav(id) {
    console.log(id);
  }

  updateUser(state) {
    // const { username, password, email, birthday } = this.state;
    console.log(
      'update user',
      state.username,
      state.password,
      state.email,
      state.birthday
    );
  }

  render() {
    const { username, userInfo, movies } = this.state;
    if (userInfo) {
      const favoriteMovies = this.state.userInfo.FavoriteMovies;
      for (let i = 0; i < favoriteMovies.length; i++) {
        var favorites = new Array(
          this.state.movies.find((m) => {
            return m._id === favoriteMovies[i];
          })
        );
      }
    }

    if (!userInfo) return <div className='main-view' />;
    if (!favorites) return <div className='main-view' />;
    console.log('user', this.state.password);

    return (
      <Container className='profileView'>
        <Button
          onClick={() => window.history.back()}
          variant='dark'
          className='backBtn'>
          <i className='fas fa-arrow-left'></i> Back
        </Button>
        <Row>
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
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                  if (!e.target.value) {
                    this.setState({ password: userInfo.Password });
                  }
                }}
              />
            </Form.Group>
            <Form.Group controlId='formBasicConfirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' placeholder='Confirm Password' />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder={userInfo.Email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                  if (!e.target.value) {
                    this.setState({ email: userInfo.Email });
                  }
                }}
              />
            </Form.Group>
            <Form.Group controlId='formBasicBirthday'>
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type='date'
                placeholder={userInfo.Birthday}
                onChange={(e) => {
                  this.setState({ birthday: e.target.value });
                  if (!e.target.value) {
                    this.setState({ birthday: userInfo.Birthday });
                  }
                }}
              />
            </Form.Group>
            <Button
              variant='btn-dark'
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                this.updateUser(this.state);
              }}>
              Update
            </Button>
            <Button variant='btn-dark' type='submit'>
              Close account
            </Button>
          </Form>
        </Row>
        <Row>
          {favorites.map((m, index) => {
            return (
              <Col sm='4' key={index}>
                <Button
                  onClick={() => this.deleteFav(m._id)}
                  variant='dark'
                  className='backBtn'>
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
