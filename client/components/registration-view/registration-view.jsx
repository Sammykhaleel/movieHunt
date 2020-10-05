import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
  console.log(user);

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://moviehunt-gc.herokuapp.com/users', {
        Username,
        Password,
        Email,
        Birthday,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        window.open('/', '_self');
      })
      .catch((e) => {
        console.log('Error registering user');
      });
    props.onLoggedIn(Username);
  };
  return (
    <div className='regstr-div'>
      <Form className='regstr-form'>
        <h1 className='regstr-pageTitle'>Register</h1>
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
    </div>
  );
}
