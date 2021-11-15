import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useColorMode, useColorModeValue, HStack } from '@chakra-ui/react';
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

  // showForm used for displaying "Add New Session"
  // detialsForm used for "Add details"
  // infoAdd used to keep track, and update the workout cards on the dashboard

  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('teal.200', 'teal.900');

  const notifyAdd = () =>
    toast.info('New session added!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      theme: 'dark',
    });

  const notifyDetails = () =>
    toast.info('Details have been added!🎉', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      theme: 'dark',
    });
  // Toastify notifications for adding workout and details
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
  // standard API call to POST workout

  function addInfo(body, id) {
    ApiService.addInfo(body, id).then((workout) => {
      console.log(workout);

      setWorkouts((prevList) => {
        const filteredArr = prevList.filter(
          (workoutCard) => workout._id !== workoutCard._id
        );
        console.log(filteredArr);
        const newList = [workout, ...filteredArr];
        // is needed (?) addInfo watches state

        newList.sort((a, b) => sortByDate(b, a));
        console.log(newList);
        setInfoAdd(!infoAdd);

        return newList;
        // This function call a PUT request to update the selected card with a new workout
        // based on the selected cards ID
        // Then filters & replaces the edited workout card to insure consistency
      });
    });

    notifyDetails();
  }

  function toggleForm() {
    setShowForm(!showForm);
  }
  // Boolean flag for showing the "Create New Session" modal form.

  function toggleDetailsForm(id = '') {
    id.length ? setDetailsForm(id) : setDetailsForm('');
  }
  // Displays the add details form modal for a card, only if that card has an
  // ID property, theoretically they all SHOULD have but this just double checks

  useEffect(() => {
    ApiService.getWorkouts().then((workouts) => {
      const orderedWorkouts = workouts.sort((a, b) => sortByDate(b, a));
      return setWorkouts(orderedWorkouts);
    });
    // standard API call to GET workout
  }, [infoAdd]);

  return (
    // <div className="App">
    <HStack p="0" bg={bgColor}>
      <ToastContainer />
      {/* Used as a container for any and all Toasts (toast notification naming convention) */}

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
      {/* Modals are created on the top level and displayed based on a boolean */}

      <HStack m="0 !important" w="100%">
        <Router>
          <Sidebar
            postWorkout={postWorkout}
            toggleForm={toggleForm}
            toggleColorMode={toggleColorMode}
          />
          {/* Router logic is give to the sidebar^ while actual routing happens below */}
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
      </HStack>
    </HStack>
    //</div>
  );
}

function sortByDate(a, b) {
  // Function to sort array of workouts by date, highest being first
  // TODO: implement calendar stopper for current day
  const dateOne = new Date(a.date).getTime();
  const datetwo = new Date(b.date).getTime();
  return dateOne - datetwo;
}

export default App;
