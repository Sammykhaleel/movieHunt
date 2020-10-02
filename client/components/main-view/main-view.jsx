import React from 'react';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { DirectorView } from '../director-view/director-view';
import { RegistrationView } from '../registration-view/registration-view';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './main-view.scss';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      user: null,
      loginPage: false,
    };
    this.toLoginView = this.toLoginView.bind(this);
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({ user: authData.user.Username });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios
      .get('https://moviehunt-gc.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({ movies: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  toLoginView() {
    this.setState({ loginPage: true });
  }

  render() {
    const { movies, user, loginPage } = this.state;
    if (loginPage && !user)
      return (
        <div className='main-view'>
          <LoginView
            onClickRegister={() => this.setState({ loginPage: false })}
            onLoggedIn={(user) => this.onLoggedIn(user)}
          />
        </div>
      );

    if (!user)
      return (
        <div className='main-view'>
          <RegistrationView
            onLoggedIn={(user) => this.onLoggedIn(user)}
            onClickLogin={this.toLoginView}
          />
        </div>
      );

    if (!movies) return <div className='main-view' />;

    return (
      <Router>
        <div className='main-view'>
          <h1 className='main-title'>Movie Hunt</h1>
          <Nav className='justify-content-center main-nav' activeKey='/home'>
            <Nav.Item>
              <Nav.Link href='/home'>Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/home'>My Favorites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/home'>My Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={this.logOut} href='/home'>
                Sign Out
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Container>
            <Row>
              <Route
                exact
                path='/'
                render={() =>
                  movies.map((m, index) => (
                    <Col
                      key={index}
                      className='main-card'
                      lg='3'
                      md='4'
                      sm='6'
                      xs='10'>
                      {' '}
                      <MovieCard key={m._id} movie={m} />
                    </Col>
                  ))
                }
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
                name={movies.find(
                  (n) => movies.Director.Name == match.params.Name
                )}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
