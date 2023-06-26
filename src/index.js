import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './components/assignmentcontextapi/Contextapi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
    <ContextProvider >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </ContextProvider>
  </ChakraProvider>
);

