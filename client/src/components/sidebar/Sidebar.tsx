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

import NavItem from './navitems/NavItem';
import { CavemanContext } from '../../CavemanContext';

type Props = {
  toggleColorMode: () => void;
}

export default function Sidebar({ toggleColorMode }: Props) {
  const bgColor = useColorModeValue('green.400', 'green.700');

  const { appState, appStateDispatch } = useContext(CavemanContext);

  return (
    <Flex
      alignItems='center'
      bg={bgColor}
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRightRadius='15px'
      direction='column'
      pos='sticky'
      h='100vh'
      w={appState?.showNavbar ? '75px' : '225px'}
    >
      <Flex
        alignItems='center'
        as='nav'
        direction='column'
        justifyContent='center'
        p='15px'
      >
        <Flex
          justifyContent='center'
          mb='15px'
        >
          <Switch
            w='100%'
            onChange={toggleColorMode}
          />
        </Flex>
        <IconButton
          aria-label='Open menu'
          bg={bgColor}
          icon={<FiMenu />}
          w='100%'
          onClick={() => appStateDispatch && appStateDispatch({ type: 'TOGGLE_NAVBAR' })}
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
        alignItems='center'
        direction='column'
        justifyContent='flex-end'
        h='100%'
        my='30px'
        w='100%'
      >
        <Divider
          borderStyle='none'
          display={appState?.showNavbar ? 'none' : 'flex'}
          w='100%'
        />
        <Flex
          alignItems='center'
          justifyContent='space-between'
          mt='30px'
          h='50px'
          w='100%'
        >
          <Link
            _hover={{ bg: 'teal.500' }}
            borderRadius='8px'
            display='flex'
            href='/dashboard'
            p='2px'
            w='100%'
          >
            <Flex
              alignItems='center'
              justifyContent='center'
              w={appState?.showNavbar ? '100%' : '25%'}
            >
              <Avatar
                size='sm'
                src={'../../assets/caveman_profile_pic.png'}
              />
            </Flex>
            <Flex
              alignItems='flex-end'
              direction='column'
              display={appState?.showNavbar ? 'none' : 'flex'}
              justifyContent='center'
              mx='10px'
              w='75%'
            >
              <Heading
                as='h3'
                size='sm'
              >
                Unga Bunga
              </Heading>
              <Text>SerCaveman</Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
