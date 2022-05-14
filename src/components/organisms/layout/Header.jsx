import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import React, { memo, useCallback } from 'react'
import { useHistory } from 'react-router-dom';


import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molucules/MenuDrawer'

export const Header = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const history = useHistory()

    const onClickTop = useCallback(() => { history.push('/') }, [])

    return (
        <>
        <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5}} >
            <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickTop}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg"}}>
                    電気代下げ下げ
                </Heading>
            </Flex>
            <Flex align="center" fontSize="sm" display={{ base: "none", md: "flex" }} >
                <Box pr={4}>
                    <Link onClick={onClickTop}>
                        TOPに戻る
                    </Link>
                </Box>
            </Flex>
            <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer isOpen={isOpen} onClose={onClose} onClickTop={onClickTop} />
        </>
    )
})