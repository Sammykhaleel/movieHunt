import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  return (
    <Form>
      <h1>Login</h1>
      <Form.Group controlId='formUsername'>
        <Form.Label>Username</Form.Label>
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
        <Form.Label>Password</Form.Label>
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
        onClick={handlesubmit}
        variant='primary'
        type='submit'>
        Submit
      </Button>
      <Button
        className='login-registerBtn'
        onClick={props.onClickRegister}
        variant='primary'
        type='button'>
        Register
      </Button>
    </Form>
  );
}
