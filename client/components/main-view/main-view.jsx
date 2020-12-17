import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setMovies, setUser } from '../../src/actions/actions';
import MoviesList from '../movie-list/movie-list';
import ProfileView from '../profile-view/profile-view';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { Container, Nav } from 'react-bootstrap';
import { LoadingView } from '../loading-view/loading-view';
import './main-view.scss';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      userdata: '',
    };
  }

  componentDidMount() {
    console.log(this.props);
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getInfo(accessToken);
    }
  }

  /**
   * This method uses received access token to receive movies and user data.
   * (<code>GET</code> requests)
   * If returning users' access token saved in their local storage are valid,
   * <code>getInfo</code> will use saved token. <br/>
   * If the token in local storage is expired, it will remove token from the storage
   * and get new token from the server.
   * @param {String} token Access Token
   * @method
   * @name getInfo
   * @async
   */
  getInfo(token) {
    axios
      .get('https://moviehunt-gc.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log('token error!!!:', error);
        localStorage.removeItem('token');
        location.reload();
      });

    axios
      .get(
        `https://moviehunt-gc.herokuapp.com/users/${localStorage.getItem(
          'user'
        )}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        this.props.setUser(response.data);
        this.setState({ userdata: response.data });
      })
      .catch(function (error) {
        console.log('user error!!!', error);
        localStorage.removeItem('user');
        location.reload();
      });
  }

  onLoggedIn(authData) {
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getInfo(authData.token);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  render() {
    const { movies, userInfo } = this.props;
    const { user, userdata } = this.state;
    console.log(userdata);
    if (movies.length === 0 || !userInfo.Username) {
      if (!localStorage.getItem('user')) {
        return (
          <Router basename='/client'>
            <div className='main-view'>
              <Nav className='main-nav' activeKey='/'>
                <Nav.Item>
                  <Nav.Link href='/client'>
                    <h1 className='main-title'>Movie Hunt</h1>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/client'>Movies</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Container>
              <Route
                exact
                path='/'
                render={() => {
                  return (
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  );
                }}
              />
              <Route
                path='/register'
                render={() => (
                  <RegistrationView
                    onLoggedIn={(user) => this.onLoggedIn(user)}
                  />
                )}
              />
            </Container>
          </Router>
        );
      }
      return (
        <div>
          <LoadingView />
        </div>
      );
    }

    return (
      <Router basename='/client'>
        <div className='main-view'>
          <Nav className='main-nav' activeKey='/'>
            <h1 className='main-title'>Movie Hunt</h1>
            <Nav.Item>
              <Nav.Link href='/client'>Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/client/users/${user}`}>My Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={this.logOut} href='/client'>
                Sign Out
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Container>
            <Route
              exact
              path='/'
              render={() => {
                return <MoviesList movies={movies} />;
              }}
            />
          </Container>
          <Route
            exact
            path='/movies/:Title'
            render={({ match }) => (
              <MovieView
                movie={movies.find((m) => m.Title === match.params.Title)}
                FavoriteMovies={
                  userdata.FavoriteMovies && userdata.FavoriteMovies
                }
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
              return <ProfileView userInfo={userInfo} movies={movies} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

let mapStateToProps = (state) => {
  return { movies: state.movies, userInfo: state.userInfo };
};

export default connect(mapStateToProps, { setMovies, setUser })(MainView);
