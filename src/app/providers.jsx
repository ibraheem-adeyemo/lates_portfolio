'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { override } from '../theme'

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    ...override,
})

export function Providers({ children }) {
    return (
        <CacheProvider>
            <Provider store={store}>
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </Provider>
        </CacheProvider>
    )
}
