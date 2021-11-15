import React from 'react';
import { Flex } from '@chakra-ui/react';

import Session from '../sessionitem/Session';
import Firstsession from '../firstsession/FirstSession';

import './SessionList.css';

export default function SessionList({ workouts, toggleDetailsForm }) {
  // Displays session as components, sets first in list to a seperate component with it's
  // own unique styling
  return (
    // <div className="scroller">
    // <div className="session__container">
    <Flex
      h="100vh"
      w="100%"
      align="center"
      direction="column"
      overflowY="scroll"
    >
      {workouts.map((workout) => {
        if (workouts.indexOf(workout) === 0) {
          return (
            <Firstsession
              workout={workout}
              key={workout._id}
              toggleDetailsForm={toggleDetailsForm}
            />
          );
        }
        return workout ? (
          <Session
            workout={workout}
            key={workout._id}
            toggleDetailsForm={toggleDetailsForm}
          />
        ) : (
          <p>Go hit the gym bud</p>
        );
      })}
    </Flex>
    // </div>
    // </div>
  );
}

// return (
// user === '' ? Login : Logout
//
// )
