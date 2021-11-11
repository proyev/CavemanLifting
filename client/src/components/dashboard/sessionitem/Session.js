import React from 'react';
import { Button, Card } from 'react-bootstrap';
import moment from 'moment';

import './Session.css';

export default function Session({ workout }) {
  return (
    <Card className="card__container" style={{ width: '35rem' }}>
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
