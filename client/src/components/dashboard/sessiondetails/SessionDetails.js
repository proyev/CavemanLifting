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
  Input,
  Button,
  NumberInput,
  NumberInputField,
  Divider,
} from '@chakra-ui/react';
import { CavemanContext } from '../../../CavemanContext';
import { showNotification } from '../../../Utils/Helpers';

//TODO detailsForm should be a part of Context as
export default function SessionDetails({ detailsForm }) {
  const [routine, setRoutine] = useState({
    lift: '',
    weight: '',
    sets: '',
    reps: '',
    rest: '',
  });

  const { dispatch, appState, appStateDispatch } = useContext(CavemanContext);

  function handleRoutine(e) {
    const number = isNaN(Number(e.target.value))
      ? e.target.value
      : Number(e.target.value);
    setRoutine({ ...routine, [e.target.name]: number });
  }

  function handleSubmit() {
    if (
      !routine.lift ||
      !routine.weight ||
      !routine.sets ||
      !routine.reps ||
      !routine.rest
    ) {
      return alert('Please fill all fields');
    }
    dispatch({ type: 'ADD_ROUTINE', payload: routine, id: detailsForm });
    showNotification();

    //addInfo(routine, detailsForm);
  }
  //TODO form input can be placed as a separate element and looped over to get the right data
  //TODO since our lift is limited to 5 exercises only we can use list input to restrict user. Currently if user makes a mistake it will accept it.
  return (
    <Modal
      isOpen={appState.showEditSession}
      onClose={appStateDispatch({type: 'TOGGLE_EDIT_SESSION'})}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Enter Session Details</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Lift</FormLabel>
            <Input
              type="text"
              name="lift"
              size="lg"
              variant="filled"
              placeholder="Enter a lift..."
              onChange={e => handleRoutine(e)}
              value={routine.lift}
            />

            <Divider my="2rem" />

            <FormLabel>Weight (kg)</FormLabel>
            <NumberInput
              type="number"
              step={2.5}
              size="lg"
              allowMouseWheel
              variant="filled"
              value={routine.weight}
              placeholder="Weight.."
            >
              <NumberInputField
                name="weight"
                onChange={handleRoutine}
                placeholder="Weight.."
              />
            </NumberInput>

            <FormLabel>Sets</FormLabel>
            <NumberInput
              step={1}
              size="lg"
              allowMouseWheel
              variant="filled"
              value={routine.sets}
            >
              <NumberInputField
                name="sets"
                onChange={handleRoutine}
                placeholder="Number of sets.."
              />
            </NumberInput>

            <FormLabel>Reps</FormLabel>
            <NumberInput
              step={1}
              size="lg"
              allowMouseWheel
              variant="filled"
              value={routine.reps}
            >
              <NumberInputField
                name="reps"
                onChange={handleRoutine}
                placeholder="Number of reps.."
              />
            </NumberInput>

            <FormLabel>Rest</FormLabel>
            <NumberInput
              step={5}
              size="lg"
              allowMouseWheel
              variant="filled"
              value={routine.rest}
            >
              <NumberInputField
                name="rest"
                onChange={handleRoutine}
                placeholder="Rest in seconds.."
              />
            </NumberInput>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="green"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
