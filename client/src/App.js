import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard.js';
import Sidebar from './components/sidebar/Sidebar.js';
import SessionForm from './components/sessioncreation/sessionform/SessionForm';

import ApiService, { postWorkout } from './ApiService';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [displayComp, setComp] = useState('');

  function componentDecider(route) {
    console.log(route);
    if (route === '/dashboard') {
    } else if (route === '/profile') {
    } else if (route === '/workoutinfo') {
    } else if (route === '/gyms') {
    } else {
    }
  }

  function createWorkout(title, date, routine, notes = '') {
    ApiService.postWorkout({ title, date, routine, notes }).then((workout) => {
      console.log(workout);
      setWorkouts((prevList) => {
        const newList = [workout, ...prevList];

        newList.sort((a, b) => sortByDate(b, a));
        return newList;
      });
    });
  }

  function toggleForm() {
    setShowForm(!showForm);
  }

  useEffect(() => {
    ApiService.getWorkouts().then((workouts) => {
      const orderedWorkouts = workouts.sort((a, b) => sortByDate(b, a));
      return setWorkouts(orderedWorkouts);
    });
  }, []);

  return (
    <div className="App">
      {showForm && (
        <SessionForm
          showForm={showForm}
          toggleForm={toggleForm}
          postWorkout={postWorkout}
        />
      )}
      <div className="sidedash__container">
        <Sidebar
          createWorkout={createWorkout}
          toggleForm={toggleForm}
          componentDecider={componentDecider}
        />
        {/* <Dashboard workouts={workouts} /> */}
        {displayComp === '' ? (
          <Dashboard workouts={workouts} />
        ) : (
          componentDecider(displayComp)
        )}
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
