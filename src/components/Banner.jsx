import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import avatar from '../assets/img/kopi3.jpg';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function Banner() {
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box pos={'relative'} my={{ base: '50px', md: '200px', lg: '50px' }}>
      <Box
        display={['block', 'block', 'flex', 'flex']}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box w={{ base: '100%', md: '55%' }}>
          <Heading fontSize={'4rem'} fontWeight={'semibold'} color={color}>
            Asep Firman👋
          </Heading>
          <Text></Text>
          <Text fontWeight={'medium'} color={'teal'} my={'5px'} fontSize={'xl'}>
            <ReactTypingEffect
              eraseSpeed={50}
              speed={80}
              eraseDelay={1000}
              typingDelay={1000}
              text={[
                ' Front-End Developer',
                ' Back-End Developer',
                ' Full Stack Developer',
              ]}
            />
          </Text>
          <Text w={'50%'} mx={'auto'} fontSize={'15px'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </Text>
          <Button
            w={'250px'}
            h={'60px'}
            bg={'blackAlpha.800'}
            color={'white'}
            colorScheme="blue"
            fontSize={'18px'}
            mt={'20px'}
            borderRadius={'15px'}
          >
            Say Hello <ExternalLinkIcon mx={'10px'} />
          </Button>
        </Box>
        <Box
          w={{ base: '100%', md: '55%' }}
          mx={{ base: 'auto' }}
          className="banner-images"
          borderRadius={'full'}
        >
          <Image
            borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
            src={avatar}
            alt="Dan Abramov"
            mx={{ base: 'auto' }}
            my={{ base: '50px', md: '0', lg: '0' }}
          />
        </Box>
      </Box>
    </Box>
  );
}
