import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function SessionDetails({
  detailsForm,
  toggleDetailsForm,
  addInfo,
}) {
  const [lift, setLift] = useState('');
  const [weight, setWeight] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [rest, setRest] = useState(0);

  const handleClose = () => toggleDetailsForm();

  function handleLift(e) {
    setLift(e.target.value);
  }
  function handleWeight(e) {
    setWeight(e.target.value);
  }
  function handleSets(e) {
    setSets(e.target.value);
  }
  function handleReps(e) {
    setReps(e.target.value);
  }
  function handleRest(e) {
    setRest(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!lift || !weight || !sets || !reps || !rest) {
      return alert('Please fill all fields');
    }

    addInfo({ lift, weight, sets, reps, rest }, detailsForm);

    setLift('');
    setWeight(0);
    setSets(0);
    setReps(0);
    setRest(0);
    handleClose();
  }

  return (
    <>
      <Modal size="lg" show={detailsForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Session Details</Modal.Title>
        </Modal.Header>

        <Modal.Body className="input__details">
          <form onSubmit={handleSubmit} className="form_container">
            <h4>Lift</h4>
            <input
              type="text"
              placeholder="Insert a lift..."
              value={lift}
              onChange={handleLift}
            ></input>
            <h4>Weight</h4>

            <input
              type="number"
              name="weight"
              placeholder="0"
              value={weight}
              onChange={handleWeight}
            ></input>
            <h4>Sets</h4>

            <input
              type="number"
              placeholder="0"
              value={sets}
              onChange={handleSets}
            ></input>
            <h4>Reps</h4>

            <input
              type="number"
              placeholder="0"
              value={reps}
              onChange={handleReps}
            ></input>
            <h4>Rest</h4>

            <input
              type="number"
              placeholder="0"
              value={rest}
              onChange={handleRest}
            ></input>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
