import { useState, useEffect } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
import Habitdisplays from './components/Habitdisplays.jsx';
import overview from './components/overview.jsx';
import Typed from 'typed.js';
import './App.css';

function App() {

  return (
    <>
    <Header />
    <Container>
        <Row className='mt-5'>
          <Col md={3}>
            <overview />
          </Col>
          <Col md={9}>
            <Habitdisplays />
          </Col>
        </Row>
        <h4 className='text-light d-flex  mt-5  justify-content-center'>
          <span className='tag'></span>
        </h4>
      </Container>

    </>
  )
}

export default App
