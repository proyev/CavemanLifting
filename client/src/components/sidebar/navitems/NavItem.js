import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  //   MenuList,
} from '@chakra-ui/react';

export default function NavItem({ navSize, title, icon, route }) {
  return (
    <Flex
      mt={30}
      direction="column"
      w="100%"
      align={navSize === 'small' ? 'center' : 'flex-start'}
    >
      <Menu placement="right">
        <Link
          _hover={{ bg: 'teal.500' }}
          p={3}
          borderRadius={8}
          w={navSize === 'large' && '100%'}
          href={route}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" />
              <Text ml={5} display={navSize === 'small' ? 'none' : 'flex'}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
