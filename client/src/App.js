import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard.js';
import Sidebar from './components/sidebar/Sidebar.js';
import Topbar from './components/topbar/Topbar.js';
import ApiService from './ApiService';

function App() {
  const [workouts, setWorkouts] = useState([]);

  function createWorkout() {}

  useEffect(() => {
    ApiService.getWorkouts().then((workouts) => {
      const orderedWorkouts = workouts.sort((a, b) => sortByDate(a, b));
      return setWorkouts(orderedWorkouts);
    });
  }, []);

  return (
    <div className="App">
      <div className="sidedash__container">
        <Sidebar workouts={workouts} />
        <Dashboard workouts={workouts} />
      </div>
    </div>
  );
}

function sortByDate(a, b) {
  const dateOne = new Date(a.date).getTime();
  const datetwo = new Date(b.date).getTime();
  return dateOne - datetwo;
}

export default App;
