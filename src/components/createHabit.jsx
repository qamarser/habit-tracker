import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addHabit } from "../features/habitSlice";

const CreateHabit = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle new habits
  const AddHabitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

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
    props.onHide(); // Close the modal after adding the habit

    // Reset form fields
    setTitle('');
    setDescription('');
  };

  return (
    // Modal component
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form onSubmit={AddHabitHandler}> {/* Call AddHabitHandler on form submit */}
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
            <Button type="submit">Add Habit</Button> {/* Use submit button */}
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateHabit;
