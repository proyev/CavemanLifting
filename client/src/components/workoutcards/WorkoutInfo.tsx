import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';

import WorkoutCardInfo from './workoutcardinfo/WorkoutCardInfo';
import ApiService from '../../ApiService';

import { Exercise } from '../../Utils/interface';


export default function WorkoutInfo() {
  const [workoutCards, setWorkoutCards] = useState<Exercise[] | null>(null);
  // this is to remove props drilling since its the separate table in the db API call is made here
  // I guess res should be of type workout too
  useEffect(() => {
    ApiService.getWorkoutInfo()
      .then(res => {
        setWorkoutCards([...res]);
    });
  }, []);

  // Check if something can be done with the styling props to be outsourced
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
      {workoutCards && workoutCards.map(workout => {
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
