import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react';

export default function Button() {
  return (
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
  );
}
