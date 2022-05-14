import { Button } from '@chakra-ui/react'
import React from 'react'

export const ModalButton = (props) => {
    const { children, onClick } = props;
    return (
        <>
            <Button onClick={onClick}>
                {children}
            </Button>
        </>
    )
}
