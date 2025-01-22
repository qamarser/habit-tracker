import { Fragment } from "react";  //fragment allows us to return multiple elements from a component
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";  // hook to send actions to Redux to update the application state.
// import { changeStatus } from "../features/habitsSlice.jsx";
import { changeStatus } from "../features/habitSlice";

const HabitDetails = ({ habit, habit: { details } }) => {  //habit.details: An array of objects representing the status for each day of the week.
    const dispatch = useDispatch();
  
    // handlers to change status on click

    const checkStatusHandler = (info) => {
      dispatch(
        changeStatus({
          title: info[0],               //info[0=title, 1=day]
          details: [
            {
              day: info[1],
              status: "done",
            },
          ],
        })
      );
    };
  
    const doneStatusHandler = (info) => {
      dispatch(
        changeStatus({
          title: info[0],
          details: [
            {
              day: info[1],
              status: "fail",
            },
          ],
        })
      );
    };
  
    const failStatusHandler = (info) => {
      dispatch(
        changeStatus({
          title: info[0],
          details: [
            {
              day: info[1],
              status: "none",
            },
          ],
        })
      );
    };
    return (
      <Row>

{/* details.map(): Loops through the array of daily status details.
 Fragment: Groups each day's content without adding extra DOM nodes. */}

        {details.map((detail) => (
          <Fragment key={detail.day}>
            <Col>
              <p className="day-headings">{detail.day}</p> 
              {detail.status === "none" && (
                <i
                  className="fa-solid fa-circle-minus null"
                  onClick={() => checkStatusHandler([habit.title, detail.day])}
                ></i>
              )}
  
              {detail.status === "done" && (
                <i
                  className=" fa-lg fa-solid fa-circle-check done"
                  onClick={() => doneStatusHandler([habit.title, detail.day])}
                ></i>
              )}
  
              {detail.status === "fail" && (
                <i
                  className=" fa-lg fa-solid fa-circle-xmark fail"
                  onClick={() => failStatusHandler([habit.title, detail.day])}
                ></i>
              )}
            </Col>
          </Fragment>
        ))}
      </Row>
    );
  };
  
  export default HabitDetails;

  