import { Box, Flex, Heading, useDisclosure, useCallbackRef } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import main from '../../images/top.jpg';
import { TopModail } from '../organisms/Mordal/TopModail';
import { ModalButton } from '../atoms/button/ModalButton';


export const Top = () => {
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onClickAcountApp = useCallbackRef(() => {
        history.push('/input')
    }, [])

    const onClickSite = () => {
        onOpen();
    }

    return (
        <>
        <Flex mt={{base: "none", md: 25, lg: 50}} mx={{base: "none", md: 30, lg: 50}} display={{ base: "block", md: "block", lg: "flex" }}>
            <Box w={{base: "100%", md: "100%", lg: "50%"}}>
                <Box textAlign="center">
                    <Heading as="h1" fontSize={{ base: "40px", md:"70px", lg: "100px"}} color="teal.500" mt={{base: 30, md: 50}}>電気代下げ下げ</Heading>
                    <Heading as="h4" fontSize={{base: "30px", md: "40px", lg: "60px"}} color="#C4C581" mt={{base: 5, md: 6, lg: 10}}>照明の電気</Heading>
                    <Box mt={{base: 30, md: 30, lg: 50}}>
                        <ModalButton onClick={onClickSite}>このサイトは？</ModalButton>
                    </Box>
                </Box>
                <Box textAlign="center" mt={{base: 5, md: 30, lg: 50}}>
                    <PrimaryButton bg="teal" color="white" onClick={onClickAcountApp}>
                        スタート
                    </PrimaryButton>
                </Box>
            </Box>
            <Box w={{base: "70%", md: "70%", lg: "50%"}} mx={{base: "auto"}} mt={{base: "5"}}>
                <Image src={main} />
            </Box>
        </Flex>
        <TopModail isOpen={isOpen} onClose={onClose}/>
        </>
    )
}