// overview of the user's habit
import React from 'react';
import CreateHabit from './createHabit';
import {useSelector,useDispatch} from 'react-redux';
import {Row, Col, ListGroup, Button} from 'react-bootstrap';
import {deleteHabit} from '../features/habitSlice';
import './overview.css'


const Overview = () => {
    const [modalShow, SetmodalShow] = React.useState(false); /*the modal does'nt show initially*/

    const dispatch = useDispatch();
    const { habits } =useSelector((state)=> state.allHabits); /* allow component to access date stored in redux*/

    const deletehandler = (name) => {     /*responsible for dispatching an action to delete a habit from the Redux store*/
        dispatch(deleteHabit(name));
    };

    return (
        <>
          <Row>
            <Col md={2} className="onMobile">
              <i className="fa-regular fa-calendar-minus"></i>
            </Col>
            <Col md={4} className="onMobile">
              <h4>Habits</h4>
            </Col>
          </Row>
          <ListGroup>
            {habits.map((habit, index) => (
              <ListGroup.Item
                key={index}
                className="gradient mb-1 rounded habit-container"
              >
                <Row>
                  <Col md={2} className="icons">
                    {" "}
                    <i className="fa-brands fa-canadian-maple-leaf"></i>
                  </Col>
                  <Col md={8} className="habit-title">
                    {habit.title}
                  </Col>
                  <Col md={1} className="icons">
                    <i
                      className="fa-solid fa-trash"
                      style={{ fontSize: "12px" }}
                      onClick={() => deletehandler(habit.title)}
                    ></i>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
    
          <Row>
            <Col className="d-flex justify-content-center">
              <Button
                type="button"
                className="mt-3 mobile"
                onClick={() => SetmodalShow(true)}
              >
                <i className="fa-solid fa-circle-plus"></i> &nbsp;&nbsp; New Habit
              </Button>
              <CreateHabit show={modalShow} onHide={() => SetmodalShow(false)} />
            </Col>
          </Row>
        </>
      );
    };
    
    export default Overview;



