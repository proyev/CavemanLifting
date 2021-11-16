import React, { useState, useEffect } from 'react';

import Heatmap from './heatmap/Heatmap';
import {
  Flex,
  // HStack,
  VStack,
  Box,
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
        m={0}
        direction="row"
        justify="space-evenly"
        align="center"
        w="100%"
      >
        <Flex
          w="40rem"
          p="2.5rem"
          bg={tableBGColor}
          align="center"
          justify="space-evenly"
          borderRadius="25px"
        >
          <Image h="10rem" borderRadius="10px" src={profilePic} />

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
            <Text mb="0.25rem" fontWeight="semi-bold">
              {userData.username}
            </Text>
            <Divider />
            <Heading size="sm" mb="0rem">
              Bio:
            </Heading>

            <Text size="lg" mb="0rem">
              {userData.bio}
            </Text>
          </VStack>
        </Flex>
        <Flex
          h="100%"
          w="30rem"
          borderRadius="25px"
          direction="column"
          align="center"
          justify="space-evenly"
          bg={tableBGColor}
        >
          <Box>PRS</Box>

          <Text>data</Text>
        </Flex>
      </Flex>
      <Flex m={0} w="100%" justify="space-evenly" align="flex-end">
        {latest ? (
          <Table
            size="lg"
            variant="simple"
            colorScheme="teal"
            bg={tableBGColor}
            borderRadius="25px"
            w="40rem"
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
        <Flex
          h="82.5%"
          w="30rem"
          borderRadius="25px"
          direction="column"
          align="center"
          justify="space-evenly"
          bg={tableBGColor}
        >
          <Box>Ahhh</Box>

          <Text>Im charting</Text>
        </Flex>
      </Flex>
      {workouts.length && <Heatmap workouts={workouts} />}
    </Flex>
  );
}
