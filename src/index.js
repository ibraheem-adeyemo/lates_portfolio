import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { store } from './store/store';
import { override } from './theme';

// console.log(theme.color)

export const localExtendTheme = extendTheme(
    {        
        config: {
            initialColorMode: 'light',
            useSystemColorMode: false,
        },
        ...override,
        styles: {
            // global: {
            //   body: {
            //     bg: 'white', // Dark background for dark mode
            //     color: 'brand.primary-text',
            //   },
            // },
          },
    }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
        <ChakraProvider theme={localExtendTheme}>
            <App />  {/* Your app goes here */}
        </ChakraProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
