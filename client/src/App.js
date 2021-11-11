import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard.js';
import Sidebar from './components/sidebar/Sidebar.js';
import SessionForm from './components/sessioncreation/sessionform/SessionForm';

import ApiService from './ApiService';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function createWorkout(title, date, routine, notes = '') {
    ApiService.postWorkout({ title, date, routine, notes }).then((workout) => {
      console.log(workout);
      setWorkouts((prevList) => {
        const newList = [workout, ...prevList];

        newList.sort((a, b) => sortByDate(a, b));
        return newList;
      });
    });
  }

  function toggleForm() {
    setShowForm(!showForm);
  }

  useEffect(() => {
    ApiService.getWorkouts().then((workouts) => {
      const orderedWorkouts = workouts.sort((a, b) => sortByDate(a, b));
      return setWorkouts(orderedWorkouts);
    });
  }, []);

  return (
    <div className="App">
      {showForm && <SessionForm showForm={showForm} toggleForm={toggleForm} />}
      <SessionForm />
      <div className="sidedash__container">
        <Sidebar createWorkout={createWorkout} toggleForm={toggleForm} />
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
