import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './registration-view.scss';

export function RegistrationView(props) {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [Email, setEmail] = useState();
  const [Birthday, setBirthday] = useState();

  let user = {
    Username,
    Password,
    Email,
    Birthday,
  };

  /**
   * Registers new user. Send <code>POST</code> request with header.
   * <code>handlesubmitRegister</code> then call <code>{@link login|login}</code>
   * <pre>
   * {
   *    Username: string
   *    Password: string
   *    Email: string
   *    Birthday: Date
   * }
   * </pre>
   * @param {MouseEvent} e On click "Register" button
   * @mehtod
   * @async
   * @global
   * @name handlesubmitRegister
   */
  const handlesubmitRegister = (e) => {
    e.preventDefault();
    if (!Username) {
      alert('Username is required');
      return;
    }
    if (Username) {
      if (Username.length < 4) {
        alert('Username has to be longer than 4 characters');
        return;
      }
    }
    if (!Password) {
      alert('Password is required');
      return;
    }
    if (!Email) {
      alert('Email is required');
      return;
    }
    axios
      .post('https://moviehunt-gc.herokuapp.com/users', {
        Username,
        Password,
        Email,
        Birthday,
      })
      .then((res) => {
        console.log(res.data);
        login(res.data);
      })
      .catch((e) => {
        let errorMessages = [];
        if (e.response.data.errors) {
          e.response.data.errors.map((error) => {
            errorMessages.push(`${error.param}: ${error.msg}`);
          });
          alert(errorMessages);
        } else {
          alert(e.response.data);
        }
        console.log(e.response);
      });
  };

  /**
   * Logs in the new user with user data received from
   * <code>{@link handlesubmitRegister|handlesubmitRegister}</code>
   * @param {Object} data New user data
   * @name login
   * @method
   * @async
   */
  const login = (data) => {
    axios
      .post('https://moviehunt-gc.herokuapp.com/login', {
        Username: data.Username,
        Password: user.Password,
      })
      .then((res) => {
        const data = res.data;
        props.onLoggedIn(data);
        window.open('/client', '_self');
      })
      .catch((e) => {
        console.log('No such user', e);
      });
  };

  const register_username = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Username is required. Min 4 characters. Non alphanumeric characters are
      not allowed.
    </Tooltip>
  );
  const register_password = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Password is required. Non alphanumeric characters are not allowed.
    </Tooltip>
  );
  const register_birthday = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Use calender icon for your birthday,
    </Tooltip>
  );

  const backToLogin = () => {
    window.location.herf = '/client';
  };

  return (
    <div className='regstr-div'>
      <Form className='regstr-form'>
        <h1 className='regstr-pageTitle'>Register</h1>
        <OverlayTrigger
          placement='top'
          delay={{ show: 50, hide: 100 }}
          overlay={register_username}>
          <Form.Group controlId='formUsername'>
            <Form.Label className='regstr-label'>Username</Form.Label>
            <Form.Control
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type='text'
              placeholder='Enter username'
            />
          </Form.Group>
        </OverlayTrigger>
        <OverlayTrigger
          placement='top'
          delay={{ show: 50, hide: 100 }}
          overlay={register_password}>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label className='regstr-label'>Password</Form.Label>
            <Form.Control
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type='password'
              placeholder='Password'
            />
          </Form.Group>
        </OverlayTrigger>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label className='regstr-label'>Email Address</Form.Label>
          <Form.Control
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <OverlayTrigger
          placement='top'
          delay={{ show: 50, hide: 100 }}
          overlay={register_birthday}>
          <Form.Group controlId='formBirthday'>
            <Form.Label className='regstr-label'>Birthday</Form.Label>
            <Form.Control
              onChange={(e) => {
                setBirthday(e.target.value);
              }}
              type='date'
              placeholder='Enter Birthday'
            />
            <Form.Text className='text-muted'>YYYY-MM-DD</Form.Text>
          </Form.Group>
        </OverlayTrigger>
        <div className='buttonWrap'>
          <Button
            className='regstr-submitBtn'
            onClick={handlesubmitRegister}
            variant='primary'
            type='submit'>
            Submit
          </Button>
          <Button
            className='regstr-backToLogin'
            onClick={backToLogin}
            variant='primary'
            type='submit'>
            <Link to='/' className='regstr-backToLogin'>
              Back to login
            </Link>
          </Button>
        </div>
      </Form>
    </div>
  );
}

RegistrationView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
