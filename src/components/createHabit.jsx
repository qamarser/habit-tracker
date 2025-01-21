import {useState}from 'react';
import { Modal, Button, form, ModalDialog, ModalBody, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addhabit } from '../features/habitSlice';
import { details } from '../features/habitSlice';

const CreateHabit = (props) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

// handle new habits
const AddHabitHandler = () => {
    dispatch(addhabit({ title, description, details}))
    props.onhide()  /* hides a modal after a new habit is added */
}
return (
    //modal component
    <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>  /* tells assistive technologies what the title of the modal is, providing context about its content.*/
     <Modal.Dialog className='modal-sm'>
        <Modal.Body>
        <Form onSubmit={() => AddHabitHandler}>
        <Form.Group controlId='title'>
        <Form.Label>Habit Title</Form.Label>
        <Form.Control
        type='text'
        placeholder='enter title'
        value={title}
        autofocus={true}
        required={true}
        onChange={(e) => setTitle(e.target.value)}>
        </Form.Control>
        </Form.Group>
        <Form.Group controlId='description'>
              <Form.Label>Describe it </Form.Label>
              <Form.Control
                type='text'
                placeholder='short description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Modal.Footer>
              <Button onClick={() => AddHabitHandler()}>Add Habit</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  )
}

export default CreateHabit


