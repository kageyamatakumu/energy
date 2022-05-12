import React, { memo, useContext, useEffect } from 'react'
import { SelectHour } from '../../providers/SelectHourProvider'
import { SelectPeriod } from '../../providers/SelectPeriodProvider';
import { SelectPower } from '../../providers/SelectPowerProvider';
import { SelectPrice } from '../../providers/SelectPriceProvider';
import { SelectQuanity } from '../../providers/SelectQuanityProvider';
import { ElectricBilll } from '../../providers/ElectricBillProvider'
import { Chart, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"
import { Box, Heading, Text } from '@chakra-ui/react';
import { Center, Flex, Stack, Image,  Modal, ModalOverlay, ModalContent, useDisclosure, ModalHeader, ModalCloseButton, ModalBody, Button} from '@chakra-ui/react';

import  money from '../../images/Money.png'
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useHistory } from 'react-router-dom';

Chart.register(...registerables)


export const Led = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    const { hour } = useContext(SelectHour);
    const { power, setPower } = useContext(SelectPower);
    const { quanity } = useContext(SelectQuanity);
    const { price } = useContext(SelectPrice);
    const { period } = useContext(SelectPeriod);
    const { electric } = useContext(ElectricBilll);

    useEffect(() => {
            if(power >= 80){
                setPower(12.5)
            }else if(60 <= power && power < 80){
                setPower(4.9)
            } else{
                setPower(4)
            }
    }, [])


    const led = Math.round(power*hour*period*price*quanity/1000)

    const data = {
        // x 軸のラベル
        labels: ['現状', 'LED'],
        datasets: [
            {
                label: 'Dataset',
                // データの値
                data: [electric, led],
                // グラフの背景色
                backgroundColor: [
                    '#C58181',
                    '#81C5BD',
                ],
                // グラフの枠線の色
                borderColor: [
                    '#C58181',
                    '#81C5BD',
                ],
                // グラフの枠線の太さ
                borderWidth: 1,
            },
        ],
    };

    const onCkickResult = () => {
        history.push('/result')
    }

    const onClickSite = () => {
        onOpen();
    }

    return (
        <>
        <Box ml="auto" mr="auto" mt={5}>
            <Heading as="h1" size="lg" textAlign="center">LED照明交換すると...</Heading>
        </Box>
        <Box mt="5%">
            <Flex>
                <Box w="50%" pt={50}>
                    <Box w="80%" ml="auto" mr="auto">
                        <Bar data={data}/>
                    </Box>
                    <Box mt={100} ml="40%">
                        <Stack spacing={30}>
                            <Box>
                                <Flex>
                                    <Center w='40px' h='40px' bg='#C58181' color='white'>
                                    </Center>
                                    <Box ml={5}>
                                        <Text fontSize="30px">{(Math.round(electric)).toLocaleString()}円</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex>
                                    <Center w='40px' h='40px' bg='#81C5BD' color='white'>
                                    </Center>
                                    <Box ml={5}>
                                        <Text fontSize="30px">{(led).toLocaleString()}円</Text>
                                    </Box>
                                </Flex>
                                <Box mt={30} ml={-50} >
                                    <Button onClick={onClickSite} bg="yellow.400" color="white" mr={50}>仮LED選定</Button>
                                    <PrimaryButton onClick={onCkickResult}>1ヶ月の場合に戻る</PrimaryButton>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box w="50%">
                    <Flex>
                        <Heading as="h1" fontSize="100px" color="#EECD1D" ml={100} mt={50}>{(Math.round(electric - led)).toLocaleString()}</Heading>
                        <Heading as="h1" fontSize="100px" mt={50}>円</Heading>
                    </Flex>
                    <Box>
                        <Heading ml={100} fontSize="100px">DOWN</Heading>
                    </Box>
                    <Box mt={-50}>
                        <Image src={money} boxSize='600px'/>
                    </Box>
                </Box>
            </Flex>
        </Box>
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
