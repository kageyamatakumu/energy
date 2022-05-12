import React, { createContext, useState} from 'react'

export const SelectHour = createContext({});

export const SelectHourProvider = (props) => {
    const { children } = props;

    const [ hour, setHour ] = useState(null)
    return (
        <SelectHour.Provider value={{ hour, setHour }}>
            {children}
        </SelectHour.Provider>
    )
}