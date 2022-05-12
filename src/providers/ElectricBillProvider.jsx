import React, { createContext, useState} from 'react'

export const ElectricBilll = createContext({});

export const ElectricBillProvider = (props) => {
    const { children } = props;

    const [ electric, setElectric ] = useState(null)
    return (
        <ElectricBilll.Provider value={{ electric, setElectric }}>
            {children}
        </ElectricBilll.Provider>
    )
}
