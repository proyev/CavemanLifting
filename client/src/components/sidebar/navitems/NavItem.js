import React, {useContext} from 'react';
import { Flex, Text, Icon, Link, Button } from '@chakra-ui/react';

import { CavemanContext } from '../../../CavemanContext';

export default function NavItem({ title, icon, route }) {

  const { appState, appStateDispatch } = useContext(CavemanContext);

  return (
    <Flex
      alignItems='center'
      mt={'30px'}
      w='100%'
      justifyContent={'space-between'}
    >
      { route ? (
      <Link
        _hover={{ bg: 'teal.500' }}
        p={2}
        borderRadius={8}
        w='100%'
        href={route}
      >
        <Flex
          alignItems='center'
          w='100%'
          justifyContent='space-between'
        >
          <Flex
            align={'center'}
            w={appState.showNavbar ? '100%' : '25%'}
            h='50px'
          >
            <Icon
              as={icon}
              fontSize={'xl'}
              w='100%'
            />
          </Flex>
          <Text
            mx='10px'
            display={appState.showNavbar ? 'none' : 'flex'}
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
        p={2}
        borderRadius={8}
        fontWeight='regular'
        w='100%'
        onClick={() => appStateDispatch({type: 'TOGGLE_NEW_SESSION'})}
      >
        <Flex
          alignItems='center'
          w='100%'
          justifyContent='space-between'
        >
          <Flex
            align={'center'}
            w={appState.showNavbar ? '100%' : '25%'}
            h='50px'
          >
            <Icon
              as={icon}
              fontSize={'xl'}
              w='100%'
            />
          </Flex>
          <Text
            mx='10px'
            display={appState.showNavbar ? 'none' : 'flex'}
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
