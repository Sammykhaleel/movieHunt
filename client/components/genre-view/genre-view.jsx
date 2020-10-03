import React from 'react';
import { Container, Button } from 'react-bootstrap';

export function GenreView(genre) {
  console.log(genre);
  return (
    <Container className='movieView'>
      <Button
        onClick={() => window.history.back()}
        variant='dark'
        className='backBtn'>
        <i className='fas fa-arrow-left'></i> Back
      </Button>
      ;
    </Container>
  );
}
