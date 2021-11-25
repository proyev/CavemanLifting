// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useColorMode, useColorModeValue, HStack } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';

import { CavemanContextProvider } from './CavemanContext';

import {
  Dashboard,
  Sidebar,
  SessionForm,
  Gym,
  Profile,
  WorkoutInfo,
} from './components/index';

// TODO: App is quite bloated with lots of states - usecontext or redux to define a data flow
function App() {

  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('teal.200', 'teal.800');

  return (
    <CavemanContextProvider>
      <HStack
        bg={bgColor}
        p='0'
      >
        <ToastContainer />
        {/* Used as a container for any and all Toasts (toast notification naming convention) */}

        {/*NOW:
          SessionForm - top lvl modal as it can be accessed with every component
          SessionDetails - is now available only within Dashboard component
          Modal state management is perform via appState in CavemanContext
        */}
        <SessionForm />

        <HStack
          m='0 !important'
          w='100%'
        >
          <Router>
            <Sidebar toggleColorMode={toggleColorMode} />
            {/* Router logic is give to the sidebar^ while actual routing happens below */}
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/workouts' element={<WorkoutInfo />} />
              <Route path='/gyms' element={<Gym />} />
            </Routes>
          </Router>
        </HStack>
      </HStack>
    </CavemanContextProvider>
  );
}

export default App;
