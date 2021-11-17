/* eslint-disable no-unused-vars */
import React from 'react';
import { Flex } from '@chakra-ui/react';
import WorkoutCardInfo from './workoutcardinfo/WorkoutCardInfo';

export default function WorkoutInfo({ workoutCards }) {
  console.log(workoutCards);

  return (
    <Flex
      h="100vh"
      w="90vw"
      pt={10}
      wrap="wrap"
      align="center"
      justify="space-evenly"
      overflowY="scroll"
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
// BRB
