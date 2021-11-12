import React from 'react';
import Session from '../sessionitem/Session';
import Firstsession from '../firstsession/FirstSession';

import './SessionList.css';

export default function SessionList({ workouts, toggleDetailsForm }) {
  return (
    <div className="scroller">
      <div className="session__container">
        {workouts.map((workout) => {
          if (workouts.indexOf(workout) === 0) {
            return (
              <Firstsession
                workout={workout}
                key={workout._id}
                toggleDetailsForm={toggleDetailsForm}
              />
            );
          }
          return workout ? (
            <Session
              workout={workout}
              key={workout._id}
              toggleDetailsForm={toggleDetailsForm}
            />
          ) : (
            <p>Go hit the gym bud</p>
          );
        })}
      </div>
    </div>
  );
}
