import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function SessionForm({ showForm, toggleForm, postWorkout }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [routine, setRoutine] = useState('');
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
  function handleRoutine(e) {
    setRoutine(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return alert('Please enter a title bruh');
    if (!date) return alert('Cmon man you need to put a date');
    if (!routine) return alert('No-one gonna find you if there aint no venue');
    if (!notes) return alert('Nothing?');
    postWorkout(title, date, routine, notes);
    setTitle('');
    setRoutine('');
    setDate('');
    setNotes('');
  }

  return (
    <>
      <Modal size="lg" show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Session Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit} className="form_container">
            <h4>Title</h4>
            <input
              type="text"
              placeholder="Insert a title..."
              value={title}
              onChange={handleTitle}
            ></input>
            <h4>Date</h4>

            <input
              type="datetime-local"
              name="date"
              placeholder="Date"
              value={date}
              onChange={handleDate}
            ></input>
            <h4>Routine</h4>

            <input
              type="text"
              placeholder="Layout routine..."
              value={routine}
              onChange={handleRoutine}
            ></input>
            <h4>Notes</h4>

            <input
              type="text"
              placeholder="Insert notes..."
              value={notes}
              onChange={handleNotes}
            ></input>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
