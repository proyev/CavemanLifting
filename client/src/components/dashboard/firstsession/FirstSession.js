import React from 'react';
import { Card } from 'react-bootstrap';
import {
  Box,
  Flex,
  Image,
  Badge,
  Button,
  Text,
  Center,
  Divider,
} from '@chakra-ui/react';
import './FirstSession.css';

export default function FirstSession({ workout, toggleDetailsForm }) {
  // Unique styling done for first session in list to make it stand apart from the rest

  return (
    <Flex
      w="50rem"
      my="2rem"
      py="1.25rem"
      // bg="tomato"
      direction="column"
      align="center"
      borderRadius="12.5px"
    >
      <Text fontSize="lg" fontWeight="700">
        {workout.title}
      </Text>
      <Flex direction="column" align="center" m="1rem">
        <Text fontSize="lg" fontWeight="500" mb="1rem">
          {workout.notes}
        </Text>
        <Divider borderStyle="none" />
        <Flex display="flex" align="center" justify="space-evenly">
          {workout.routine.map((routine) => {
            return (
              <Flex
                display="flex"
                direction="column"
                align="center"
                key={routine._id}
                m="1rem"
                // mr="1rem"
                fontSize="md"
              >
                <Text>{routine.lift}</Text>
                <Text>{routine.weight} kg</Text>
                <Text>Sets: {routine.sets}</Text>
                <Text>Reps: {routine.reps}</Text>
                <Text>Rest per set: {routine.rest}s</Text>
                <hr />
              </Flex>
            );
          })}
        </Flex>
        <Divider borderStyle="none" my="1rem" />

        <Button
          colorScheme="green"
          onClick={() => toggleDetailsForm(workout._id)}
          mt="1rem"
          fontSize="lg"
        >
          Add details
        </Button>
      </Flex>
    </Flex>
  );
}
