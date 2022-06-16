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
import { Center, Flex, Stack, Image, useDisclosure, Button} from '@chakra-ui/react';

import  money from '../../images/Money.png'
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { LedModal } from '../organisms/Modal/LedModal';
import { ModalButton } from '../atoms/button/ModalButton';

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
            }else if(power >= 60 && power < 80){
                setPower(4.9)
            } else{
                setPower(4)
            }
    }, [])

    const onClick20 = () => {
        setPower(9)
    }

    const onClick40 =() => {
        setPower(18)
    }


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

    const onCkickResult = () => history.push('/result')

    const onClickSite = () => onOpen();

    return (
        <>
        <Box ml="auto" mr="auto" mt={5}>
            <Heading as="h1" size="lg" textAlign="center">LED照明交換すると...</Heading>
        </Box>
        <Box mt="2%" textAlign="center">
            <Button mr={1} color="teal.400" onClick={onClick20}>蛍光灯20形(蛍光灯の結果はこちら)</Button>
            <Button ml={1} color="teal.400" onClick={onClick40}>蛍光灯40形(蛍光灯の結果はこちら)</Button>
        </Box>
        <Box>
            <Flex display={{base: "block", md: "block", lg: "flex"}} >
                <Box w={{base: "100%", md: "100%", lg: "50%"}} display={{base: 'block', md: 'block', lg: "none"}}>
                    <Flex justifyContent="center">
                        <Heading as="h1" fontSize={{base: "40px", md: "70px", lg: "100px"}} color="#EECD1D"  mt={{base: 3, md: 50}}>{(Math.round(electric - led)).toLocaleString()}</Heading>
                        <Heading as="h1" fontSize={{base: "40px", md: "70px", lg: "100px"}} mt={{base: 3, md: 50}}>円</Heading>
                    </Flex>
                    <Box>
                        <Heading  textAlign="center" fontSize={{base: "40px", md: "70px", lg: "100px"}}>DOWN</Heading>
                    </Box>
                </Box>
                <Box w={{base: "100%", md: "100%", lg: "50%"}} pt={50} mb={{base:10, md: 0}}>
                    <Box w={{base: "100%", md: "80%"}} ml="auto" mr="auto">
                        <Bar data={data}/>
                    </Box>
                    <Box mt={{base: 30, md: 50, lg: 100}} ml={{base: "20%", md: "40%"}}>
                        <Stack spacing={{base:15, md: 30}}>
                            <Box>
                                <Flex alignItems="center">
                                    <Center w={{base: "20px", md: '40px'}} h={{base: "20px", md: '40px'}} bg='#C58181' color='white'>
                                    </Center>
                                    <Box ml={5}>
                                        <Text fontSize={{base: "20px", md: "30px"}}>{(Math.round(electric)).toLocaleString()}円</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex alignItems="center">
                                    <Center w={{base: "20px", md: '40px'}} h={{base: "20px", md: '40px'}} bg='#81C5BD' color='white'>
                                    </Center>
                                    <Box ml={5}>
                                        <Text fontSize={{base: "20px", md: "30px"}}>{(led).toLocaleString()}円</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Stack>
                    </Box>
                    <Box mt={30} textAlign="center">
                        <Box>
                            <PrimaryButton onClick={onCkickResult}>1ヶ月の場合に戻る</PrimaryButton>
                        </Box>
                        <Box mt={30}>
                            <ModalButton onClick={onClickSite}>LED選定詳細はこちら</ModalButton>
                        </Box>
                    </Box>
                </Box>
                <Box w={{base: "100%", md: "50%"}} display={{base: 'none', md: 'none', lg: "block"}}>
                    <Flex>
                        <Heading as="h1" fontSize={{base: "70px", md: "100px"}} color="#EECD1D" ml={100} mt={50}>{(Math.round(electric - led)).toLocaleString()}</Heading>
                        <Heading as="h1" fontSize={{base: "70px", md: "100px"}} mt={50}>円</Heading>
                    </Flex>
                    <Box>
                        <Heading ml={100} fontSize={{base: "70px", md: "100px"}}>DOWN</Heading>
                    </Box>
                    <Box mt={-50}>
                        <Image src={money} boxSize='600px'/>
                    </Box>
                </Box>
            </Flex>
        </Box>
        <LedModal isOpen={isOpen} onClose={onClose}/>
        </>
    )
})
