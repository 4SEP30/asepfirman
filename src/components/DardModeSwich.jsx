import {
  Flex,
  Switch,
  useColorMode,
  Link,
  Button,
  IconButton,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import React from 'react';

export default function DardModeSwich() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [display, changeDisplay] = useState('none');
  const bg = useColorModeValue('white', '#1A202C');
  const color = useColorModeValue('black', 'white');

  return (
    <Flex>
      <Flex my={7} mx={5}>
        <Heading>Indexty</Heading>
      </Flex>
      <Flex
        pos={'fixed'}
        top={'1rem'}
        right={'1rem'}
        align={'center'}
        zIndex={19}
        bg={bg}
        borderRadius={15}
        boxShadow={'dark-lg'}
      >
        <Flex display={['none', 'none', 'flex', 'flex']} color={color}>
          <Link href="">
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="Home"
              my={5}
              w={'100%'}
            >
              Home
            </Button>
          </Link>

          <Link href="#about">
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="About"
              my={5}
              w={'100%'}
            >
              About
            </Button>
          </Link>

          <Link href="#certificate">
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="About"
              my={5}
              w={'100%'}
            >
              Certificate
            </Button>
          </Link>

          <Link href="#projects">
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="About"
              my={5}
              w={'100%'}
            >
              Projects
            </Button>
          </Link>

          <Link href="#contact">
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="Contanct"
              my={5}
              w={'100%'}
            >
              Contanct
            </Button>
          </Link>
        </Flex>

        <IconButton
          aria-label="Open Menu"
          size={'lg'}
          mr={2}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => changeDisplay('flex')}
        />

        <Switch
          color={'green'}
          isChecked={isDark}
          onChange={toggleColorMode}
        ></Switch>
      </Flex>

      <Flex
        w={'100vw'}
        bgColor={bg}
        zIndex={20}
        h={'100vh'}
        pos={'fixed'}
        top={'0'}
        left={'0'}
        overflowY={'auto'}
        flexDir={'column'}
        display={display}
      >
        <Flex justify={'flex-end'}>
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size={'lg'}
            icon={<CloseIcon />}
            onClick={() => {
              changeDisplay('none');
            }}
            bgColor={bg}
          />
        </Flex>
        <Flex flexDir={'column'} align={'center'} bgColor={bg}>
          <Link>
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="Home"
              my={5}
              w={'100%'}
            >
              Home
            </Button>
          </Link>

          <Link>
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="About"
              my={5}
              w={'100%'}
            >
              About
            </Button>
          </Link>

          <Link>
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="About"
              my={5}
              w={'100%'}
            >
              Certificate
            </Button>
          </Link>

          <Link>
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="About"
              my={5}
              w={'100%'}
            >
              Projects
            </Button>
          </Link>

          <Link>
            <Button
              as={'a'}
              variant={'ghost'}
              aria-label="Contanct"
              my={5}
              w={'100%'}
            >
              Contanct
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
