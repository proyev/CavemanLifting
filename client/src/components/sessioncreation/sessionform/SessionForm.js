import React, { useState, useContext } from 'react';

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

// import { Modal, Button } from 'react-bootstrap';
// import './SessionForm.css';

// export default function SessionForm({ showForm, toggleForm, postWorkout }) {
  //now instead of props should work with context
export default function SessionForm({ postWorkout }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const { appState, appStateDispatch } = useContext(CavemanContext);


  function handleSubmit(e) {
    e.preventDefault();
    //replace alerts with error msgs surronding input
    if (!title) return alert('Please enter a title bruh');
    if (!date) return alert('Cmon man you need to put a date');
    if (!notes) return alert('Nothing?');

    postWorkout(title, date, notes);

    setTitle('');
    setDate('');
    setNotes('');
  }

  return (
    <>
      <Modal
        isOpen={appState.showNewSession}
        onClose={() => appStateDispatch({type: 'TOGGLE_NEW_SESSION'})}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader textAlign="center">Enter workout</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                size="lg"
                variant="filled"
                placeholder="Enter a title..."
                onChange={event => setTitle(event.target.value)}
                value={title}
              />
              <Divider my="2rem" />
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                size="lg"
                variant="filled"
                onChange={event => setDate(event.target.value)}
                value={date}
              />
              <FormLabel>Notes</FormLabel>
              <Textarea
                type="text"
                size="lg"
                variant="filled"
                onChange={event => setNotes(event.target.value)}
                value={notes}
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
