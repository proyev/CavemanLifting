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

import { Exercise } from '../../../Utils/interface';

type Props = {
  key?: string;
  workout: Exercise;
}

//use later - will help to throw badgeColor away
//needs to be there in BE too
// enum Badge {
//   Beginner = 'green',
//   Intermediate = 'orange',
//   Advanced = 'red',
//   Core = 'blue',
//   UpperBody = 'green',
//   LowerBody = 'orange',
//   FullBody = 'red',
//   Arms = 'green'
// }

export default function WorkoutCardInfo({ workout, key }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //this is nasty refactor to be an object
  function badgeColor(badge: string): string {
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
  //massive element list items can be iterated over the loop
  return (
    <>
      <Box
        bg='gray.700'
        borderRadius='xl'
        boxShadow='md'
        h='xl'
        maxW='lg'
        mb='5rem'
        mx={12}
        overflow='hidden'
      >
        <Image src={workout.img} />
        <Box p={5}>
          {/*badge type will be needed too */}
          {workout.badge.map(badge => {
            return (
              <Badge
                boxShadow='md'
                colorScheme={badgeColor(badge)}
                key={key}
                mr={2}
                px={2}
                rounded='full'
                variant='solid'
              >
                {badge}
              </Badge>
            );
          })}
          <Heading
            //   as='h4'
            fontWeight='semi-bold'
            fontSize='xl'
            mb='2'
            mt='4'
            letterSpacing='wide'
          >
            {workout.title}
          </Heading>

          <Text
            isTruncated
            fontWeight='regular'
            letterSpacing='tight'
          >
            {workout.body}
          </Text>
        </Box>
        <Box
          mt='5'
          textAlign='center'
        >
          <Button
            _hover={{ boxShadow: 'xl' }}
            boxShadow='md'
            leftIcon={<FaInfoCircle />}
            size='md'
            onClick={onOpen}
          >
            More Info...
          </Button>
        </Box>
      </Box>
      <Modal
        isCentered
        size='xl'
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{workout.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading
              fontSize='xl'
              mb={2}
              textAlign='center'
            >
              Description
            </Heading>
            <Text mb={2}>{workout.body}</Text>
            <Heading
              fontSize='xl'
              mb={2}
              textAlign='center'
            >
              Form
            </Heading>
            <OrderedList>
              <ListItem fontSize='lg'>
                Stand with your feet shoulder-width apart and the barbell in
                front of your feet.
              </ListItem>
              <ListItem fontSize='lg'>
                Broaden your chest and drop your hips back slightly.
              </ListItem>
              <ListItem fontSize='lg'>
                Hinge at your hips to bend forward and take hold of the barbell.
              </ListItem>
              <ListItem fontSize='lg'>
                Press your feet firmly into the floor as you drop your hips
                back.
              </ListItem>
              <ListItem fontSize='lg'>
                Press your hips forward to come into a standing position.
              </ListItem>
              <ListItem fontSize='lg'>
                Hold the bar just below your hips, keeping your legs, back, and
                knees straight.
              </ListItem>
              <ListItem fontSize='lg'>
                Return to the starting position by pushing your hips back,
                bending your knees, and squatting down to place the bar on the
                floor.
              </ListItem>
            </OrderedList>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='teal'
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
