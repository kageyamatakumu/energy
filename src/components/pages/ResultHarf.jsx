import React, { memo, useCallback, useContext } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import { ElectricBilll } from '../../providers/ElectricBillProvider'

import {PrimaryButton} from '../atoms/button/PrimaryButton'

export const ResultHarf = memo(() => {
    const history = useHistory();

    const { electric } = useContext(ElectricBilll)
    const Result = Math.round(electric*6)

    const onClickLED = useCallback(() => {
        history.push("/result/led")
    }, [])
    return (
        <div>
            <Box mt={{base: 5, md: 50, lg: 100}}  textAlign="center">
                <Box>
                    <Heading as="h1" fontSize={{base: "lg", md: "6xl"}}>電気代</Heading>
                </Box>
                <Box mt={{base: 5, md: 50}}>
                    <Heading color="#C58181" fontSize={{base: "3xl", md: "6xl"}} >{Result.toLocaleString()}円</Heading>
                </Box>
            </Box>
            <Box>
                <Flex justifyContent="center" mt={50} fontWeight='bold' display={{base: "block", md: "flex"}} textAlign={{base: "center"}}>
                    <Box color='teal.400' fontSize={{base: "lg", md:'4xl'}}>
                        <Link to="/result">1ヶ月の場合</Link>
                    </Box>
                    <Box mr={{base: 0, md: 50}} ml={{base: 0, md: 50}} my={{base: 5, md: 0}} color='teal.700' fontSize={{base: "lg", md:'4xl'}}fontWeight='bold'>
                        <Link to="/result/harf" >6ヶ月の場合</Link>
                    </Box>
                    <Box color='teal.400' fontSize={{base: "lg", md:'4xl'}} fontWeight='bold'>
                        <Link to="/result/one_year">1年間の場合</Link>
                    </Box>
                </Flex>
            </Box>
            <Box mt={50} textAlign="center">
                <PrimaryButton onClick={onClickLED}>
                    LEDに変えた場合(1ヶ月)
                </PrimaryButton>
            </Box>
        </div>
    )
})
