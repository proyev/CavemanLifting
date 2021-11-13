import React, { useState } from 'react';
import './Profile.css';
import Heatmap from './heatmap/Heatmap';

export default function Profile({ workouts }) {
  const [workoutData, setWorkoutData] = useState([]);

  return (
    <div id="profile__page">
      {workouts.length && <Heatmap workouts={workouts} />}
    </div>
  );
}
