import { Box, Button, Flex, Center, Heading, Text, Modal, ModalOverlay, ModalContent, useDisclosure, useCallbackRef, ModalHeader, ModalCloseButton, ModalBody, Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import main from '../../images/top.jpg';
import Paid from '../../images/Paid.png';


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
        <Flex mt={50} mx={50} display={{ base: "block", md: "flex" }}>
            <Box w="50%">
                <Box textAlign="center">
                    <Heading as="h1" fontSize="100px" color="teal.500" mt={50}>電気代下げ下げ</Heading>
                    <Heading as="h4" fontSize="60px" color="#C4C581" mt={10}>照明の電気</Heading>
                    <Button onClick={onClickSite }>このサイトは？</Button>
                </Box>
                <Box textAlign="center" mt={50}>
                    <PrimaryButton bg="teal" color="white" onClick={onClickAcountApp}>
                        スタート
                    </PrimaryButton>
                </Box>
            </Box>
            <Box w="50%">
                <Image src={main} />
            </Box>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} size='xl' autoFocus={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>「電気代下げ下げ」とは？</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={2} my={6}>
                    <Flex position="container">
                        <Stack spacing={10} w="65%">
                            <Box>
                                電球のw数、個数、点灯時間、電力単価、日数
                                この5つの数字を入力するだけで
                                電気明細料金の中の照明のみに発生する電気代を
                                知ることができます。
                            </Box>
                            <Box>
                                生きる上で絶対に欠かせない電気。
                                そんな電気料金が
                                少しでも下がる可能性を見つけよう。
                            </Box>
                        </Stack>
                        <Box w="35%" position="absolute" bottom="10px" right="10px">
                            <Image src={Paid} />
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}