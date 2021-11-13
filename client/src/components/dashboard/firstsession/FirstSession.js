import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './FirstSession.css';

export default function FirstSession({ workout, toggleDetailsForm }) {
  // Unique styling done for first session in list to make it stand apart from the rest

  return (
    <Card className="firstsession__container" style={{ width: '50rem' }}>
      <Card.Header as="h4">{workout.title}</Card.Header>
      <Card.Body>
        <Card.Text>{workout.notes}</Card.Text>
        <hr />
        <Card.Text className="routine__display" as="h5">
          {workout.routine.map((routine) => {
            return (
              <div key={routine._id}>
                <h5>{routine.lift}</h5>
                <h5>{routine.weight} kg</h5>
                <h5>Sets: {routine.sets}</h5>
                <h5>Reps: {routine.reps}</h5>
                <h5>Rest per set: {routine.rest}s</h5>
                <hr />
              </div>
            );
          })}
        </Card.Text>
        <Button variant="dark" onClick={() => toggleDetailsForm(workout._id)}>
          Add details
        </Button>
      </Card.Body>
    </Card>
  );
}
