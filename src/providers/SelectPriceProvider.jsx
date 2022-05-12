import React, { createContext, useState} from 'react'

export const SelectPrice = createContext({});

export const SelectPriceProvider = (props) => {
    const { children } = props;

    const [ price, setPrice ] = useState(null)
    return (
        <SelectPrice.Provider value={{ price, setPrice }}>
            {children}
        </SelectPrice.Provider>
    )
}