import React, { useContext } from 'react';
import {
  Flex,
  VStack,
  Button,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';
import { CavemanContext } from '../../../CavemanContext';
import { nanoid } from 'nanoid';

export default function Session({ id, first }: { id: string, first: boolean}) {
  const bgColor = useColorModeValue('cyan.50', 'cyan.600');
  const bgFirst = useColorModeValue('cyan.100', 'cyan.800');
  const style = first ? styleFirst : styleStandard;

  const { appStateDispatch, findWorkout } = useContext(CavemanContext);

  const workout = findWorkout && {...findWorkout(id)};

  return (
    <VStack bg={first ? bgFirst : bgColor} {...style}>
      <Text {...style.header}>
        {workout?.title} - {moment(workout?.date).format('MMM Do')}
      </Text>
      <VStack>
        <Text fontWeight="400" mb="1rem">
          {workout?.notes}
        </Text>
        <Divider borderStyle="none" />
        <Flex align="center" justify="space-evenly">
          {workout?.routine?.map(routine => {
            return (
              // if direction is set as a part of style - error, dunno what is the reason for that
              <Flex
                {...style.flex}
                direction='column'
                key={nanoid()}
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
        {...style.button}
        onClick={() =>
          appStateDispatch && appStateDispatch({ type: 'TOGGLE_EDIT_SESSION', id })
        }
      >
        Add Details
      </Button>
    </VStack>
  );
}

const styleStandard = {
  w: '45rem',
  my: '2rem',
  py: '1.25rem',
  px: '1rem',
  borderRadius: '12.5px',
  boxShadow: 'xl',
  header: { fontSize: 'lg', fontWeight: '600' },
  flex: {
    direction: 'column',
    align: 'center',
    m: '1rem',
    fontSize: 'lg',
  },
  button: {
    my: '1.5rem',
    colorScheme: 'green',
  },
};

const styleFirst = {
  w: '60rem',
  my: '2rem',
  py: '1.25rem',
  px: '1rem',
  borderRadius: '12.5px',
  boxShadow: 'dark-lg',
  header: { fontSize: 'xl', fontWeight: '700' },
  button: { my: '1.5rem', colorScheme: 'green', fontSize: 'lg' },
  flex: {
    align: 'center',
    m: '1rem',
    fontSize: 'lg',
  },
};
