import React from 'react';
import './Dashboard.css';

import SessionList from './sessionlist/SessionList';
// import Gym from '../gyms/Gym';

export default function Dashboard({ workouts, toggleDetailsForm }) {
  return (
    <div className="dashboard">
      <div className="list__container">
        <SessionList
          workouts={workouts}
          toggleDetailsForm={toggleDetailsForm}
        />
      </div>
    </div>
  );
}
