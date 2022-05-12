import React, { createContext, useState} from 'react'

export const SelectPeriod = createContext({});

export const SelectPeriodProvider = (props) => {
    const { children } = props;

    const [ period, setPeriod ] = useState(null)
    return (
        <SelectPeriod.Provider value={{ period, setPeriod }}>
            {children}
        </SelectPeriod.Provider>
    )
}