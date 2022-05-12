import React, { createContext, useState} from 'react'

export const SelectPower = createContext({});

export const SelectPowerProvider = (props) => {
    const { children } = props;

    const [ power, setPower ] = useState(null)
    return(
        <SelectPower.Provider value={{ power, setPower}}>
            {children}
        </SelectPower.Provider>
    )
}