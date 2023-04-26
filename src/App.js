import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import DardModeSwich from './components/DardModeSwich';
import Banner from './components/Banner';
import About from './components/About';
import Skill from './components/Skill';
import Certificate from './components/Certificate';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <DardModeSwich />
        <Banner />
        <About />
        <Skill />
        <Certificate />
        <Projects />
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
