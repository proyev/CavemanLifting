import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Textarea,
} from '@chakra-ui/react';
import { CavemanContext } from '../../../CavemanContext';
import { showNotification } from '../../../Utils/Helpers';

// import { Modal, Button } from 'react-bootstrap';
// import './SessionForm.css';

// export default function SessionForm({ showForm, toggleForm, postWorkout }) {
export default function SessionForm({ toggleForm }) {
  const { dispatch } = useContext(CavemanContext);
  const [session, setSession] = useState({
    id: nanoid(),
    title: '',
    date: '',
    notes: '',
    routine: [],
  });
  const handleClose = () => toggleForm();

  function handleForm(e) {
    console.log(session);
    //TODO date is currently a string... when posting to the DB this needs to be a date format
    setSession({ ...session, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!session.title) return alert('Please enter a title bruh');
    if (!session.date) return alert('Cmon man you need to put a date');
    if (!session.notes) return alert('Nothing?');
    //TODO refactor post workout
    dispatch({ type: 'ADD_WORKOUT', payload: session });
    showNotification('session');
    handleClose();
  }

  return (
    <>
      <Modal isOpen={true} onClose={handleClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader textAlign="center">Enter workout</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                size="lg"
                variant="filled"
                placeholder="Enter a title..."
                onChange={handleForm}
                value={session.title}
              />
              <Divider my="2rem" />
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                name="date"
                size="lg"
                variant="filled"
                onChange={handleForm}
                value={session.date}
              />
              <FormLabel>Notes</FormLabel>
              <Textarea
                type="text"
                name="notes"
                size="lg"
                variant="filled"
                onChange={handleForm}
                value={session.notes}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleSubmit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
