import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import avatar from '../assets/img/kopi3.jpg';
import { CalendarIcon, ExternalLinkIcon, DownloadIcon } from '@chakra-ui/icons';

export default function About() {
  return (
    <Box id="about" py={'20px'}>
      <Box className="text-about">
        <Heading>About Me</Heading>
        <Text>My introduction</Text>
      </Box>

      <Box
        display={['block', 'block,', 'flex', 'flex']}
        justifyContent={'center'}
        my={20}
        mx={{ base: 'auto' }}
      >
        <Box w={{ base: '80%', lg: '40%' }} mx={{ base: 'auto' }}>
          <Image
            src={avatar}
            borderRadius={30}
            mx={{ base: 'auto' }}
            boxShadow={'dark-lg'}
          />
        </Box>

        <Box w={{ base: '100%', lg: '40%' }} mx={{ base: 'auto' }}>
          <Box
            display={['block', 'block,', 'flex', 'flex']}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box>
              <Box
                w={{ base: '90%', lg: '150px' }}
                h={{ base: '90%', lg: '150px' }}
                bg={'blackAlpha.200'}
                borderRadius={'15px'}
                mx={{ base: 'auto', lg: '0px' }}
                my={{ base: '20px', lg: '0px' }}
                boxShadow={'xl'}
              >
                <Box p={6}>
                  <CalendarIcon />
                  <Text fontWeight={'semibold'}>Experience</Text>
                  <Text fontSize={'13px'}>8 * years</Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                w={{ base: '90%', lg: '150px' }}
                h={{ base: '90%', lg: '150px' }}
                bg={'blackAlpha.200'}
                borderRadius={'15px'}
                mx={{ base: 'auto', lg: '5px' }}
                my={{ base: '20px', lg: '0px' }}
                boxShadow={'xl'}
              >
                <Box p={6}>
                  <CalendarIcon />
                  <Text fontWeight={'semibold'}>Completed</Text>
                  <Text fontSize={'13px'}>48 * Projects</Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                w={{ base: '90%', lg: '150px' }}
                h={{ base: '90%', lg: '150px' }}
                bg={'blackAlpha.200'}
                borderRadius={'15px'}
                mx={{ base: 'auto', lg: '0px' }}
                my={{ base: '20px', lg: '0px' }}
                boxShadow={'xl'}
              >
                <Box p={6}>
                  <CalendarIcon />
                  <Text fontWeight={'semibold'}>Experience</Text>
                  <Text fontSize={'13px'}>8 * years</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box w={'87%'} mx={'auto'} my={'20px'}>
            <Text
              textAlign={['center', 'center', 'center', 'start']}
              my={'30px'}
            >
              Frontend developer, i create web pages with UI / UX user
              interface, I have years of experience and many clients are happy
              with the projects carried out
            </Text>
            <Button
              w={'250px'}
              h={'70px'}
              bg={'blackAlpha.800'}
              color={'white'}
              colorScheme="blue"
              fontSize={'18px'}
              mt={'20px'}
              borderRadius={'15px'}
              textAlign={'start'}
            >
              Download CV <DownloadIcon mx={'10px'} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
