import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Triggers when "Login" button is clicked. This method will send <code>POST</code>
   * request to the server with header contains <code>Username</code> and <code>Password</code>
   * Then, with response data, calls <code>{@link onLoggedIn|onLoggedIn}</code> method from its props.
   * @param {MouseEvent} e On click "Login" button
   * @name handlesubmitLogin
   * @method
   * @async
   */
  const handlesubmitLogin = (e) => {
    e.preventDefault();
    if (!username) {
      alert('Username is required');
    }
    if (username) {
      if (username.length < 4) {
        alert('Username has to be longer than 4 characters');
      }
    }
    if (!password) {
      alert('Password is required');
    }
    axios
      .post('https://moviehunt-gc.herokuapp.com/login', {
        Username: username,
        Password: password,
      })
      .then((res) => {
        const data = res.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  return (
    <div className='login-div'>
      <Form className='login-form'>
        <h1 className='login-pageTitle'>Login</h1>
        <Form.Group controlId='formUsername'>
          <Form.Label className='login-label'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label className='login-label'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          className='login-submitBtn'
          onClick={handlesubmitLogin}
          variant='primary'
          type='submit'>
          Submit
        </Button>
        <Link to='/register'>
          <Button className='login-registerBtn' variant='primary' type='button'>
            Register
          </Button>
        </Link>
      </Form>
    </div>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
