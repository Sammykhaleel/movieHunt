import React from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import './profile-view.scss';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';
import { setUser } from '../../src/actions/actions';
import { LoadingView } from '../loading-view/loading-view';
import PropTypes from 'prop-types';

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: props.userInfo.Username,
      Password: props.userInfo.Password,
      Email: props.userInfo.Email,
      Birthday: props.userInfo.Birthday,
    };
  }

  deleteFav(movie) {
    axios
      .post(
        `https://moviehunt-gc.herokuapp.com/users/${localStorage.getItem(
          'user'
        )}/favorite/remove/${movie._id}`
      )
      .then((res) => {
        this.props.setUser(res.data);
        alert(movie.Title + ' has been removed from your favorite list');
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
        window.location.pathname = '/';
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let { userInfo, movies } = this.props;
    const { Username, Password, Birthday, Email } = userInfo;

    if (!Username)
      return (
        <div>
          <LoadingView />
        </div>
      );

    var fav = [];
    for (let i = 0; i < userInfo.FavoriteMovies.length; i++) {
      var favMovie = movies.find((m) => {
        return m._id === userInfo.FavoriteMovies[i];
      });
      fav.push(favMovie);
    }

    if (fav === undefined)
      return (
        <div>
          <LoadingView />
        </div>
      );
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
                placeholder={Username}
                onChange={(e) => {
                  this.setState({ Username: e.target.value });
                  if (!e.target.value) {
                    this.setState({ Username: Username });
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
                  this.setState({ Password: e.target.value });
                  if (!e.target.value) {
                    this.setState({ Password: Password });
                  }
                }}
              />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder={Email}
                onChange={(e) => {
                  this.setState({ Email: e.target.value });
                  if (!e.target.value) {
                    this.setState({ Email: Email });
                  }
                }}
              />
            </Form.Group>
            <Form.Group controlId='formBasicBirthday'>
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type='date'
                placeholder={Birthday}
                onChange={(e) => {
                  console.log(e.target.value);
                  this.setState({ Birthday: e.target.value });
                  if (!e.target.value) {
                    console.log(e.target.value);
                    this.setState({ Birthday: Birthday });
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
                  this.updateUser(
                    this.state.Username,
                    this.state.Password,
                    this.state.Email,
                    this.state.Birthday
                  );
                }}>
                Update
              </Button>
              <Button
                className='profileView-closeBtn btn-dark'
                variant='btn-dark'
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  this.deleteUser(Username);
                }}>
                Close account
              </Button>
            </Row>
          </Form>
        </Row>
        <h3>Favorite Movies</h3>
        <Row>
          {fav.map((m, index) => {
            return (
              <Col className='profile-movieCard' sm='4' key={index}>
                <Button
                  onClick={() => this.deleteFav(m, index)}
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

export default connect(null, { setUser })(ProfileView);

ProfileView.propTypes = {
  userInfo: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};
