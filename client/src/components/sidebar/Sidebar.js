import React from 'react';
import {
  Flex,
  Divider,
  Avatar,
  Heading,
  Text,
  IconButton,
  Switch,
  useColorModeValue,
  Link,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FiMenu, FiHome, FiUser } from 'react-icons/fi';
import { FaCity, FaDumbbell, FaPlusSquare } from 'react-icons/fa';
import profilePic from '../../assets/caveman_profile_pic.PNG';
import NavItem from './navitems/NavItem';

export default function Sidebar({
  navSize,
  setSize,
  toggleForm,
  toggleColorMode,
}) {
  const bgColor = useColorModeValue('green.400', 'green.700');

  return (
    <Flex
      pos="sticky"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRightRadius={navSize === 'small' ? '5px' : '15px'}
      w={navSize === 'small' ? '75px' : '200px'}
      direction="column"
      justifyContent="space-between"
      bg={bgColor}
    >
      <Flex
        p="5%"
        direction="column"
        align={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <Switch
          size="md"
          ml={navSize === 'small' ? '0%' : '35%'}
          onChange={toggleColorMode}
        />
        <IconButton
          bg={bgColor}
          mt={5}
          mb={0}
          mr={5}
          ml={navSize === 'small' ? '5' : '0.5'}
          icon={<FiMenu />}
          onClick={() =>
            navSize === 'small' ? setSize('large') : setSize('small')
          }
        />
        <NavItem
          navSize={navSize}
          title="Dashboard"
          icon={FiHome}
          route="/dashboard"
        ></NavItem>
        <NavItem
          navSize={navSize}
          title="Profile"
          icon={FiUser}
          route="/profile"
        ></NavItem>
        <NavItem
          navSize={navSize}
          title="Workouts"
          icon={FaDumbbell}
          route="/workouts"
        ></NavItem>
        <NavItem
          navSize={navSize}
          title="Gyms"
          icon={FaCity}
          route="/gyms"
        ></NavItem>

        <Flex
          mt={30}
          direction="column"
          w="100%"
          align={navSize === 'small' ? 'center' : 'flex-start'}
        >
          <Button
            bg="none"
            _hover={{ bg: 'teal.500' }}
            borderRadius={8}
            w={navSize === 'large' && '85%'}
            fontWeight="200"
            onClick={() => toggleForm()}
          >
            <Flex>
              <Icon as={FaPlusSquare} fontSize="lg" />
              <Text ml={5} display={navSize === 'small' ? 'none' : 'flex'}>
                New Session
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>

      <Flex
        p="5%"
        direction="column"
        w="100%"
        align={navSize === 'small' ? 'none' : 'flex'}
        mb={4}
      >
        <Divider
          display={navSize === 'small' ? 'none' : 'flex'}
          borderStyle="none"
        />
        <Flex mt={4} align="center">
          <Link href="/dashboard">
            <Avatar
              size="sm"
              src={profilePic}
              ml={navSize === 'small' ? '15px' : '0px'}
            />
          </Link>
          <Flex
            direction="column"
            ml={4}
            display={navSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as="h3" size="sm">
              Unga Bunga
            </Heading>
            <Text>SerCaveman</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
