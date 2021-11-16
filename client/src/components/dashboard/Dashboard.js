import React from 'react';
import './Dashboard.css';
import { Box, Flex } from '@chakra-ui/react';

import SessionList from './sessionlist/SessionList';
// import Gym from '../gyms/Gym';

export default function Dashboard({ navSize, workouts, toggleDetailsForm }) {
  // Simply launches the dashboard component so it renders the list of sessions
  return (
    // <div className="dashboard">
    <Box w={navSize === 'small' ? '97.5%' : '92.5%'} m="0px !important">
      <Flex direction="column" align="center">
        <SessionList
          workouts={workouts}
          toggleDetailsForm={toggleDetailsForm}
        />
      </Flex>
    </Box>
    // </div>
  );
}
