import { Button } from '@chakra-ui/react'
import React from 'react'

export const PrimaryButton = (props) => {
    const { children, onClick, disable } = props;
    return (
        <>
            <Button bg="teal.600" color="white" _hover={{opacity: 0.8}} onClick={onClick} disabled={disable}>
                {children}
            </Button>
        </>
    )
}
