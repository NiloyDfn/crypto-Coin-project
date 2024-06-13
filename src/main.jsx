import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

export const server = `https://api.coingecko.com/api/v3/`
