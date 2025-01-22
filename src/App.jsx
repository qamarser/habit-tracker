import { useEffect } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Habitdisplays from './components/Habitdisplays.jsx';
import Overview from "./components/overview.jsx"
import Typed from 'typed.js';
import './App.css';

function App() {
  // Code for typed.js library
  useEffect(() => {
    const typed = new Typed(".tag", {
      strings: [
        "...okay. Let's start by tracking a habit for next seven days.",
        "It's never too late to develop good habits.",
        "Good habits formed at youth makes all the difference - Aristotle",
        "Motivation is what gets you started. Habit is what keeps you going.",
        "Habits change into character.",
      ], // Strings to display
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <Header />
    <Container>
        <Row className='mt-5'>
          <Col md={3}>
            <Overview />
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
