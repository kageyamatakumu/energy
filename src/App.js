import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/organisms/layout/Header';
import { Router } from './router/Router';
import { ElectricBillProvider } from './providers/ElectricBillProvider';
import { SelectHourProvider } from './providers/SelectHourProvider';
import { SelectPeriodProvider } from './providers/SelectPeriodProvider';
import { SelectPowerProvider } from './providers/SelectPowerProvider';
import { SelectPriceProvider } from './providers/SelectPriceProvider';
import { SelectQuanityProvider } from './providers/SelectQuanityProvider';

// import './App.css'
import { theme } from './theme/theme';




export const App = () => {
    return (
        <>
            <SelectHourProvider>
                <SelectQuanityProvider>
                    <SelectPriceProvider>
                        <SelectPeriodProvider>
                            <SelectPowerProvider>
                                <ChakraProvider theme={theme}>
                                    <BrowserRouter>
                                        <Header />
                                            <ElectricBillProvider>
                                                <Router />
                                            </ElectricBillProvider>
                                    </BrowserRouter>
                                </ChakraProvider>
                            </SelectPowerProvider>
                        </SelectPeriodProvider>
                    </SelectPriceProvider>
                </SelectQuanityProvider>
            </SelectHourProvider>
        </>
    )
}

