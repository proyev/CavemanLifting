// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useColorMode, useColorModeValue, HStack } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';

import { CavemanContextProvider } from './CavemanContext';
//import { nanoid } from 'nanoid';

import {
  Dashboard,
  Sidebar,
  SessionForm,
  Gym,
  Profile,
  WorkoutInfo,
} from './components/index';

//TODO: App is quite bloated with lots of states - usecontext or redux to define a data flow
function App() {
  // detialsForm used for 'Add details'
  // infoAdd used to keep track, and update the workout cards on the dashboard

  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('teal.200', 'teal.800');

  // Boolean flag for showing the "Create New Session" modal form.

  // Displays the add details form modal for a card, only if that card has an
  // ID property, theoretically they all SHOULD have but this just double checks

  //TODO a lot of props drilling here needs to be managed centrally
  return (
    <CavemanContextProvider>
      <HStack p="0" bg={bgColor}>
        <ToastContainer />
        {/* Used as a container for any and all Toasts (toast notification naming convention) */}

        {/*NOW:
          SessionForm - top lvl modal as it can be accessed with every component
          SessionDetails - is now available only within Dashboard component
          Modal state management is perform via appState in CavemanContext
        */}
        <SessionForm />

        <HStack m="0 !important" w="100%">
          <Router>
            <Sidebar toggleColorMode={toggleColorMode} />
            {/* Router logic is give to the sidebar^ while actual routing happens below */}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/workouts" element={<WorkoutInfo />} />
              <Route path="/gyms" element={<Gym />} />
            </Routes>
          </Router>
        </HStack>
      </HStack>
    </CavemanContextProvider>
  );
}

export default App;
