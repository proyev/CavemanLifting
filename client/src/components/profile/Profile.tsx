import React, { useState, useEffect, useContext } from 'react';
import Chart from './chart/Chart';

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

import { CavemanContext } from '../../CavemanContext';
import { Workout } from '../../Utils/interface';

export default function Profile() {
  //types needed
  const [latest, setLatest] = useState<Workout>();

  const { userData } = useContext(CavemanContext);

  const tableBGColor = useColorModeValue('teal.400', 'teal.900');
  const textBG = useColorModeValue('teal.300', 'teal.700');

  useEffect(() => {
    if (userData!.workouts && userData!.workouts.length > 0)
      setLatest(userData!.workouts[0]);
  }, [userData]);

  return (
    <Flex
      align='center'
      direction='column'
      justifyContent='space-around'
      h='99vh'
      w='95%'
    >
      <Flex
        align='center'
        direction='row'
        justify='space-evenly'
        w='100%'
      >
        <Flex
          align='center'
          bg={tableBGColor}
          borderRadius='25px'
          justify='space-evenly'
          p='2.5rem'
          w='40rem'
        >
          <Image
            borderRadius='10px'
            h='10rem'
            src={require('../../assets/caveman_profile_pic.png')}
          />

          <VStack
            align='flex-start'
            borderColor='gray.700'
            justify='center'
            m='1rem'
            p='1rem'
            w='30rem'
          >
            <Heading
              mb='0rem'
              size='sm'
            >
              Username:
            </Heading>
            <Text
              fontWeight='semi-bold'
              mb='0.25rem'
            >
              {userData!.username}
            </Text>
            <Divider />
            <Heading
              size='sm'
              mb='0'
            >
              Bio:
            </Heading>

            <Text
              mb='0'
              size='lg'
            >
              {userData!.bio}
            </Text>
          </VStack>
        </Flex>
        <Flex
          align='center'
          bg={tableBGColor}
          borderRadius='25px'
          direction='column'
          justify='space-evenly'
          h='100%'
          w='30rem'
        >
          <Flex
            align='center'
            direction='column'
            justify='space-evenly'
            w='75%'
          >
            <Heading size='lg'>Personal Records</Heading>
            {/*type for personal records */}
            {userData!.workouts &&
              userData!.workouts.map(workout => {
                workout.routine.map((routine, index) => {
                  return (
                    <Flex
                      key={index}
                      bg={textBG}
                      w='100%'
                      h='2.5rem'
                      m='1rem'
                      justify='space-evenly'
                      align='center'
                      borderRadius='25px'
                    >
                      <Heading
                        fontSize='lg'
                        letterSpacing='wide'
                        size='md'
                      >
                        {routine.lift}
                      </Heading>
                      <Heading
                        size='md'
                        fontSize='md'
                        fontWeight='semi-bold'
                      >
                        {routine.weight}
                      </Heading>
                      <Heading
                        size='md'
                        fontSize='md'
                        fontWeight='semi-bold'
                      >
                        {routine.reps}
                      </Heading>
                    </Flex>
                  );
                })
              })}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        align='flex-end'
        justify='space-evenly'
        m={0}
        minH='17.5rem'
        w='100%'
      >
        {latest ? (
          <Table
            bg={tableBGColor}
            borderBottomRadius='25px'
            colorScheme='teal'
            size='md'
            variant='simple'
            w='40rem'
          >
            <TableCaption
              bg={tableBGColor}
              borderTopRadius='25px'
              placement='top'
            >
              Latest workout
            </TableCaption>
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
              {/*TYPES */}
              {latest.routine &&
                latest.routine.map((routine, index) => {
                  return (
                    <Tr size="lg" key={index}>
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
          align='flex-start'
          bg={tableBGColor}
          borderRadius='25px'
          direction='column'
          justify='space-evenly'
          h='95%'
          w='30rem'
        >
        <Chart workouts={userData!.workouts} />
        </Flex>
      </Flex>
      {userData!.workouts && <Heatmap workouts={userData!.workouts} />}
    </Flex>
  );
}
