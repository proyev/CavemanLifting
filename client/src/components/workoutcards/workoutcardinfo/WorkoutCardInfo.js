/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Text,
  Image,
  Heading,
  Badge,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';

export default function WorkoutCardInfo({ workout }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function badgeColor(badge) {
    if (badge === 'Beginner') return 'green';
    if (badge === 'Intermediate') return 'orange';
    if (badge === 'Advanced') return 'red';

    if (badge === 'Core') return 'blue';
    if (badge === 'Upper-Body') return 'green';
    if (badge === 'Lower-Body') return 'orange';
    if (badge === 'Full-Body') return 'red';

    if (badge === 'Arms') return 'green';

    return 'red';
  }
  return (
    <>
      <Box
        bg="gray.700"
        maxW="lg"
        h="xl"
        borderRadius="xl"
        overflow="hidden"
        mx={12}
        mb="5rem"
        boxShadow="md"
      >
        <Image src={workout.img} />
        <Box p={5}>
          {workout.badge.map((badge) => {
            return (
              <Badge
                key={badge._id}
                variant="solid"
                colorScheme={badgeColor(badge)}
                rounded="full"
                px={2}
                mr={2}
                boxShadow="md"
              >
                {badge}
              </Badge>
            );
          })}
          <Heading
            //   as="h4"
            fontWeight="semi-bold"
            fontSize="xl"
            mb="2"
            mt="4"
            letterSpacing="wide"
          >
            {workout.title}
          </Heading>

          <Text isTruncated letterSpacing="tight" fontWeight="regular">
            {workout.body}
          </Text>
        </Box>
        <Box textAlign="center" mt="5">
          <Button
            onClick={onOpen}
            leftIcon={<FaInfoCircle />}
            size="md"
            boxShadow="md"
            _hover={{ boxShadow: 'xl' }}
          >
            More Info...
          </Button>
        </Box>
      </Box>
      <Modal
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{workout.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading textAlign="center" fontSize="xl" mb={2}>
              Description
            </Heading>
            <Text mb={2}>{workout.body}</Text>
            <Heading textAlign="center" fontSize="xl" mb={2}>
              Form
            </Heading>
            <OrderedList>
              <ListItem fontSize="lg">
                Stand with your feet shoulder-width apart and the barbell in
                front of your feet.
              </ListItem>
              <ListItem fontSize="lg">
                Broaden your chest and drop your hips back slightly.
              </ListItem>
              <ListItem fontSize="lg">
                Hinge at your hips to bend forward and take hold of the barbell.
              </ListItem>
              <ListItem fontSize="lg">
                Press your feet firmly into the floor as you drop your hips
                back.
              </ListItem>
              <ListItem fontSize="lg">
                Press your hips forward to come into a standing position.
              </ListItem>
              <ListItem fontSize="lg">
                Hold the bar just below your hips, keeping your legs, back, and
                knees straight.
              </ListItem>
              <ListItem fontSize="lg">
                Return to the starting position by pushing your hips back,
                bending your knees, and squatting down to place the bar on the
                floor.
              </ListItem>
            </OrderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
