import React, { useState, useEffect } from 'react';

import Heatmap from './heatmap/Heatmap';
import {
  Flex,
  // HStack,
  VStack,
  Heading,
  Text,
  Image,
  Table,
  Tr,
  Th,
  Td,
  TableCaption,
  Thead,
  Tbody,
  Divider,
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
      w="95%"
      h="99vh"
      direction="column"
      align="center"
      justifyContent="space-around"
    >
      <Flex
        w="50rem"
        p="2.5rem"
        bg={tableBGColor}
        align="center"
        justify="space-evenly"
        borderRadius="25px"
      >
        <Image
          // alignSelf="flex-start"
          // mr="10rem"
          h="10rem"
          borderRadius="10px"
          src={profilePic}
        />

        <VStack
          w="30rem"
          m="1rem"
          p="1rem"
          align="flex-start"
          justify="center"
          borderColor="gray.700"
        >
          <Heading size="sm" mb="0rem">
            Username:
          </Heading>
          {/* <Divider /> */}
          <Text mb="0.25rem" fontWeight="semi-bold">
            {userData.username}
          </Text>
          {/* <Heading size="sm">Personal Records:</Heading> */}
          <Divider />
          <Heading size="sm" mb="0rem">
            Bio:
          </Heading>

          <Text size="lg" mb="0rem">
            {userData.bio}
          </Text>
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
          <TableCaption placement="top">Latest workout</TableCaption>
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
                  <Tr size="lg" key={routine._id}>
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
