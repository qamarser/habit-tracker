import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addHabit } from "../features/habitSlice";

const CreateHabit = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // handle new habits
  const AddHabitHandler = () => {
    const newHabit = {
      title,
      description,
      details: [
        { day: "Mon", status: "none" },
        { day: "Tue", status: "none" },
        { day: "Wed", status: "none" },
        { day: "Thu", status: "none" },
        { day: "Fri", status: "none" },
        { day: "Sat", status: "none" },
        { day: "Sun", status: "none" },
      ],
      completedDays: 0, // Initialize completedDays to 0 for a new habit
      showCongrats: false, // Initialize showCongrats as false
    };
    dispatch(addHabit(newHabit)); // Dispatch the new habit to Redux
    props.onhide(); // Close the modal after adding the habit
  };

  return (
    // Modal component
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Dialog className="modal-sm">
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault() && AddHabitHandler()}>
            <Form.Group controlId="title">
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                autoFocus={true}
                required={true}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Describe it</Form.Label>
              <Form.Control
                type="text"
                placeholder="Short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Modal.Footer>
              <Button onClick={AddHabitHandler}>Add Habit</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default CreateHabit;
