import React from 'react';
// import { Button, Card } from 'react-bootstrap';
import {
  Flex,
  VStack,
  Button,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

import './Session.css';

export default function Session({ workout, toggleDetailsForm }) {
  // Card used to display session info w/ button for adding details

  const bgColor = useColorModeValue('cyan.100', 'cyan.600');

  return (
    <VStack
      w="40rem"
      bg={bgColor}
      my="2rem"
      py="1.25rem"
      px="1rem"
      borderRadius="12.5px"
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
        mt="1rem"
      >
        Add Details
      </Button>
    </VStack>
    // <Card className="card__container" style={{ width: '35rem' }}>
    //   <Card.Header as="h5">{workout.title}</Card.Header>
    //   <Card.Body>
    //     <Card.Text as="h5">{workout.notes}</Card.Text>
    //     <hr />
    //     <Card.Text as="h5">
    //       {workout.routine.map((routine) => {
    //         return (
    //           <div key={routine._id}>
    //             <h5>Exercise: {routine.lift}</h5>
    //             <h5>Weight: {routine.weight} kg</h5>
    //             <h5>Sets: {routine.sets}</h5>
    //             <h5>Reps: {routine.reps}</h5>
    //             <h5>Rest per set: {routine.rest}s</h5>
    //             <hr />
    //           </div>
    //         );
    //       })}
    //     </Card.Text>
    //     <Button variant="dark">Add details</Button>
    //   </Card.Body>
    // </Card>
  );
}
