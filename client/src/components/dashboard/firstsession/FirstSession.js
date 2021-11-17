import React from 'react';
import {
  Flex,
  VStack,
  Button,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';

export default function FirstSession({ workout, toggleDetailsForm }) {
  // Unique styling done for first session in list to make it stand apart from the rest

  const bgColor = useColorModeValue('cyan.100', 'cyan.800');

  return (
    <VStack
      w="60rem"
      my="2rem"
      py="1.25rem"
      px="1rem"
      bg={bgColor}
      borderRadius="12.5px"
      boxShadow="dark-lg"
    >
      <Text fontSize="xl" fontWeight="700">
        {workout.title} - {moment(workout.date).format('MMM Do')}
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

        <Button
          colorScheme="green"
          onClick={() => toggleDetailsForm(workout._id)}
          my="1.5rem"
          fontSize="lg"
        >
          Add Details
        </Button>
      </Flex>
    </VStack>
  );
}
