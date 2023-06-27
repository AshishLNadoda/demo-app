import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CustomProductProvider from './components/Component/ProductContext/ProductContext';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CustomProductProvider>
<ChakraProvider>

  <App />
</ChakraProvider>
  </CustomProductProvider>
  </BrowserRouter>
  
);
reportWebVitals();