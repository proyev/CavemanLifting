import React, { useState, useEffect } from 'react';

import Heatmap from './heatmap/Heatmap';
import {
  Flex,
  // HStack,
  VStack,
  Text,
  Image,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  useColorModeValue,
} from '@chakra-ui/react';

import profilePic from '../../assets/caveman_profile_pic.PNG';

export default function Profile({ workouts, userData }) {
  const [latest, setLatest] = useState({});

  const tableBGColor = useColorModeValue('teal.400', 'teal.900');

  useEffect(() => {
    setLatest(workouts[0]);
    console.log(latest);
  }, [workouts]);

  return (
    <Flex
      w="100vw"
      h="99vh"
      direction="column"
      align="center"
      justifyContent="space-around"
    >
      <Flex
        w="50rem"
        p="2.5rem"
        bg={tableBGColor}
        justify="space-evenly"
        borderRadius="25px"
      >
        <Image
          alignSelf="flex-start"
          // mr="10rem"
          h="10rem"
          borderRadius="10px"
          src={profilePic}
        />

        <VStack w="20rem" align="flex-start" justify="center">
          <Text mb="0.25rem">Name: {userData.firstname}</Text>
          <Text mb="0.25rem">Username: {userData.username}</Text>
          <Text mb="1rem !important">{userData.bio}</Text>
        </VStack>
      </Flex>
      {latest ? (
        <Table
          size="md"
          variant="simple"
          colorScheme="teal"
          bg={tableBGColor}
          borderRadius="25px"
          w="75%"
        >
          <Thead>
            <Tr>
              <Th>Lift</Th>
              <Th>Weight</Th>
              <Th>Sets</Th>
              <Th>Reps</Th>
              <Th>Rest</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr></Tr>
            {latest.routine &&
              latest.routine.map((routine) => {
                console.log(routine);
                return (
                  <Tr key={routine._id}>
                    <Td>{routine.lift}</Td>
                    <Td>{routine.weight}</Td>
                    <Td>{routine.sets}</Td>
                    <Td>{routine.reps}</Td>
                    <Td>{routine.rest}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      ) : (
        <Text>Profile Loading</Text>
      )}
      {workouts.length && <Heatmap workouts={workouts} />}
    </Flex>
  );
}
