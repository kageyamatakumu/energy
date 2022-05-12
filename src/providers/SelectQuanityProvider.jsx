import React, { createContext, useState} from 'react'

export const SelectQuanity = createContext({});

export const SelectQuanityProvider = (props) => {
    const { children } = props;

    const [ quanity, setQuanity ] = useState(null)
    return (
        <SelectQuanity.Provider value={{ quanity, setQuanity }}>
            {children}
        </SelectQuanity.Provider>
    )
}
