import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();

  let user = {
    username,
    password,
    email,
    birthday,
  };
  console.log(user);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };
  return (
    <Form>
      <h1>Register</h1>
      <Form.Group controlId='formUsername'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type='text'
          placeholder='Enter username'
        />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type='password'
          placeholder='Password'
        />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type='email'
          placeholder='Enter email'
        />
      </Form.Group>
      <Form.Group controlId='formBirthday'>
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
          type='date'
          placeholder='Enter Birthday'
        />
        <Form.Text className='text-muted'>YYYY-MM-DD</Form.Text>
      </Form.Group>
      <Button
        className='regstr-submitBtn'
        onClick={handlesubmit}
        variant='primary'
        type='submit'>
        Submit
      </Button>
      <Button
        className='regstr-loginBtn'
        onClick={props.onClickLogin}
        variant='primary'
        type='button'>
        Login
      </Button>
    </Form>
  );
}
