import React, { useContext } from 'react';
import './Dashboard.css';
import { Box, Flex } from '@chakra-ui/react';

import SessionDetails from './sessiondetails/SessionDetails';
import SessionList from './sessionlist/SessionList';
import { CavemanContext } from '../../CavemanContext';

export default function Dashboard({ toggleDetailsForm }) {

  const { appState } = useContext(CavemanContext);
  // Simply launches the dashboard component so it renders the list of sessions
  return (
    // <div className="dashboard">
    <Box
      m="0px !important"
      w={appState.showNavbar ? '97.5%' : '92.5%'}
    >
      <SessionDetails />
      <Flex direction="column" align="center">
        <SessionList
          toggleDetailsForm={toggleDetailsForm}
        />
      </Flex>
    </Box>
    // </div>
  );
}
