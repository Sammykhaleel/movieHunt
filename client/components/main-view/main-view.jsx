import React from 'react';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { RegistrationView } from '../registration-view/registration-view';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProfileView } from '../profile-view/profile-view';

import './main-view.scss';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      user: null,
      loginPage: false,
      userInfo: null,
    };
    this.toLoginView = this.toLoginView.bind(this);
  }
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getInfo(accessToken);
    }
  }

  getInfo(token) {
    // Get movies
    axios
      .get('https://moviehunt-gc.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // Get user info
        axios
          .get(
            `https://moviehunt-gc.herokuapp.com/users/${localStorage.getItem(
              'user'
            )}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          )
          .then((res) => {
            this.setState({
              userInfo: res.data,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({ movies: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLoggedIn(authData) {
    console.log('authdata', authData);
    this.setState({ user: authData.user.Username });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getInfo(localStorage.getItem('token'));
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  toLoginView() {
    this.setState({ loginPage: true });
  }

  render() {
    const { movies, user, loginPage, userInfo } = this.state;

    // if (movies.length === 0) return <div className='main-view' />;
    return (
      <Router>
        <div className='main-view'>
          <h1 className='main-title'>Movie Hunt</h1>
          <Nav className='justify-content-center main-nav' activeKey='/'>
            <Nav.Item>
              <Nav.Link href='/'>Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/users/${user}`}>My Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={this.logOut} href='/'>
                Sign Out
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Container>
            <Row className='main-cardContainer'>
              <Route
                exact
                path='/'
                render={() => {
                  if (loginPage && !user)
                    return (
                      <LoginView
                        onClickRegister={() =>
                          this.setState({ loginPage: false })
                        }
                        onLoggedIn={(user) => this.onLoggedIn(user)}
                      />
                    );
                  if (!user)
                    return (
                      <RegistrationView
                        onLoggedIn={(user) => this.onLoggedIn(user)}
                        onClickLogin={this.toLoginView}
                      />
                    );
                  return movies.map((m, index) => (
                    <Col
                      key={index}
                      className='main-card'
                      lg='3'
                      md='4'
                      sm='6'
                      xs='10'>
                      <MovieCard key={m._id} movie={m} />
                    </Col>
                  ));
                }}
              />
            </Row>
          </Container>
          <Route
            exact
            path='/movies/:Title'
            render={({ match }) => (
              <MovieView
                movie={movies.find((m) => m.Title === match.params.Title)}
              />
            )}
          />
          <Route
            exact
            path='/directors/:Name'
            render={({ match }) => (
              <DirectorView
                director={
                  movies.find((m) => m.Director.Name === match.params.Name)
                    .Director
                }
                movies={movies}
              />
            )}
          />
          <Route
            exact
            path='/genres/:Name'
            render={({ match }) => (
              <GenreView
                genre={
                  movies.find((m) => m.Genre.Name === match.params.Name).Genre
                }
                movies={movies}
              />
            )}
          />
          <Route
            exact
            path='/users/:Username'
            render={() => {
              if (userInfo)
                return (
                  <ProfileView
                    user={localStorage.getItem('user')}
                    movie={movies}
                    userInfo={userInfo}
                  />
                );
            }}
          />
        </div>
      </Router>
    );
  }
}
