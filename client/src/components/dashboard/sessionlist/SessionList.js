import React from 'react';
import Session from '../sessionitem/Session';
import Firstsession from '../firstsession/FirstSession';

export default function SessionList({ workouts }) {
  return workouts.map((workout) => {
    if (workouts.indexOf(workout) === 0) {
      return <Firstsession workout={workout} />;
    }
    return workout ? (
      <Session workout={workout} key={workout._id} />
    ) : (
      <p>Go hit the gym bud</p>
    );
  });
}
