/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Text,
  Image,
  Heading,
  Badge,
  Button,
  Flex,
} from '@chakra-ui/react';

export default function WorkoutCardInfo({ workout }) {
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
        <Button size="md" boxShadow="md" _hover={{ boxShadow: 'xl' }}>
          More Info...
        </Button>
      </Box>
    </Box>
  );
}
