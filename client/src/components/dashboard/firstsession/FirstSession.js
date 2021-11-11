import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './FirstSession.css';
import moment from 'moment';

export default function FirstSession({ workout }) {
  console.log(workout);
  return (
    <Card className="firstsession__container" style={{ width: '50rem' }}>
      <Card.Header as="h5">{workout.title}</Card.Header>
      <Card.Body>
        <Card.Text>{workout.notes}</Card.Text>
        <Card.Text>{workout.routine[0].lift}</Card.Text>
        <Button variant="dark">Details</Button>
      </Card.Body>
      <Card.Footer as="h5">
        {moment(workout.date).format('h:mm a - Do MMM YY')}
      </Card.Footer>
    </Card>
  );
}
