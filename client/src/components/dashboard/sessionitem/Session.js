import React from 'react';
import {
  Flex,
  VStack,
  Button,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Session({ workout, toggleDetailsForm }) {
  // Card used to display session info w/ button for adding details

  const bgColor = useColorModeValue('cyan.50', 'cyan.600');

  return (
    <VStack
      w="45rem"
      bg={bgColor}
      my="2rem"
      py="1.25rem"
      px="1rem"
      borderRadius="12.5px"
      boxShadow="xl"
    >
      <Text fontSize="lg" fontWeight="600">
        {workout.title}
      </Text>
      <VStack>
        <Text fontWeight="400" mb="1rem">
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
      </VStack>
      <Button
        colorScheme="green"
        onClick={() => toggleDetailsForm(workout._id)}
        my="1.5rem"
      >
        Add Details
      </Button>
    </VStack>
  );
}
