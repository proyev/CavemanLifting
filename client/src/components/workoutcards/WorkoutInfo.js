/* eslint-disable no-unused-vars */
import React from 'react';
import { Flex } from '@chakra-ui/react';
import WorkoutCardInfo from './workoutcardinfo/WorkoutCardInfo';

export default function WorkoutInfo({ workoutCards }) {
  console.log(workoutCards);

  return (
    <Flex
      bg="tomato"
      h="100%"
      w="100%"
      wrap="wrap"
      align="center"
      justify="space-evenly"
    >
      {workoutCards.map((workout) => {
        return (
          <WorkoutCardInfo
            key={workout._id}
            workout={workout}
          ></WorkoutCardInfo>
        );
      })}
    </Flex>
  );
}
