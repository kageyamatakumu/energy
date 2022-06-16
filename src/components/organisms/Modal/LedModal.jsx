import { Box, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import React, { memo } from 'react'
import money from '../../../images/Money.png'

export const LedModal = memo((props) => {
    const {isOpen, onClose} = props;
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size='xl' autoFocus={false}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">LED選定詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={2} my={6}>
                        <Flex position="container">
                            <Stack spacing={10} w="65%">
                                <Box>
                                    白熱電球 100W → LED 12.5W
                                </Box>
                                <Box>
                                    白熱電球 60W → LED 4.9W
                                </Box>
                                <Box>
                                    白熱電球 40W → LED 4W
                                </Box>
                                <Box>
                                    蛍光灯 40W → LED 18W
                                </Box>
                                <Box>
                                    蛍光灯 20W → LED 9W
                                </Box>
                            </Stack>
                            <Box w="35%" position="absolute" bottom="100px" right="10px">
                                <Image src={money} />
                            </Box>
                        </Flex>
                        <Box textAlign="center" mt={20}>
                            <Text>※選定に関しての注意事項</Text>
                            <Text>某大手メーカのホームページより選定させていただいています</Text>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
})
