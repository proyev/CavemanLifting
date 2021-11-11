import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function FirstSession({ workout }) {
  console.log(workout);
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title>{workout.title}</Card.Title>
        <Card.Text>{workout.notes}</Card.Text>
        <Card.Text>{workout.date}</Card.Text>
        <Card.Text>{workout.routine[0].lift}</Card.Text>
        <Button variant="dark">Details</Button>
      </Card.Body>
    </Card>
  );
}
