import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.js';
import Sidebar from './components/sidebar/Sidebar.js';
import SessionForm from './components/sessioncreation/sessionform/SessionForm';
import Gym from './components/gyms/Gym';

import ApiService, { postWorkout } from './ApiService';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [displayComp, setComp] = useState(0);

  function componentDecider(route) {
    console.log(route);
    if (route === '/dashboard') {
      setComp(0);
      // setComp(<Dashboard workouts={workouts} />);
      // return <Dashboard workouts={workouts} />;
    } else if (route === '/profile') {
    } else if (route === '/workoutinfo') {
    } else if (route === '/gyms') {
      setComp(1);
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
        <Router>
          <Sidebar createWorkout={createWorkout} toggleForm={toggleForm} />
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard workouts={workouts} />}
            />
            <Route path="/profile" element={<Gym />} />
            <Route path="/workoutinfo" element={<Gym />} />
            <Route path="/gyms" element={<Gym />} />
          </Routes>
        </Router>
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
