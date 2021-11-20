import React, { useContext } from 'react';
import { Flex } from '@chakra-ui/react';

import Session from '../sessionitem/Session';
import WorkoutComparison from './workoutcomparison/WorkoutComparison';
import { CavemanContext } from '../../../CavemanContext';

export default function SessionList({ toggleDetailsForm }) {
  const { userData } = useContext(CavemanContext);
  const workouts = userData.workouts ? [...userData.workouts] : [];
  return (
    <Flex
      h="100vh"
      w="100%"
      align="center"
      pt="1.5rem"
      direction="column"
      overflowY="scroll"
    >
      <WorkoutComparison workouts={workouts} />
      {workouts.map((workout, index) => {
        return workout ? (
          <Session
            first={index === 0 && true}
            id={workout._id}
            key={workout._id}
            toggleDetailsForm={toggleDetailsForm}
          />
        ) : (
          <p>Go hit the gym bud</p>
        );
      })}
    </Flex>
  );
}
