import React, { useContext } from 'react';
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
} from '@chakra-ui/react';
import { FiMenu, FiHome, FiUser } from 'react-icons/fi';
import { FaCity, FaDumbbell, FaPlusSquare } from 'react-icons/fa';
import profilePic from '../../assets/caveman_profile_pic.PNG';
import NavItem from './navitems/NavItem';
import { CavemanContext } from '../../CavemanContext';

export default function Sidebar({
  toggleColorMode,
}) {
  const bgColor = useColorModeValue('green.400', 'green.700');

  const { appState, appStateDispatch } = useContext(CavemanContext);

  return (
    <Flex
      alignItems='center'
      bg={bgColor}
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRightRadius={'15px'}
      direction='column'
      pos='sticky'
      h='100vh'
      w={appState.showNavbar ? '75px' : '225px'}
    >
      <Flex
        alignItems='center'
        p='15px'
        direction='column'
        as='nav'
        justifyContent='center'
      >
        <Flex
          justifyContent='center'
          mb='15px'
        >
          <Switch
            onChange={toggleColorMode}
            w='100%'
          />
        </Flex>
        <IconButton
          bg={bgColor}
          w='100%'
          icon={<FiMenu />}
          onClick={() => appStateDispatch({type: 'TOGGLE_NAVBAR'})}
        />
        <NavItem
          title='Dashboard'
          icon={FiHome}
          route='/dashboard'
        />
        <NavItem
          title='Profile'
          icon={FiUser}
          route='/profile'
        />
        <NavItem
          title='Workouts'
          icon={FaDumbbell}
          route='/workouts'
        />
        <NavItem
          title='Gyms'
          icon={FaCity}
          route='/gyms'
        />
        <NavItem
          title='New Session'
          icon={FaPlusSquare}
        />
      </Flex>

      {/*bottom avatar thingy */}
      <Flex
        p='5%'
        direction='column'
        //this
        align={appState.showNavbar ? 'none' : 'flex'}
        //
        w='100%'
        mb={4}
      >
        <Divider
          display={appState.showNavbar ? 'none' : 'flex'}
          borderStyle='none'
        />
        <Flex mt={4} align='center'>
          <Link href='/dashboard'>
            <Avatar
              size='sm'
              src={profilePic}
              // ml={navSize === 'small' ? '15px' : '0px'}
            />
          </Link>
          <Flex
            direction='column'
            ml={4}
            // display={navSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as='h3' size='sm'>
              Unga Bunga
            </Heading>
            <Text>SerCaveman</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
