import { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Habitdisplays from './components/Habitdisplays.jsx';
import Overview from './components/overview.jsx';
import Typed from 'typed.js';
import './App.css';
import MonthlyCalendar from "./Page3/MonthlyCalendar.jsx";
import PerformanceChart from './Page 2/performanceChart.jsx';

function App() {
  const navigate = useNavigate();

  // Initialize Typed.js with error handling
  useEffect(() => {
    const tagElement = document.querySelector('.tag');
    if (tagElement) {
      const typed = new Typed(tagElement, {
        strings: [
          "...okay. Let's start by tracking a habit for the next seven days.",
          "It's never too late to develop good habits.",
          "Good habits formed at youth make all the difference - Aristotle",
          "Motivation is what gets you started. Habit is what keeps you going.",
          "Habits change into character.",
        ],
        startDelay: 2000,
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 5000,
        loop: true,
      });

      // Cleanup on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              {/* Add the "View Performance" button above the title */}
              <Row className="mt-3 performance">
                <Col className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate('/performance')}
                  >
                    Performance
                  </button>
                </Col>
                <Col>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate('/MonthlyCalendar')}
                  >
                    Calendar
                  </button>
                </Col>
              </Row>

              <Row className="mt-5 habit-name">
                <Col md={3}>
                  <Overview />
                </Col>
                <Col md={9}>
                  <Habitdisplays />
                </Col>
              </Row>

              <h4 className="text-light d-flex mt-5 justify-content-center">
                <span className="tag"></span>
              </h4>
            </Container>
          }
        />
        {/* Define routes */}
        <Route path="/performance" element={<PerformanceChart />} /> {/* New chart page */}
        <Route path="/MonthlyCalendar" element={<MonthlyCalendar />} />
      </Routes>
    </>
  );
}

export default App;