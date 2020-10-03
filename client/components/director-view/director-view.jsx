import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export class DirectorView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movies: props.movies,
      director: props.director,
      directorInfo: null,
      directorMovies: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://moviehunt-gc.herokuapp.com/directors/${this.state.director.id}`
      )
      .then((res) => {
        this.setState({ directorInfo: res.data });
        console.log(this.state.director.Name);
        console.log(res.data);
        console.log(this.state.directorInfo);
      });
  }

  render() {
    const { directorInfo, directorMovies } = this.state;
    return (
      <Container className='directorView'>
        <Button
          onClick={() => window.history.back()}
          variant='dark'
          className='backBtn'>
          <i className='fas fa-arrow-left'></i> Back
        </Button>
        <Row>
          <Col>
            <h1>2222222222222222</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
