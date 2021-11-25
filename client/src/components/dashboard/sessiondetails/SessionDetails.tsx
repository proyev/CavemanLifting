import React, { useState, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Select,
  Button,
  NumberInput,
  NumberInputField,
  Divider,
} from '@chakra-ui/react';
import { CavemanContext } from '../../../CavemanContext';
import { showNotification } from '../../../Utils/Helpers';

// TODO detailsForm should be a part of Context as
export default function SessionDetails({ id }: {id: string | undefined}) {
  const initalRoutine = {
    lift: '',
    weight: '',
    sets: '',
    reps: '',
    rest: '',
  };
  const [routine, setRoutine] = useState(initalRoutine);

  const { dispatch, appState, appStateDispatch } = useContext(CavemanContext);

  function handleRoutine(e: React.ChangeEvent<any>): void {
    const num = isNaN(Number(e.target.value))
      ? e.target.value
      : Number(e.target.value);
    setRoutine({ ...routine, [e.target.name]: num });
  }
  function handleSubmit(): void {
    if (
      routine.lift ||
      routine.weight ||
      routine.sets ||
      routine.reps ||
      routine.rest
    ) {
      alert('Please fill all fields');
    } else {
      if(dispatch) dispatch({ type: 'ADD_ROUTINE', payload: routine, id });
      showNotification('smth was created');
      setRoutine(initalRoutine);
    }
  }
  return (
    <Modal
      isOpen={appState?.showEditSession ? true : false}
      onClose={() => appStateDispatch && appStateDispatch({ type: 'TOGGLE_EDIT_SESSION' })}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>Enter Session Details</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Lift</FormLabel>
            <Select
              name='lift'
              placeholder='Select a lift...'
              size='lg'
              value={routine.lift}
              onChange={handleRoutine}
            >
              <option value='Deadlift'>Deadlift</option>
              <option value='Bench'>Bench</option>
              <option value='Squat'>Squat</option>
              <option value='Overhead'>Overhead</option>
              <option value='Bicep Curl'>Bicep Curl</option>
            </Select>

            <Divider my='2rem' />

            <FormLabel>Weight (kg)</FormLabel>
            <NumberInput
              allowMouseWheel
              placeholder='Weight..'
              type='number'
              step={2.5}
              size='lg'
              variant='filled'
              value={routine.weight}
            >
              <NumberInputField
                name='weight'
                placeholder='Weight..'
                onChange={handleRoutine}
              />
            </NumberInput>

            <FormLabel>Sets</FormLabel>
            <NumberInput
              allowMouseWheel
              step={1}
              size='lg'
              variant='filled'
              value={routine.sets}
            >
              <NumberInputField
                name='sets'
                placeholder='Number of sets..'
                onChange={handleRoutine}
              />
            </NumberInput>

            <FormLabel>Reps</FormLabel>
            <NumberInput
              allowMouseWheel
              step={1}
              size='lg'
              variant='filled'
              value={routine.reps}
            >
              <NumberInputField
                name='reps'
                placeholder='Number of reps..'
                onChange={handleRoutine}
              />
            </NumberInput>

            <FormLabel>Rest</FormLabel>
            <NumberInput
              allowMouseWheel
              step={5}
              size='lg'
              variant='filled'
              value={routine.rest}
            >
              <NumberInputField
                name='rest'
                placeholder='Rest in seconds..'
                onChange={handleRoutine}
              />
            </NumberInput>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='green' onClick={handleSubmit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
