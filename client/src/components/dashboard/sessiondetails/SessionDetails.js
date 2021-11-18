import React, { useState } from 'react';
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
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
} from '@chakra-ui/react';

export default function SessionDetails({
  detailsForm,
  toggleDetailsForm,
  addInfo,
}) {
  //TODO this could be consolidated into one object and assigned names to the form input to refer to object props.. Then we can just refer to them as e.target.name and just have one handleChange function
  const [lift, setLift] = useState('');
  const [weight, setWeight] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [rest, setRest] = useState(0);

  const handleClose = () => toggleDetailsForm();

  function handleLift(e) {
    setLift(e.target.value);
  }
  function handleWeight(e) {
    setWeight(e);
  }
  function handleSets(e) {
    setSets(e);
  }
  function handleReps(e) {
    setReps(e);
  }
  function handleRest(e) {
    setRest(e);
  }

  function handleSubmit() {
    if (!lift || !weight || !sets || !reps || !rest) {
      return alert('Please fill all fields');
    }

    addInfo({ lift, weight, sets, reps, rest }, detailsForm);

    setLift('');
    setWeight(0);
    setSets(0);
    setReps(0);
    setRest(0);
    handleClose();
  }
  //TODO form input can be placed as a separate element and looped over to get the right data
  //TODO since our lift is limited to 5 exercises only we can use list input to restrict user. Currently if user makes a mistake it will accept it.
  return (
    <>
      <Modal isOpen={true} onClose={handleClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader textAlign="center">Enter Session Details</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Lift</FormLabel>
              <Input
                type="text"
                size="lg"
                variant="filled"
                placeholder="Enter a lift..."
                onChange={handleLift}
                value={lift}
              />

              <Divider my="2rem" />

              <FormLabel>Weight (kg)</FormLabel>
              <NumberInput
                step={2.5}
                size="lg"
                allowMouseWheel
                variant="filled"
                onChange={handleWeight}
                value={weight}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <FormLabel>Sets</FormLabel>
              <NumberInput
                step={1}
                size="lg"
                allowMouseWheel
                variant="filled"
                onChange={handleSets}
                value={sets}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <FormLabel>Reps</FormLabel>
              <NumberInput
                step={1}
                size="lg"
                allowMouseWheel
                variant="filled"
                onChange={handleReps}
                value={reps}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <FormLabel>Rest</FormLabel>
              <NumberInput
                step={5}
                size="lg"
                allowMouseWheel
                variant="filled"
                onChange={handleRest}
                value={rest}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={handleSubmit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
