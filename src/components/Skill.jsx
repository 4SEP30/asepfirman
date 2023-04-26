import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import javascript from '../assets/img/javascript.png';
import Bootstrap from '../assets/img/bootstrap.png';
import git from '../assets/img/git.png';
import react from '../assets/img/react.png';

import php from '../assets/img/php.png';
import nodejs from '../assets/img/node-js.png';
import mysql from '../assets/img/mysql.png';

export default function Skill() {
  return (
    <Box my={20}>
      <Box>
        <Heading>Skills</Heading>
        <Text>My technical level</Text>
      </Box>

      <Box my={20}>
        <Box
          display={['block', 'block,', 'flex', 'flex']}
          justifyContent={'space-around'}
          mx={'auto'}
        >
          <Box
            w={['90%', '90%', '45%', '45%']}
            h={'400px'}
            bg={'blackAlpha.300'}
            p={5}
            borderRadius={'35px'}
            mx={'auto'}
            my={'10px'}
            boxShadow={'dark-lg'}
          >
            <Heading
              as={'h5'}
              py={10}
              fontSize={['2rem', '1.7rem', '1.7rem', '2.3rem']}
            >
              Frontend developer
            </Heading>
            <Box display={'flex'} flexDir={'column'} justifyContent={'center'}>
              <Box display={'flex'} justifyContent={'center'} my={5}>
                <Image src={html} w={['40px', '50px', '60px', '70px']} />
                <Image src={css} w={['40px', '50px', '60px', '70px']} mx={5} />
                <Image src={javascript} w={['40px', '50px', '60px', '70px']} />
              </Box>

              <Box display={'flex'} justifyContent={'center'} my={5}>
                <Image src={Bootstrap} w={['40px', '50px', '60px', '68px']} />
                <Image src={git} w={['40px', '50px', '60px', '68px']} mx={5} />
                <Image src={react} w={['40px', '50px', '60px', '68px']} />
              </Box>
            </Box>
          </Box>

          <Box
            w={['90%', '90%', '45%', '45%']}
            h={'400px'}
            bg={'blackAlpha.300'}
            p={5}
            borderRadius={'35px'}
            mx={'auto'}
            my={'10px'}
            boxShadow={'dark-lg'}
          >
            <Heading
              as={'h5'}
              py={10}
              fontSize={['2rem', '1.7rem', '1.7rem', '2.3rem']}
            >
              Backend developer
            </Heading>
            <Box display={'flex'} flexDir={'column'} justifyContent={'center'}>
              <Box display={'flex'} justifyContent={'center'} my={5}>
                <Image src={php} w={['50px', '50px', '60px', '90px']} />
                <Image
                  src={nodejs}
                  w={['50px', '50px', '60px', '90px']}
                  mx={5}
                />
                <Image src={mysql} w={['50px', '50px', '60px', '90px']} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
