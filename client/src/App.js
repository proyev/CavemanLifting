import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/Dashboard.js';
import Sidebar from './components/sidebar/Sidebar.js';
import SessionForm from './components/sessioncreation/sessionform/SessionForm';
import SessionDetails from './components/dashboard/sessiondetails/SessionDetails';
import Gym from './components/gyms/Gym';
import Profile from './components/profile/Profile';
// import WorkoutInfo from './components/profile/Profile';

import ApiService from './ApiService';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [detailsForm, setDetailsForm] = useState('');
  const [infoAdd, setInfoAdd] = useState(false);

  const notifyAdd = () =>
    toast.info('New session added!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: 'dark',
    });
  const notifyDetails = () =>
    toast.info('Details have been added!🎉', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: 'dark',
    });

  function postWorkout(title, date, notes = '') {
    ApiService.postWorkout({ title, date, notes }).then((workout) => {
      console.log(workout);
      setWorkouts((prevList) => {
        const newList = [workout, ...prevList];

        newList.sort((a, b) => sortByDate(b, a));
        return newList;
      });
    });
    notifyAdd();
  }

  function addInfo(body, id) {
    ApiService.addInfo(body, id).then((workout) => {
      console.log(workout);

      setWorkouts((prevList) => {
        const filteredArr = prevList.filter(
          (workoutCard) => workout._id !== workoutCard._id
        );
        console.log(filteredArr);
        const newList = [workout, ...filteredArr];

        newList.sort((a, b) => sortByDate(b, a));
        console.log(newList);
        setInfoAdd(!infoAdd);

        return newList;
      });
    });
    notifyDetails();
  }

  function toggleForm() {
    setShowForm(!showForm);
  }

  function toggleDetailsForm(id = '') {
    id.length ? setDetailsForm(id) : setDetailsForm('');
  }

  useEffect(() => {
    ApiService.getWorkouts().then((workouts) => {
      const orderedWorkouts = workouts.sort((a, b) => sortByDate(b, a));
      return setWorkouts(orderedWorkouts);
    });
  }, [infoAdd]);

  return (
    <div className="App">
      <ToastContainer />
      {showForm && (
        <SessionForm
          showForm={showForm}
          toggleForm={toggleForm}
          postWorkout={postWorkout}
        />
      )}
      {detailsForm && (
        <SessionDetails
          detailsForm={detailsForm}
          toggleDetailsForm={toggleDetailsForm}
          addInfo={addInfo}
        />
      )}
      <div className="sidedash__container">
        <Router>
          <Sidebar postWorkout={postWorkout} toggleForm={toggleForm} />
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  workouts={workouts}
                  toggleDetailsForm={toggleDetailsForm}
                />
              }
            />
            <Route path="/profile" element={<Profile workouts={workouts} />} />
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
