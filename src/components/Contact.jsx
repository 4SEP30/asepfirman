import {
  ArrowRightIcon,
  ChatIcon,
  EmailIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

export default function Contact() {
  let [value, setValue] = React.useState('');

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <Box id="contact">
      <Box my={'80px'}>
        <Heading>Contact Me</Heading>
        <Text>Let's Talk</Text>
      </Box>

      <Box
        display={{ base: 'block', lg: 'flex' }}
        justifyContent={'space-around'}
      >
        <Box w={{ base: '100%', lg: '40%' }}>
          <Box>
            <Heading my={10}>Talk to Me</Heading>
          </Box>
          <Box mx={'auto'}>
            <Box
              bg={'blackAlpha.300'}
              w={'350px'}
              py={'20px'}
              mx={'auto'}
              my={5}
              boxShadow={'xl'}
              borderRadius={10}
            >
              <EmailIcon />
              <Text>Email</Text>
              <Text fontSize={'16px'} color={'gray'}>
                user@gmail.com
              </Text>
              <Text fontSize={'16px'} color={'gray'}>
                Write me <ArrowRightIcon mx={1} fontSize={'11px'} />{' '}
              </Text>
            </Box>
            <Box
              bg={'blackAlpha.300'}
              w={'350px'}
              py={'20px'}
              mx={'auto'}
              my={5}
              boxShadow={'xl'}
              borderRadius={10}
            >
              <PhoneIcon />
              <Text>Whatsapp</Text>
              <Text fontSize={'16px'} color={'gray'}>
                999-888-777
              </Text>
              <Text fontSize={'16px'} color={'gray'}>
                Write me <ArrowRightIcon mx={1} fontSize={'11px'} />{' '}
              </Text>
            </Box>
            <Box
              bg={'blackAlpha.300'}
              w={'350px'}
              py={'20px'}
              mx={'auto'}
              my={5}
              boxShadow={'xl'}
              borderRadius={10}
            >
              <ChatIcon />
              <Text>Massenger</Text>
              <Text fontSize={'16px'} color={'gray'}>
                user.fb123
              </Text>
              <Text fontSize={'16px'} color={'gray'}>
                Write me <ArrowRightIcon mx={1} fontSize={'11px'} />{' '}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box w={{ base: '90%', lg: '40%' }} mx={'auto'}>
          <Heading my={10}>Write me your project</Heading>

          <FormControl isRequired w={'100%'} my={5}>
            <FormLabel>First name</FormLabel>
            <Input placeholder="Insert your name" h={'60px'} boxShadow={'xl'} />
          </FormControl>

          <FormControl isRequired my={5}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Insert your name"
              h={'60px'}
              boxShadow={'xl'}
            />
          </FormControl>

          <FormControl isRequired my={5}>
            <FormLabel>Project</FormLabel>

            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Insert your name"
              isRequired
              boxShadow={'xl'}
            />
          </FormControl>

          <Button
            w={'250px'}
            h={'60px'}
            bg={'blackAlpha.800'}
            color={'white'}
            colorScheme="blue"
            fontSize={'18px'}
            borderRadius={'15px'}
            my={10}
          >
            Lihat Selengkapnya <ExternalLinkIcon mx={'10px'} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
