import React, { useContext } from 'react';
import { Flex } from '@chakra-ui/react';

import Session from '../sessionitem/Session';
import WorkoutComparison from './workoutcomparison/WorkoutComparison';
import { CavemanContext } from '../../../CavemanContext';

export default function SessionList() {
  const { userData } = useContext(CavemanContext);
  const workouts = userData!.workouts ? [...userData!.workouts] : [];
  return (
    <Flex
      align='center'
      direction='column'
      h='100vh'
      overflowY='scroll'
      pt='1.5rem'
      w='100%'
    >
      <WorkoutComparison workouts={workouts} />
      {workouts.map((workout, index) => {
        const id = workout._id ? workout._id : String(index);
        return workout ? (
          <Session
            first={index === 0 && true}
            id={id}
            key={id}
          />
        ) : (
          <p>Go hit the gym bud</p>
        );
      })}
    </Flex>
  );
}
