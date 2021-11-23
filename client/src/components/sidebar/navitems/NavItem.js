import React, {useContext} from 'react';
import { Flex, Text, Icon, Link, Button } from '@chakra-ui/react';

import { CavemanContext } from '../../../CavemanContext';

export default function NavItem({ title, icon, route }) {

  const { appState, appStateDispatch } = useContext(CavemanContext);

  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      mt='30px'
      w='100%'
    >
      { route ? (
      <Link
        _hover={{ bg: 'teal.500' }}
        borderRadius='8px'
        href={route}
        p='2px'
        w='100%'
      >
        <Flex
          alignItems='center'
          justifyContent='space-between'
          w='100%'
        >
          <Flex
            align='center'
            h='50px'
            w={appState.showNavbar ? '100%' : '25%'}
          >
            <Icon
              as={icon}
              fontSize='xl'
              w='100%'
            />
          </Flex>
          <Text
            display={appState.showNavbar ? 'none' : 'flex'}
            mx='10px'
            w='75%'
          >
            {title}
          </Text>
        </Flex>
      </Link>
      ) : (
      <Button
        _hover={{ bg: 'teal.500' }}
        bg='none'
        borderRadius='8px'
        fontWeight='regular'
        p='2px'
        w='100%'
        onClick={() => appStateDispatch({type: 'TOGGLE_NEW_SESSION'})}
      >
        <Flex
          alignItems='center'
          justifyContent='space-between'
          w='100%'
        >
          <Flex
            align='center'
            h='50px'
            w={appState.showNavbar ? '100%' : '25%'}
          >
            <Icon
              as={icon}
              fontSize='xl'
              w='100%'
            />
          </Flex>
          <Text
            display={appState.showNavbar ? 'none' : 'flex'}
            mx='10px'
            w='75%'
          >
            {title}
          </Text>
        </Flex>
      </Button>
      )
      }
    </Flex>
  );
}
