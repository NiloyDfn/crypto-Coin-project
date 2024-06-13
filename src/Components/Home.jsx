import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import btcsrc from '../assets/btc.png';

const Home = () => {
  return (
    <Box w="full" h="100vh" bg="blackAlpha.900" position="relative">
      <Image
        w="full"
        h="full"
        objectFit="contain"
        src={btcsrc}
        alt="Bitcoin Image"
      />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize="6xl"
        fontWeight="600"
        color="white"
        textAlign="center"
      >
        Crypto Market
      </Text>
    </Box>
  );
};

export default Home;
