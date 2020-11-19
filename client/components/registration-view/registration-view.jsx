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

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!Username) {
      alert('Username is required');
    }
    if (Username) {
      if (Username.length < 4) {
        alert('Username has to be longer than 4 characters');
      }
    }
    if (!Password) {
      alert('Password is required');
    }
    axios
      .post('https://moviehunt-gc.herokuapp.com/users', {
        Username,
        Password,
        Email,
        Birthday,
      })
      .then((res) => {
        login(res.data);
      })
      .catch((e) => {
        alert('Error registering user');
        console.log(e, 'Error registering user');
      });
  };

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
        <Button
          className='regstr-submitBtn'
          onClick={handlesubmit}
          variant='primary'
          type='submit'>
          Submit
        </Button>
        <Link to='/'>
          <Button className='regstr-loginBtn' variant='primary' type='button'>
            Login
          </Button>
        </Link>
      </Form>
    </div>
  );
}

RegistrationView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
