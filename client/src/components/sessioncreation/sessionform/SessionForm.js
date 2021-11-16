import React, { useState } from 'react';

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

// import { Modal, Button } from 'react-bootstrap';
// import './SessionForm.css';

// export default function SessionForm({ showForm, toggleForm, postWorkout }) {
export default function SessionForm({ toggleForm, postWorkout }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleClose = () => toggleForm();

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleNotes(e) {
    setNotes(e.target.value);
  }
  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return alert('Please enter a title bruh');
    if (!date) return alert('Cmon man you need to put a date');
    if (!notes) return alert('Nothing?');

    postWorkout(title, date, notes);

    setTitle('');
    setDate('');
    setNotes('');
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
                size="lg"
                variant="filled"
                placeholder="Enter a title..."
                onChange={handleTitle}
                value={title}
              />
              <Divider my="2rem" />
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                size="lg"
                variant="filled"
                onChange={handleDate}
                value={date}
              />
              <FormLabel>Notes</FormLabel>
              <Textarea
                type="text"
                size="lg"
                variant="filled"
                onChange={handleNotes}
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
