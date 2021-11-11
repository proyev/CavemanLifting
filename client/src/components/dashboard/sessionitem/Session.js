import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './Session.css';

export default function Session({ workout }) {
  return (
    <Card className="card__container" style={{ width: '35rem' }}>
      <Card.Header as="h5">{workout.title}</Card.Header>
      <Card.Body>
        <Card.Text as="h5">{workout.notes}</Card.Text>
        <hr />
        <Card.Text as="h5">
          {workout.routine.map((routine) => {
            return (
              <div key={routine._id}>
                <h5>Exercise: {routine.lift}</h5>
                <h5>Weight: {routine.weight} kg</h5>
                <h5>Rest per set: {routine.rest}s</h5>
                <hr />
              </div>
            );
          })}
        </Card.Text>
        <Button variant="dark">Details</Button>
      </Card.Body>
    </Card>
  );
}
