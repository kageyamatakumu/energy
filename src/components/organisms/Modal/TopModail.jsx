import { Box, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react'
import React, { memo } from 'react'
import Paid from '../../../images/Paid.png';
import Setsumei from '../../../images/setsumei.jpg'

export const TopModail = memo((props) => {
    const {isOpen, onClose} = props;
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size='xl' autoFocus={false}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>「電気代下げ下げ」とは？</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={2} my={0}>
                        <Flex>
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
                            <Box w="35%" >
                                <Image src={Paid} />
                            </Box>
                        </Flex>
                        <ModalHeader mt={4}>使い方</ModalHeader>
                        <Box>
                            <Image src={Setsumei} />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
})
