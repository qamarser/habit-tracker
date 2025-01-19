import React from 'react'
import { Nav, Container } from "react-bootstrap";

const header = () => {

    const date = new Date();

  return (
    <div>
       <Nav className="p-2 background">
      <Container className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold  title">Habit Tracker</h3>
        <span className="currDate">{date.toDateString()}</span>
      </Container>
    </Nav>
    </div>
  )
}

export default header
