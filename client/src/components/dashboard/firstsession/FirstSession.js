import React from 'react';
import {
  Flex,
  VStack,
  Button,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import './FirstSession.css';

export default function FirstSession({ workout, toggleDetailsForm }) {
  // Unique styling done for first session in list to make it stand apart from the rest

  const bgColor = useColorModeValue('cyan.200', 'cyan.800');

  return (
    <VStack
      w="60rem"
      my="2rem"
      py="1.25rem"
      px="1rem"
      bg={bgColor}
      borderRadius="12.5px"
    >
      <Text fontSize="xl" fontWeight="700">
        {workout.title}
      </Text>
      <Flex direction="column" align="center" m="1rem">
        <Text fontSize="lg" fontWeight="500" mb="1rem">
          {workout.notes}
        </Text>
        <Divider borderStyle="none" />
        <Flex align="center" justify="space-evenly">
          {workout.routine.map((routine) => {
            return (
              <Flex
                display="flex"
                direction="column"
                align="center"
                key={routine._id}
                m="1rem"
                fontSize="lg"
              >
                <Text>{routine.lift}</Text>
                <Text>{routine.weight} kg</Text>
                <Text>Sets: {routine.sets}</Text>
                <Text>Reps: {routine.reps}</Text>
                <Text>Rest per set: {routine.rest}s</Text>
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
    </VStack>
  );
}
