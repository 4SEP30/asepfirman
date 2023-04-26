import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Link,
  LinkBox,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import portfolio1 from '../assets/img/portfolio-img1.png';
import portfolio2 from '../assets/img/portfolio-img2.png';
import portfolio3 from '../assets/img/portfolio-img3.png';

export default function Projects() {
  const [bg, changeBg] = useState('green');
  return (
    <Box id="projects">
      <Box my={'50px'}>
        <Heading>Projects</Heading>
        <Text>Most recent work</Text>
      </Box>

      <Box
        display={{ base: 'block', lg: 'flex' }}
        justifyContent={{ base: 'center', lg: 'space-around' }}
        my={'50px'}
      >
        <Box>
          <Card
            maxW="sm"
            borderRadius={'lg'}
            mx={'auto'}
            my={5}
            boxShadow={'dark-lg'}
          >
            <CardBody>
              <Image
                src={portfolio1}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Landing Page</Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Box>
        <Box>
          <Card maxW="sm" mx={'auto'} my={5} boxShadow={'dark-lg'}>
            <CardBody>
              <Image
                src={portfolio2}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Education</Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Box>
        <Box>
          <Card maxW="sm" mx={'auto'} my={5} boxShadow={'dark-lg'}>
            <CardBody>
              <Image
                src={portfolio3}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Ecommerce</Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
