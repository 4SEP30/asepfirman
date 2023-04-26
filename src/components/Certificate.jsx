import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import reactRouter from '../assets/img/sertifikat1.jpg';
import portfolio from '../assets/img/sertifikat2.jpg';
import reactHook from '../assets/img/sertifikat3.jpg';

import react1 from '../assets/img/sertifikat4.jpg';
import react2 from '../assets/img/sertifikat5.jpg';
import react3 from '../assets/img/sertifikat6.jpg';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function Certificate() {
  return (
    <Box id="certificate">
      <Box my={'50px'}>
        <Heading>Certificate</Heading>
        <Text>My Abilities</Text>
      </Box>

      <Box
        display={'flex'}
        flexDir={'column'}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={5}
        my={8}
      >
        <Box
          display={{ base: 'block', lg: 'flex' }}
          gap={{ base: '0px', lg: '5px' }}
        >
          <Image
            src={reactRouter}
            w={400}
            boxShadow={'dark-lg'}
            p={{ base: '10px' }}
          />
          <Image
            src={portfolio}
            w={400}
            boxShadow={'dark-lg'}
            p={{ base: '10px' }}
          />
          <Image
            src={reactHook}
            w={400}
            boxShadow={'dark-lg'}
            p={{ base: '10px' }}
          />
        </Box>
        <Box
          display={{ base: 'block', lg: 'flex' }}
          gap={{ base: '0px', lg: '5px' }}
        >
          <Image
            src={react1}
            w={400}
            boxShadow={'dark-lg'}
            p={{ base: '10px' }}
          />
          <Image
            src={react2}
            w={400}
            boxShadow={'dark-lg'}
            p={{ base: '10px' }}
          />
          <Image
            src={react3}
            w={400}
            boxShadow={'dark-lg'}
            p={{ base: '10px' }}
          />
        </Box>
      </Box>

      <Button
        w={'250px'}
        h={'60px'}
        bg={'blackAlpha.800'}
        color={'white'}
        colorScheme="blue"
        fontSize={'18px'}
        borderRadius={'15px'}
      >
        Lihat Selengkapnya <ExternalLinkIcon mx={'10px'} />
      </Button>
    </Box>
  );
}
